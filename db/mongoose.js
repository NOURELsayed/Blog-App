
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// var uri = "mongodb://localhost:27017/blog-app-api";
dotenv.config({ path: "./config/config.env"});

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});