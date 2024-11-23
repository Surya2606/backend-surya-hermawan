const Product = require('../models/Product');

const createProduct = async (req, res) => {
    if (req.user.role !== 'merchant') return res.status(403).json({ message: 'Unauthorized' });

    const { name, price } = req.body;

    try {
        const product = await Product.create({ name, price, merchantId: req.user.id });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error });
    }
};

const listProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = { createProduct, listProducts };
    