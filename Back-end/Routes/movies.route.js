const express = require("express");
const { getMovies, AddMovies, DeleteMovie, UpdateMovie } = require("../controller/movie.controller");
const checkAdmin = require("../config/movie.config");


const movieRoutes = express.Router();
movieRoutes.get('/', getMovies)
    .post('/', AddMovies)
    .delete("/:id", DeleteMovie)
    .patch("/:id", UpdateMovie)

module.exports = movieRoutes