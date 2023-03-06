const express = require('express');
const dotenv = require('dotenv');
const { connection } = require('./Conectdb')
const path = require('path');
const multer = require('multer');
var app = express();

app.use('/assets', express.static(path.join(__dirname, '/public/assets')))


dotenv.config();

app.use(express.json())
connection(process.env.Mongo_url);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage })

app.post('/api/upload', upload.single("file"), (req, res) => {
    console.log(req.body);
    res.status(200).json('file has been uploaded !')
})

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})