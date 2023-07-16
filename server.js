const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./server/middleware/errorMiddleware");
const connectDB = require("./server/config/db");
const dotenv = require("dotenv").config();
const app = express();
connectDB();
app.use(express.json());
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`the app is running on the ${PORT}`);
});
