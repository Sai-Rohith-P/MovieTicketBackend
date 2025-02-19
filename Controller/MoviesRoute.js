import Movielistmodel from "../Models/MoviesListModel.js";


const MoviesList = async (req, res) => {
    const Allmovies = await Movielistmodel.find();
    // console.log(Allmovies.length);
    // console.log("All Movies list");
    res.json(Allmovies);
}

export default MoviesList;