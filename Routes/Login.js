import express from 'express'
import LoginMethod from '../Controller/LoginMethod.js';
import LogOut from '../Controller/LogOut.js';
const LoginRoute = express.Router()


LoginRoute.post('/home/login', LoginMethod)
LoginRoute.post('/login', LoginMethod)
LoginRoute.post('/logout', LogOut);

export default LoginRoute;