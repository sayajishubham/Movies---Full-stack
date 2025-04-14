const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    Username: String,
    email: String,
    password: String,
    role: String
})

const userModel = mongoose.model("user", UserSchema)

module.exports = userModel