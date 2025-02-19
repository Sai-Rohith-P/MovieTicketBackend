import mongoose from "mongoose";

const Theaters = mongoose.Schema({
    id: Number,
    cityname: String,
    theaters: [
        {
            theaterId: Number,
            theatername: String,
            movies: [String]
        }
    ]
})

const citiesmodel = mongoose.model("CitiesCollection", Theaters);

export default citiesmodel;