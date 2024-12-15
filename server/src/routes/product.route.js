const router = require('express').Router();
const Product = require('../models/product.model');

// Add a new product
router.post('/add', async (req, res) => {
    const { name, image, description, price, category, stock } = req.body;

    try {
        const newProduct = new Product({
            name,
            image,
            description,
            price,
            category,
            stock
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
});

module.exports = router;