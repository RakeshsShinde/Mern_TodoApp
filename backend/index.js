const express = require('express');
const dotenv = require('dotenv');
const { connection } = require('./Conectdb')

var app = express();
dotenv.config();

app.use(express.json())
connection(process.env.Mongo_url);


var port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})