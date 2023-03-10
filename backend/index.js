const express = require('express');
const dotenv = require('dotenv');
const { connection } = require('./Conectdb')
const path = require('path');
const multer = require('multer');
const userRoute = require('./Routes/Users');
const taskRoute = require('./Routes/Task');
const cookieParser = require('cookie-parser');
const { register } = require('./controllers/userControllers')
var app = express();

app.use('/assets', express.static(path.join(__dirname, '/public/assets')))


dotenv.config();

//handling error globally 
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "something went wrong ";
    return res.status(status).json(message);
})


app.use(express.json())
app.use(cookieParser())
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

app.post('/users/register', upload.single("profilepic"), register)


app.use('/users', userRoute);
app.use('/task', taskRoute);

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})