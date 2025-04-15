const express = require("express");
const { getMovies, AddMovies, DeleteMovie, UpdateMovie } = require("../controller/movie.controller");
const checkAdmin = require("../config/movie.config");


const movieRoutes = express.Router();
movieRoutes.get('/', getMovies)
    .post('/', checkAdmin, AddMovies)
    .delete("/:id", checkAdmin, DeleteMovie)
    .put("/:id", checkAdmin, UpdateMovie)

module.exports = movieRoutes