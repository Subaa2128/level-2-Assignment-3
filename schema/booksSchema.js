import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: String },
  category: { type: String },
  author: { type: String },
  image: { type: String },
});

const Book = mongoose.model("books", bookSchema);

export default Book;
