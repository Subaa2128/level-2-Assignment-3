import Book from "../schema/booksSchema.js";

export const CreateBook = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const category = req.body.category;
  const author = req.body.author;
  const image = req.body.image;

  try {
    const datas = await Book.create({
      title,
      description,
      price,
      category,
      author,
      image,
    });
    res.json(datas);
  } catch (error) {
    console.log(error);
  }
};

export const getBook = async (req, res) => {
  try {
    const data = await Book.find({});
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

export const bookGet = async (req, res) => {
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
    res.send("delate book");
  } catch (error) {
    console.log(error);
  }
};

export const patchBook = async (req, res) => {
  try {
    const data = await Book.findByIdAndUpdate(
      req.params.id,
      {
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        author: req.body.author,
        image: req.body.image,
      },
      { new: true }
    );
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
