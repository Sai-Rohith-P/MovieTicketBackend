import express from 'express'
import { Signup } from '../Controller/SignupMethod.js'
const SignupRoute = express.Router()

// SignupRoute.post('/home/signup', Signup);
SignupRoute.post('/signup', Signup);

export default SignupRoute;