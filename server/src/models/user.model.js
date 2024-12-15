const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  phoneNumber: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\+?[\d\s-]+$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    // default: 'user',
    required: true
  },
  city: {
    type: String,
    trim: true
  },
  pincode: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\d{6}$/.test(v);
      },
      message: props => `${props.value} is not a valid pincode!`
    }
  },
  country: {
    type: String,
    trim: true,
    required: true
  },
  resetToken: String,
  resetTokenExpiration: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
