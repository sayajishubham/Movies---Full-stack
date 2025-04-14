const mongoose = require("mongoose")
require("dotenv").config()

const connectToDb = mongoose.connect(process.env.DB_URL_LOCAL)
module.exports = connectToDb