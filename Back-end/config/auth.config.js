const jwt = require("jsonwebtoken")
const nodeMailer = require("nodemailer");
const userModel = require("../model/user.model");
const bcrypt = require("bcrypt")
require("dotenv").config()

const sendmail = async (toSend, html) => {
    const transporter = nodeMailer.createTransport({
        service: "Gmail",
        port: 587,
        secure: false,
        auth: {
            user: "grid7698@gmail.com",
            pass: process.env.EMAIL_pass,
        },
    });
    try {
        const info = await transporter.sendMail({
            from: "grid7698@gmail.com",
            to: toSend || "shubhamsayaji52@gmail.com",
            subject: "Verification",
            html: html || null
        });

        return info;
    } catch (error) {
        console.log(error)
    }
}

const generateOTP = () => {
    return (Math.floor(1000 + Math.random() *
        9000).toString())
}

const OtpCheck = (req, res) => {
    const verifyOtp = req.body.otp
    const token = req.cookies.VerifyToken
    console.log(token)
    const decoded = jwt.verify(token, process.env.KEY_TOKEN)
    if (verifyOtp === decoded.otp) {
        UserToDb(decoded)

        return res.status(200).json({
            result: "Verified",
            access: "allowed"
        })
    }
    res.status(404).json({
        result: "un-Verified",
        access: "denied"
    })
}


const UserToDb = (obj) => {
    const { password } = obj
    try {
        bcrypt.hash(password, 8, (err, hash) => {
            if (err) {
                console.log(err)
            }
            const newUser = new userModel({ ...obj, password: hash })
            newUser.save()
            console.log("done")
        })
    } catch (error) {
        console.log(error)
    }

}


module.exports = { sendmail, OtpCheck, generateOTP }