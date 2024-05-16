const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./src/api/router");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// for getting body we need this body parser library
app.use(bodyParser.json({ limit: "12mb" })); //declare for support data for still 12mb
app.use(bodyParser.urlencoded({ limit: "12mb", extended: true }));
app.use(cors()); // third party api support

dotenv.config(); //Initalize env

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//routing
app.use(router);

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
