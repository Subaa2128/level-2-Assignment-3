import express from "express";
import {
  CreateBook,
  getBook,
  deleteBook,
  patchBook,
  bookGet,
} from "../controllers/booksControllers.js";

const routes = express.Router();

routes.post("/", CreateBook);
routes.get("/", getBook);
routes.get("/:id", bookGet);
routes.delete("/:id", deleteBook);
routes.patch("/:id", patchBook);
export default routes;
