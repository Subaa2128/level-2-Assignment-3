import { logIn,signUp } from "../controllers/user.controller.js";
import express from 'express';

const routes = express.Router();


routes.post("/login",logIn);
routes.post("/signup",signUp);



export default routes