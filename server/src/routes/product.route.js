// routes/products.js
const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const Product = require('../models/product.model');

// Add a new product
router.post('/add', upload.single('image'), async (req, res) => { // Make sure to use .single('image') if you're uploading a single image
    console.log(req.file); // Log the file object to see if it's being received
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const { name, description, price, category, stock } = req.body;
    const image = `/uploads/${req.file.filename}`; // Correct the image path

    const newProduct = new Product({
        name,
        image,
        description,
        price,
        category,
        stock
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
});
// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});

module.exports = router;