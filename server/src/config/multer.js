// config/multer.js
const multer = require('multer');
const path = require('path');

// Define the storage engine for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Destination folder for uploaded files
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        // Define the file name
        cb(null, Date.now() + path.extname(file.originalname)); // Add a timestamp to avoid name collisions
    }
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;
