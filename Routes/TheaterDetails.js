import express from 'express'
import theaterdetaisRoute from '../Controller/TheaterDetails.js';

const theaterdetails = express.Router()


theaterdetails.get('/movieone', theaterdetaisRoute);

export default theaterdetails;