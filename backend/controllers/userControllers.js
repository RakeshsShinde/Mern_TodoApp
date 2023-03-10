const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const register = async (req, res, next) => {
    try {
        const { username, email, password, profilepic } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        const user = await new User({
            username,
            email,
            password: hashpassword,
            profilepic,
        })

        await user.save();

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}



const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json('user not found !');

        const isValidUser = await bcrypt.compare(password, user.password);

        if (!isValidUser) {
            return res.status(400).json('authentication failed !')
        }

        const token = jwt.sign({ id: user._id }, process.env.secretKey)
        const { password: pass, ...other } = user._doc;

        return res.status(201).cookie('token', { token }, { httpOnly: true }).json({ other })


    } catch (error) {
        next(error);
    }
}


module.exports = { Login, register }