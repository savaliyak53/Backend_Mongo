const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.listen(PORT, () => {
  console.log(`server is up to ${PORT}`);
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((e) => {
    console.log("Connection error", e.message);
  });
