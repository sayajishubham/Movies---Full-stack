const jwt = require("jsonwebtoken")
require("dotenv").config()
const checkAdmin = (req, res, next) => {
    const token = req.cookies.userToken

    const decoded = jwt.verify(token, process.env.USER_KEY_TOKEN)
    if (decoded.role = "admin") {
        return next();
    }

    res.status(401).json({
        message: "access denied"
    })
}
module.exports = checkAdmin