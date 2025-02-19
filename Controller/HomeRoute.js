import data from '../MoviesListCollection.json' assert {type: 'json'};
import citiesData from '../CitiesListCollection.json' assert {type: 'json'};

import Movielistmodel from '../Models/MoviesListModel.js';
import UpcomingMoviesmodel from '../Models/UpcomingMoviesModel.js';
import theaterdetailsmodel from '../Models/TheaterDetailsModel.js';
// import theatersmodel from '../Models/TheatersModel.js';
let filterData = [];

// Using json File For fectching All Data
// const HomeRoute = (req, res) => {
//     console.log("all Movies List here.");
//     console.log(data.length);
//     res.json(data);
// }

// Using database For fectching All Data
const HomeRoute = async (req, res) => {
    try {
        const MovieData = await Movielistmodel.find();  // main movies Data
        // console.log("Data fetched from DB successfully");
        // console.log(MovieData.length);
        const upcomingdata = await UpcomingMoviesmodel.find({ display: "home" });
        // console.log("Data fetched from DB successfully upcoming data");
        // console.log(upcomingdata.length);
        res.json({ mainmoviesdata: MovieData, upcomingdata: upcomingdata });
    } catch (error) {
        console.error("Error fetching data from DB: ", error);
        res.status(500).send({ error: 'Failed to fetch data from the database' });
    }
}

// Using json File For fectching some one  Data

// const HomerouterLanguage = (req, res) => {
//     let languageName = req.params.language;
//     filterData = data.filter((movies) => {
//         if (movies.language.includes(languageName)) {
//             return movies.language.includes(languageName);

//         } else if (movies.genre.includes(languageName)) {
//             return movies.genre.includes(languageName);
//         }
//     })
//     console.log(languageName + " data is recived.");
//     console.log(filterData);
//     console.log(filterData.length);
//     res.json(filterData)
// }

// Using database  For fectching some Any One Data Either Location or language or genere
const HomerouterLanguage = async (req, res) => {
    let languageName = req.params.language;
    filterData = await Movielistmodel.find();

    filterData = filterData.filter((movies) => {
        if (movies.language.includes(languageName)) {
            return movies.language.includes(languageName);
        }
        if (movies.cities.some((e) => e.cityName.toLowerCase() === languageName.toLowerCase())) {
            return movies.cities && movies.cities.some((e) => e.cityName.toLowerCase() === languageName.toLowerCase())
        }
        if (movies.genre.includes(languageName)) {
            return movies.genre.includes(languageName);
        }
    })
    // console.log(languageName + " data is recived.");
    // console.log(filterData);
    // console.log(filterData.length);
    res.json(filterData)
}


// Using json File For fectching some two Data

// function HomerouterGeners(req, res) {
//     let geners = req.params.geners;
//     filterData = filterData.filter((movies) => {
//         if (movies.language.includes(geners)) {
//             return movies.language.includes(geners);
//         } else if (movies.genre.includes(geners)) {
//             return movies.genre.includes(geners);
//         }
//     })
//     console.log(geners + " data.");
//     console.log(filterData);
//     console.log(filterData.length);
//     res.send(filterData)
// }


// Using json File For fectching some two Data

const HomerouterGeners = async (req, res) => {
    let geners = req.params.geners;

    filterData = filterData.filter((movies) => {
        if (movies.language.includes(geners)) {
            return movies.language.includes(geners);
        }
        if (movies.cities.some((e) => e.cityName.toLowerCase() === geners.toLowerCase())) {
            return movies.cities && movies.cities.some((e) => e.cityName.toLowerCase() === geners.toLowerCase())
        }
        if (movies.genre.includes(geners)) {
            return movies.genre.includes(geners);
        }
    })
    // console.log(geners + " data is recived.");
    // console.log(filterData);
    // console.log(filterData.length);
    res.json(filterData)
}


// Using json File For fectching location based Data

// function HomerouterLocation(req, res) {
//     const location = req.params.location;
//     const cities = citiesData.filter((e) => e.cityname === location);
//     console.log(cities);
//     res.send(location);
// }


// Using Database For fectching some any of three Data

const HomerouterLocation = async (req, res) => {
    let location = req.params.location;

    filterData = filterData.filter((movies) => {
        if (movies.language.includes(location)) {
            return movies.language.includes(location);
        }
        if (movies.cities.some((e) => e.cityName.toLowerCase() === location.toLowerCase())) {
            return movies.cities && movies.cities.some((e) => e.cityName.toLowerCase() === location.toLowerCase())
        }
        if (movies.genre.includes(location)) {
            return movies.genre.includes(location);
        }
    })
    // console.log(location + " data is recived.");
    // console.log(filterData);
    // console.log(filterData.length);
    res.json(filterData)
}


// Add movie to database.

// async function Addmovie(req, res) {
//     const moviedata = req.body;
//     const newMovie = new Movielistmodel(moviedata);
//     await newMovie.save();
//     console.log("Movie data stored successfully");
//     res.status(201).json({ message: 'Movie data stored successfully', movie: newMovie });
// }


// Add upcoming movies
// const Upcomingmovies = async (req, res) => {
//     const moviedata = req.body;
//     const newdata = await new UpcomingMoviesmodel(moviedata);
//     await newdata.save();
//     console.log("new Upcoming Movie Added.");
//     res.json(newdata);
// }


// Add theater into database.
const Addtheater = async (req, res) => {
    const theaterdata = req.body;
    const theater = await new theatersmodel(theaterdata);
    await theater.save();
    // console.log("Added theater");
    res.json(theater);
}

// Add theaterDetaisl
const TheaterDetails = async (req, res) => {
    const theaterDetail = req.body;
    const detail = await new theaterdetailsmodel(theaterDetail);
    await detail.save();
    // console.log("addedd.");
    res.json(detail);
}
export { HomeRoute, HomerouterLanguage, HomerouterGeners, HomerouterLocation, Addtheater, TheaterDetails };