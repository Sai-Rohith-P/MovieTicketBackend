import mongoose from "mongoose";

const TheaterDetail = mongoose.Schema({
    id: Number,
    theatername: String,
    address: String,
    cityname: String,
    movies: [
        {
            movieId: Number,
            moviename: String,
            schedule: [String]
        }
    ]
})

const theaterdetailsmodel = mongoose.model("TheatersCollection", TheaterDetail);

export default theaterdetailsmodel;