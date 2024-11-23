const express = require('express');
const Product = require('../models/Product');
const authenticateToken = require('../middleware/authenticate');

const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
    if (req.user.role !== 'merchant') return res.status(403).json({ message: 'Only merchants can add products' });

    const { name, price } = req.body;
    const product = await Product.create({ name, price, merchantId: req.user.id });
    res.status(201).json(product);
});

router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

module.exports = router;
