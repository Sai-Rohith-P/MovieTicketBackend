import UpcomingMoviesmodel from "../Models/UpcomingMoviesModel.js"

const Upcomingmovieslogic = async (req, res) => {
    try {
        const moviedata = await UpcomingMoviesmodel.find();
        // console.log("data fetched Success.");
        // console.log(moviedata.length);
        res.json(moviedata);
    } catch (error) {
        // console.error("Error fetching data from DB: ", error);
        res.status(500).send({ error: 'Failed to fetch data from the database' });
    }
}

export { Upcomingmovieslogic };