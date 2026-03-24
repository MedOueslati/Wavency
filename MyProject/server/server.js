const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Enable CORS (allow frontend to connect)
app.use(cors({
  origin: "http://localhost:3000", // your frontend URL
  credentials: true
}));

// Database connection
const connectDB = require('./config/connectDB');
connectDB();

// Routes
app.use("/api", require('./routes/userRoutes'));

// Port config
const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("My server is running on port:", port);
  }
});
