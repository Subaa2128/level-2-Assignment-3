import React, { ChangeEvent } from "react";
import axios from "axios";
import { useState } from "react";

function CreateBook() {
  const [details, setDetails] = useState<any>([]);
  //   const [id, setId] = useState(() => {
  //     const data = localStorage.getItem("user");
  //     if (!data) return "";
  //     const user = JSON.parse(data);
  //     return user._id;
  //   });
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [image, setImage] = useState("");

  const createBook = async () => {
    try {
      const { data } = await axios.post(`http://localhost:5000/books/`, {
        // _id: id,
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

  const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const imageFile = e.target.files[0];

    // if (imageFile.size > 5 + 1024 + 1024)
    //   return alert("file size is too larger");

    const reader = new FileReader();

    reader.onload = (res) => {
      const image = res.target?.result as string;
      setImage(image);
    };

    reader.readAsDataURL(imageFile);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="language"
        onChange={(e) => setLanguage(e.target.value)}
      />
      <input type="file" onChange={changeFile} accept=".png,.jpeg,.jpg" />
      <button onClick={createBook}>Create Book</button>
    </div>
  );
}

export default CreateBook;
