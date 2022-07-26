import React, { ChangeEvent } from "react";
import "../styles/filterCategory.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function Edit() {
  const { id } = useParams();
  const [details, setDetails] = useState<any>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/books/${id}`);
        setDetails(data);
        console.log(data);
      } catch (data) {
        console.log(data);
      }
    };
    init();
  }, [id]);

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

  //function for updating book
  const updateBook = async (id: string) => {
    try {
      const { data } = await axios.patch(`http://localhost:5000/books/${id}`, {
        price: price,
        title: title,
        description: description,
        language: language,
        image,
      });
      const newData = [...details];
      newData.push(data);
      setDetails(newData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //function for removing book from database
  const removeBook = async (id: string) => {
    try {
      const { data } = await axios.delete(`http://localhost:5000/books/${id}`);
      const removeData = details.filter((p: any) => p._id !== id);
      setDetails(removeData);
      console.log(data);
    } catch (error) {
      console.log("can't delete item");
    }
  };

  return (
    <>
      <Navbar />
      <div className="edit">
        <h1>Edit Your Book</h1>
        <div className="edit-input">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>{details.title}</p>
        </div>

        <div className="edit-input">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>{details.description}</p>
        </div>

        <div className="edit-input">
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p>{details.price}</p>
        </div>

        <div className="edit-input">
          <input
            type="text"
            placeholder="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <p>{details.language}</p>
        </div>

        <div className="edit-input">
          <input
            value={image}
            type="file"
            onChange={changeFile}
            accept=".png,.jpeg,.jpg"
          />
          <img src={details.image} alt="" />
        </div>

        <div className="button">
          <button onClick={() => removeBook(details._id)}>remove</button>
          <button onClick={() => updateBook(details._id)}>update</button>
        </div>
      </div>
    </>
  );
}

export default Edit;
