import axios from "axios";
import express from "express";

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

// GET API route
app.get("/api/fun-fact", (req, res) => {
  res.json({
    message: "Welcome to the Fun Fact API!"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
