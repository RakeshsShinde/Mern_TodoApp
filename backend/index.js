const express = require('express');
const dotenv = require('dotenv');


var app = express();
dotenv.config();

app.use(express.json())



var port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})