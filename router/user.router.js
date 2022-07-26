import express from "express";
import { logIn, signIn} from "../controller/user.controller.js";

const routes = express.Router();

routes.post("/login", logIn);
routes.post("/signin", signIn);

export default routes;
