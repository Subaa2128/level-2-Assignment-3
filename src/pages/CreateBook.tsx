import React, { ChangeEvent } from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/filterCategory.css";
import Navbar from "../components/Navbar";

function CreateBook() {
  const [details, setDetails] = useState<any>([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [image, setImage] = useState("");

  //create book and setting in data
  const createBook = async () => {
    try {
      const { data } = await axios.post(`http://localhost:5000/books/`, {
        author: author,
        title: title,
        price: price,
        description: description,
        language: language,
        category: category,
        image,
      });

      console.log(data);
      const newData = [...details];
      newData.push(data);
      setDetails(newData);
      console.log(newData);
    } catch (error) {
      console.log("can't update");
    }
  };

  //function for storing image in data
  const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const imageFile = e.target.files[0];

    if (imageFile.size > 5 + 1024 + 1024)
      return alert("file size is too larger");

    const reader = new FileReader();

    reader.onload = (res) => {
      const image = res.target?.result as string;
      setImage(image);
    };

    reader.readAsDataURL(imageFile);
  };

  return (
    <>
      <Navbar />
      <div className="create-book">
        <h1>Create Your Book</h1>
        <div className="create-input">
          <p>Book Title</p>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>Book Author</p>
          <input
            type="text"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <p>Book Price</p>
          <input
            type="text"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <p>Book Description</p>
          <input
            type="text"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>Book Category</p>
          <input
            type="text"
            placeholder="category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <p>Book Language</p>
          <input
            type="text"
            placeholder="language"
            onChange={(e) => setLanguage(e.target.value)}
          />
          <p>Upload Book Image</p>
          <input
            className="image-input"
            type="file"
            onChange={changeFile}
            accept=".png,.jpeg,.jpg"
          />
        </div>
        <div className="button">
          <button onClick={createBook}>Create Book</button>
        </div>
      </div>
    </>
  );
}

export default CreateBook;
