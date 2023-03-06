const User = require('../models/User')
const bcrypt = require('bcrypt');
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
        } else {
            return res.status(200).json('login success')
        }


    } catch (error) {
        next(err);
    }
}


module.exports = { Login, register }