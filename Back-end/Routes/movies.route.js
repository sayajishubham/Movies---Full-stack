const express = require("express");
const { getMovies, AddMovies, DeleteMovie, UpdateMovie } = require("../controller/movie.controller");


const movieRoutes = express.Router();
movieRoutes.get('/', getMovies).post('/', AddMovies).delete("/:id", DeleteMovie).put("/:id", UpdateMovie)

module.exports = movieRoutes