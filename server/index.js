const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const connectDB = require('./src/config/database');
const app = express();
const PORT = process.env.PORT || 8000;
const userRoutes = require('./src/routes/user.route');
// Middleware
app.use(cors({
  // origin: [process.env.FRONTEND_URL],
  origin: '*', // Allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Test route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to the Express server!' });
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 