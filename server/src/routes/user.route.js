const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const nodemailer = require('nodemailer'); // Import Nodemailer
const crypto = require('crypto'); // Import crypto for generating tokens
require('dotenv').config();


// You should store this in .env file
const JWT_SECRET = 'process.env.JWT_SECRET';

// User Signup
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password, firstName, lastName, phoneNumber, city, pincode, country } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: 'User with this email or username already exists' 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      city,
      pincode,
      country,
      role: 'user' // default role
    });

    const savedUser = await newUser.save();
    
    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: savedUser._id,
        role: savedUser.role 
      }, 
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = savedUser._doc;
    
    res.status(201).json({
      message: 'User created successfully',
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    res.status(500).json({ 
      message: 'Error creating user', 
      error: error.message 
    });
  }
});

// User Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ 
        message: 'User not found' 
      });
    }

    // Verify password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ 
        message: 'Invalid password' 
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id,
        role: user.role 
      }, 
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user._doc;

    res.status(200).json({
      message: 'Login successful',
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    res.status(500).json({ 
      message: 'Error logging in', 
      error: error.message 
    });
  }
});

// User Profile by userId
router.get('/profile/:userId', async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from request parameters
    
    const user = await User.findById(userId).select('-password'); // Exclude password from response

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile(server)', error: error.message });
  }
});

// Update User Profile
router.put('/profile/:userId', async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from request parameters
    const { username, email, firstName, lastName, phoneNumber, city, pincode, country } = req.body; // Destructure fields to update

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user fields
    user.username = username || user.username;
    user.email = email || user.email;
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.city = city || user.city;
    user.pincode = pincode || user.pincode;
    user.country = country || user.country;

    const updatedUser = await user.save(); // Save updated user

    // Remove password from response
    const { password: _, ...userWithoutPassword } = updatedUser._doc;

    res.status(200).json({
      message: 'User profile updated successfully',
      user: userWithoutPassword,
    });

  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile', error: error.message });
  }
});

// Password Reset Request
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a password reset token
    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = token; // Add resetToken field to user model
    user.resetTokenExpiration = Date.now() + 3600000; // Token valid for 1 hour
    await user.save();

    // Send email with reset link
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    const resetLink = `http://localhost:5173/forgot-password/${token}`; // Update with your frontend URL

    await transporter.sendMail({
      to: email,
      subject: 'Password Reset',
      html: `<p>You requested a password reset. Click the link below to reset your password:</p>
             <a href="${resetLink}">Reset Password</a>`,
    }, (error, info) => {
      if (error) {
        console.error("Error sending email:", error); // Log the error
        return res.status(500).json({ message: 'Error sending password reset email', error: error.message });
      }
      res.status(200).json({ message: 'Password reset link sent to your email' });
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Error sending password reset email', error: error.message });
  }
});

// Password Reset
router.post('/forgot-password/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    user.resetToken = undefined; // Clear reset token
    user.resetTokenExpiration = undefined; // Clear expiration
    await user.save();

    res.status(200).json({ message: 'Password has been reset successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error resetting password', error: error.message });
  }
});

module.exports = router;
