import express from "express";
import {
  createBook,
  getBook,
  getBookById,
  deleteBook,
  updateBook,
} from "../controller/book.controller.js";

const routes = express.Router();

routes.post("/", createBook);
routes.get("/", getBook);
routes.get("/:id", getBookById);
routes.delete("/:id", deleteBook);
routes.patch("/:id", updateBook);

export default routes;
