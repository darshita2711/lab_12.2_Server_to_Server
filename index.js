import express from "express";
import axios from "axios";
// Create an Express application
const app = express();
// const axios = require("axios");

// Define the port number
const PORT = 3000;

// GET API route
app.get("/api/fun-fact", async (req, res) => {
    try {
    // Make a GET request to the external API
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    );

     // Extract only the fact text
    const fact = response.data.text;

     // Send the fact to the client
    res.json({
      fact: fact
    });get

  } catch (error) {
    console.log("Error fetching fun fact:", error);
    res.status(500).json({
      error: "Could not fetch fun fact"
    });

  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
