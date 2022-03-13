

const dotenv = require("dotenv");
const express = require('express')
require('./db/mongoose')

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config({ path: "./config/config.env" });
const postRouter = require('./routes/post')

app.use(postRouter)
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});
