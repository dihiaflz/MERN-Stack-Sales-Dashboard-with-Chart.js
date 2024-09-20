require("dotenv").config(); // Load environment variables from a .env file
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

// Middleware setup
app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from this origin (React frontend)
}));

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true }); // Connect to MongoDB
    } catch (err) {
        console.log(err); // Log connection error
    }
};

connectDB();

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB"); // Log once MongoDB connection is successful
});

// Start the server
const PORT = process.env.PORT || 5000; // Set port from environment or default to 5000
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`); // Log server start
});

const Sale = require('./models/Sale');

// Route to fetch sales data
app.get('/', async (req, res) => {
    try {
        const sales = await Sale.find();

        // 1. Aggregate sales by category for the Pie chart
        const salesByCategory = sales.reduce((acc, sale) => {
            acc[sale.category] = (acc[sale.category] || 0) + sale.amount;
            return acc;
        }, {});

        // 2. Aggregate sales by month for the Line chart
        const salesByMonth = sales.reduce((acc, sale) => {
            acc[sale.month] = (acc[sale.month] || 0) + sale.amount;
            return acc;
        }, {});

        // 3. Aggregate sales by year for the Bar chart
        const salesByYear = sales.reduce((acc, sale) => {
            acc[sale.year] = (acc[sale.year] || 0) + sale.amount;
            return acc;
        }, {});

        // Send categorized data to the frontend
        res.status(200).json({
            salesByCategory,
            salesByMonth,
            salesByYear
        });

    } catch (error) {
        res.status(500).json({ message: error.message }); // Log and send error message
    }
});
