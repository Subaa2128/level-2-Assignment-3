import express from "express";
import {
  CreateBook,
  getBook,
  deleteBook,
  patchBook,
  bookGet,
} from "../controllers/booksControllers.js";

const routes = express.Router();

routes.post("/CreateBook", CreateBook);
routes.get("/getBook", getBook);
routes.get("/bookGet/:id", bookGet);
routes.delete("/delete/:id", deleteBook);
routes.patch("/patchBook/:id", patchBook);
export default routes;
