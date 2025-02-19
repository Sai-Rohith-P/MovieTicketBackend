import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    id: Number,
    movieimg: String,
    moviename: String,
    genre: [String],
    duration: String,
    language: [String],
    rating: Number,
    UA13: String,
    releaseDate: String,
    description: String,
    trailer: String,
    cities: [
        {
            cityName: String,
            theaters: [String]
        }
    ]
});

const Movielistmodel = mongoose.model('MoviesListCollections', movieSchema);
export default Movielistmodel;