import axios from "axios";
import express from "express";

const express = require("express");

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
