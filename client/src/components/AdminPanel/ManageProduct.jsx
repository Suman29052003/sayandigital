import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  CardMedia,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import baseURL from "../../baseURL";
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS
import Loader from "../Loader/Loader";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: null,
  });
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await axios.get(`${baseURL}/api/products/`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error fetching products"); // Show error toast
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle Edit button
  const handleEdit = (product) => {
    setEditingProduct(product._id);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      stock: product.stock,
      image: null,
    });
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle Update Product
  const handleUpdate = async () => {
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await axios.put(
        `${baseURL}/api/products/update/${editingProduct}`,
        formDataToSend
      );
      fetchProducts(); // Refresh the product list
      setEditingProduct(null); // Exit editing mode
      toast.success("Product updated successfully!"); // Show success toast
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error updating product"); // Show error toast
    }
  };

  // Handle Delete Product
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`${baseURL}/api/products/delete/${productId}`);
      fetchProducts(); // Refresh the product list
      toast.success("Product deleted successfully!"); // Show success toast
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product"); // Show error toast
    }
  };

  return (
    <Box p={3}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Typography
        variant="h4"
        mb={3}
        align="center"
        fontSize="24px"
        fontWeight="bold"
      >
        Manage Products
      </Typography>

      {loading ? ( // Check loading state
        <Loader />
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                p={2}
                border="1 ```javascriptreact
                px solid #ccc"
                borderRadius="8px"
                boxShadow={2}
              >
                {/* Product Image */}
                <CardMedia
                  component="img"
                  image={`${baseURL}/${product.image}`}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: 320,
                    objectFit: "contain",
                  }}
                />

                {/* Product Details */}
                <Box flex="1">
                  {editingProduct === product._id ? (
                    <>
                      {/* Editable Fields */}
                      <TextField
                        name="name"
                        label="Product Name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                      />
                      <TextField
                        name="description"
                        label="Description"
                        value={formData.description}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                      />
                      <TextField
                        name="price"
                        label="Price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                      />
                      <TextField
                        name="stock"
                        label="Stock"
                        type="number"
                        value={formData.stock}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                      />
                      <TextField
                        name="category"
                        label="Category"
                        value={formData.category}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                      />
                    </>
                  ) : (
                    <>
                      {/* Read-only Fields */}
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2">
                        {product.description}
                      </Typography>
                      <Typography variant="body2">
                        Price: ${product.price}
                      </Typography>
                      <Typography variant="body2">
                        Stock: {product.stock}
                      </Typography>
                      <Typography variant="body2">
                        Category: {product.category}
                      </Typography>
                    </>
                  )}
                </Box>

                {/* Action Buttons */}
                <Box
                  display="flex"
                  gap="8px"
                  justifyContent="space-between"
                >
                  {editingProduct === product._id ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUpdate}
                    >
                      Update
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </Button>
                  {editingProduct ? (
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => setEditingProduct(null)}
                    >
                      Cancel
                    </Button>
                  ) : null}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ManageProducts;