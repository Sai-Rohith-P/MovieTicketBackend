import mongoose from "mongoose";

const Upcomingmovies = mongoose.Schema({
    id: Number,
    moviename: String,
    genre: [String],
    duration: String,
    language: [String],
    releaseDate: Date,
    description: String,
    trailer: String
})

const UpcomingMoviesmodel = mongoose.model("UpcomingMoviesList", Upcomingmovies);

export default UpcomingMoviesmodel;