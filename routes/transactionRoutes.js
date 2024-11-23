const express = require('express');
const { createTransaction, getCustomerTransactions, getMerchantTransactions } = require('../controllers/transactionController');
const authenticateToken = require('../middleware/authenticate');

const router = express.Router();

// Customer membuat transaksi
router.post('/', authenticateToken, createTransaction);

// Customer melihat transaksi mereka
router.get('/customer', authenticateToken, getCustomerTransactions);

// Merchant melihat transaksi produk mereka
router.get('/merchant', authenticateToken, getMerchantTransactions);

module.exports = router;
