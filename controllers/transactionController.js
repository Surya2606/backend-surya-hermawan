const Product = require('../models/Product');
const Transaction = require('../models/Transaction');
const User = require('../models/User')

const createTransaction = async (req, res) => {
    if (req.user.role !== 'customer') {
        return res.status(403).json({ message: 'Only customers can make purchases' });
    }

    const { productId, quantity } = req.body;

    try {
        // Ambil detail produk
        const product = await Product.findByPk(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        // Hitung total harga awal
        const initialTotal = product.price * quantity;

        // Hitung diskon dan bebas ongkir
        let discount = 0;
        let total = initialTotal;

        if (product.price > 50000) {
            discount = initialTotal * 0.1; // Diskon 10%
            total -= discount;
        }

        if (product.price > 15000) {
            // Tambahkan pesan bebas ongkir
            total = total; // (simulasi bebas ongkir)
        }

        // Simpan transaksi
        const transaction = await Transaction.create({
            productId,
            customerId: req.user.id,
            quantity,
            total,
        });

        res.status(201).json({
            message: 'Transaction created successfully',
            transaction,
            discountApplied: discount > 0,
            freeShipping: product.price > 15000,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating transaction', error });
    }
};

const getCustomerTransactions = async (req, res) => {
    if (req.user.role !== 'customer') {
        return res.status(403).json({ message: 'Only customers can view their transactions' });
    }

    try {
        const transactions = await Transaction.findAll({
            where: { customerId: req.user.id },
        });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error });
    }
};

const getMerchantTransactions = async (req, res) => {
    if (req.user.role !== 'merchant') {
        return res.status(403).json({ message: 'Only merchants can view transactions' });
    }

    try {
        const merchantId = req.user.id;

        // Cari transaksi berdasarkan produk yang dimiliki oleh merchant
        const transactions = await Transaction.findAll({
            include: [
                {
                    model: Product, // Relasi transaksi ke produk
                    where: { merchantId: merchantId }, // Produk milik merchant tertentu
                    attributes: ['id', 'name', 'price'], // Informasi produk
                    include: [
                        {
                            model: User, // Relasi produk ke merchant
                            as: 'merchant',
                            attributes: ['id', 'email'], // Informasi merchant
                        },
                    ],
                },
            ],
            attributes: ['id', 'customerId','quantity', 'total', 'createdAt'], // Informasi transaksi
        });

        if (!transactions.length) {
            return res.status(404).json({ message: 'No transactions found for this merchant' });
        }
        res.json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error); // Log detail error ke console
        res.status(500).json({ message: 'Error fetching transactions', error });
    }
};

module.exports = { createTransaction, getCustomerTransactions, getMerchantTransactions };
