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

    // Display the response in the terminal
    console.log(response.data);

  } catch (error) {
    console.log("Error fetching fun fact:", error);
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
