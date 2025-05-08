require('dotenv').config(); // Load environment variables
console.log('MongoDB URI:', process.env.MONGO_URI); // Debugging line
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // DB connection

// Route imports
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware setup
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend's URL
  credentials: true, // Allows cookies to be sent with requests
}));
app.use(express.json()); // For parsing JSON bodies
app.use(cookieParser()); // For parsing cookies

// API routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/expenses', expenseRoutes); // Expense routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
