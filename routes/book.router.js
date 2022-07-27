import express from "express";
import {createBook,getBook,getId,remove,update} from "../controllers/book.controller.js"


const routes = express.Router();

routes.post("/createBook",createBook);
routes.get("/books",getBook);
routes.get("/books/:id",getId);
routes.delete("/delete/:id",remove);
routes.patch("/update/:id",update);


export default routes