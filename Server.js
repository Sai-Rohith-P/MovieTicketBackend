import express from 'express'
import SignupRoute from './Routes/Signup.js';
import { DbConnectivity } from './Db.js';
import LoginRoute from './Routes/Login.js';
import Home from './Routes/Home.js';
import Movies from './Routes/Movies.js';
import theaters from './Routes/Theaters.js';
import cros from 'cors'
import 'dotenv/config'
import theaterdetails from './Routes/TheaterDetails.js';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cros())
app.use(cros({ origin: '*' }))
DbConnectivity();




app.use('/', theaterdetails)
app.use('/', SignupRoute);
app.use('/', LoginRoute);
app.use('/', Movies);
app.use('/', theaters);
app.use('/', Home);



let port = process.env.PORT;
app.listen(port, () => {
    console.log("Server start");

})