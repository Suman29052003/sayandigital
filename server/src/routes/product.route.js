// routes/products.js
const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const Product = require('../models/product.model');

// Add a new product
router.post('/add', upload.single('image'), async (req, res) => { // Make sure to use .single('image') if you're uploading a single image
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const { name, description, price, category, stock } = req.body;
    const image = `uploads/${req.file.filename}`; 
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

// Update product details (including optional image upload)
router.put("/update/:id", upload.single("image"), async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, stock } = req.body;
  
    try {
      // Find product by ID
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      // Update fields if provided
      if (name) product.name = name;
      if (description) product.description = description;
      if (price) product.price = price;
      if (category) product.category = category;
      if (stock) product.stock = stock;
  
      // Update image if a new file is uploaded
      if (req.file) {
        product.image = `uploads/${req.file.filename}`; // Save new image path
      }
  
      // Save the updated product
      const updatedProduct = await product.save();
      res.status(200).json({ message: "Product updated successfully", updatedProduct });
    } catch (error) {
      res.status(500).json({ message: "Error updating product", error });
    }
  });

  // DELETE route to delete a product by ID
router.delete('/delete/:id', async (req, res) => {
    const productId = req.params.id;
  
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  
module.exports = router;