import Book from "../schema/bookSchema.js";
import User from "../schema/userSchema.js";

export const createBook = async (req, res) => {
  const title = req.body.title;
  const image = req.body.image;
  const price = req.body.price;
  const description = req.body.description;
  const language = req.body.language;
  const author = req.body.author;
  const category = req.body.category;

  try {
    const bookData = await Book.create({
      title,
      price,
      description,
      image,
      language,
      author,
      category,
    });
    res.json(bookData);
  } catch (error) {
    console.log(error);
    res.status(500).json("something went wrong");
  }
};

export const getBook = async (req, res) => {
  const data = await Book.find({});
  res.send(data);
};

export const getBookById = async (req, res) => {
  try {
    const data = await Book.findById(req.params.id);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.send("delete");
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = async (req, res) => {
  try {
    const updateData = await Book.findByIdAndUpdate(
      req.params.id,
      {
        price: req.body.price,
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        language: req.body.language,
      },
      { new: true }
    );
    res.json(updateData);
  } catch (error) {
    console.log(error);
  }
};
