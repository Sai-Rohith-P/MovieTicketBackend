import express from 'express'
import theatersRoute from '../Controller/TheatersRoute.js'

const theaters = express.Router()

theaters.get('/home/theaters', theatersRoute);
theaters.get('/theaters', theatersRoute);

export default theaters;