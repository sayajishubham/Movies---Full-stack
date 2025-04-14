const { generateOTP, sendmail, OtpCheck } = require("../config/auth.config")
const jwt = require("jsonwebtoken")
const signUp = async (req, res) => {
    const { username, email, password } = (req.body)
    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Please fil all the Field"
        })
    }

    const otp = generateOTP()
    const token = jwt.sign({ username, email, password, otp }, "zkraeeafo");
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


const sigin = (req, res) => {
    const { username, email, password } = (req.body)
    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Please fil all the Field"
        })
    }
}

module.exports = { signUp, sigin }