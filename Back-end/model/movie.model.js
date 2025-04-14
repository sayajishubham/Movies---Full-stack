const mongoose = require("mongoose");


const MovieSchema = new mongoose.Schema({
    Title: String,
    Genre: String,
    Director: String,
    Release_Year: Number,
    Description: String,
    Image: String
})


const movieModel = mongoose.model("movie", MovieSchema)

module.exports = movieModel