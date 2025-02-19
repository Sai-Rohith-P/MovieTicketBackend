import express from 'express'
import MoviesList from '../Controller/MoviesRoute.js';
import AuthMiddleware from '../Middleware.js';

const Movies = express.Router()

Movies.get('/movies', AuthMiddleware, MoviesList);
Movies.get('/home/movies', AuthMiddleware, MoviesList);

export default Movies;