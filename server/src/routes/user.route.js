const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// You should store this in .env file
const JWT_SECRET = 'your-secret-key';

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

module.exports = router;
