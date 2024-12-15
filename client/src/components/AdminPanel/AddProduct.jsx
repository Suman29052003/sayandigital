import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        image: '',
        description: '',
        price: '',
        category: '',
        stock: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/products/add', product);
            console.log('Product added:', response.data);
            // Reset form or show success message
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;