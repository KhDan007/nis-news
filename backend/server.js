require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const writerRoutes = require("./routes/writerRoutes");

// Import routes
// const writerRoutes = require('./routes/writerRoutes');
// const articleRoutes = require('./routes/articleRoutes');
// const commentRoutes = require('./routes/commentRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON data

// API Routes
app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

app.use("/api/writers", writerRoutes);
// app.use('/api/articles', articleRoutes);
// app.use('/api/comments', commentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
