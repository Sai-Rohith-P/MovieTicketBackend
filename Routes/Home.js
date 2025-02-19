import express from 'express'
import { HomeRoute, HomerouterGeners, HomerouterLanguage, HomerouterLocation, TheaterDetails } from '../Controller/HomeRoute.js'
import { Upcomingmovieslogic } from '../Controller/UpcomingMovies.js'

const Home = express.Router()

Home.get('/', HomeRoute)
Home.get('/home', HomeRoute)

Home.get('/upcomingmovies', Upcomingmovieslogic)
Home.get('/home/upcomingmovies', Upcomingmovieslogic)

Home.get('/:language', HomerouterLanguage)
Home.get('/home/:language', HomerouterLanguage)

Home.get('/:language/:geners', HomerouterGeners)
Home.get('/home/:language/:geners', HomerouterGeners)

Home.get('/:language/:geners/:location', HomerouterLocation)
Home.get('/home/:language/:geners/:location', HomerouterLocation)



// Home.post('/addmovie', Addmovie);
// Home.post('/upcomingMovie', Upcomingmovies);
// Home.post('/addtheater', Addtheater);
// Home.post('/theaterDetaisl', TheaterDetails);

export default Home;