import mongoose from "mongoose";

// mongoose.Schema defines the structure of document
const bookSchema = new mongoose.Schema({
  // author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  author: { type: String },
  image: { type: String },
  title: { type: String },
  description: { type: String },
  price: { type: String },
  language: { type: String },
  category: { type: String },
});

// mongoose.model intreface for database for CRUD records
// "users" - is a file name in database
const Book = mongoose.model("book", bookSchema);

export default Book;
