// external imports
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// internal imports
const uploadRouter = require("./router/uploadRouter");

// initialization
const app = express();
const port = process.env.PORT || 5000;

// mongoose connection
mongoose
  .connect(process.env.MONGOS_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoose cloudinary connection successful!"))
  .catch((err) => console.log(err));

// middleware parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router setup
app.use("/", uploadRouter);

// listening server
app.listen(port, () => {
  console.log("Cloudinary image upload server running on", port);
});
