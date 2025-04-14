const { generateOTP, sendmail, OtpCheck } = require("../config/auth.config")
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const bcrypt = require("bcrypt")
require("dotenv").config();

const signUp = async (req, res) => {
    const { username, email, password, role } = (req.body)
    if (!username || !email || !password || !role) {
        return res.status(400).json({
            message: "Please fil all the Field"
        })
    }

    const otp = generateOTP()
    const token = jwt.sign({ username, email, password, role, otp }, process.env.KEY_TOKEN);
    res.render("mail", { otp, username }, (err, html) => {
        if (err) {
            return res.Status(500).json({
                message: err
            })
        }

        try {
            sendmail(email, html);
            res.cookie("VerifyToken", token).status(200).json({
                message: "Otp is sent",
                token
            })
        } catch (error) {
            return res.status(500).json({
                message: error
            })
        }
    })
}


const sigin = async (req, res) => {
    const { username, email, password, role } = (req.body)
    if (!email || !password) {
        return res.status(400).json({
            message: "Please fil all the Field"
        })
    }
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            res.status(404).json({
                message: "user not Found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({
                message: "wrong password"
            })
        }

        const userToken = jwt.sign({ user }, process.env.USER_KEY_TOKEN);
        res.cookie('userToken', userToken).status(200).json({
            message: "USerFound login Successfull"
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { signUp, sigin }