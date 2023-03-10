const jwt = require('jsonwebtoken')

const Verify = async (req, res, next) => {

    try {
        const token = req.cookies.token.token;



        if (!token) {
            return res.status(401).json({ message: "unauthorized" })
        }

        jwt.verify(token, process.env.secretKey, (err, user) => {
            if (err) {
                res.status(401).json({ message: "wrong credientials " })
            }
            req.user = user;
        })
        next();
    } catch (error) {
        next(error);
    }

}

module.exports = { Verify };