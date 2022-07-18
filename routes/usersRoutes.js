import express from "express";
import { logIn, signup } from "../controllers/usersControllers.js";

const routes = express.Router();

routes.post("/login", logIn);
routes.post("/singnUp", signup);

export default routes;
