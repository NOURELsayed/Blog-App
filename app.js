const dotenv = require("dotenv");
const express = require('express')

const app = express();
dotenv.config({ path: "./config/config.env" });

app.get('/', (req, res) => {
  res.send('Hello World!')
});

