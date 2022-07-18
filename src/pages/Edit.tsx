import React, { ChangeEvent } from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        const { data } = await axios.get(
          `http://localhost:5000/books/get/${id}`
        );
        setDetails(data);
        console.log(data);
      } catch (data) {
        console.log(data);
      }
    };
    init();
  }, [id]);

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

  const updateBook = async (id: string) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/books/update/${id}`,
        {
          price: price,
          title: title,
          description: description,
          language: language,
          image,
        }
      );
      const newData = [...details];
      newData.push(data);
      setDetails(newData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const removeBook = async (id: string) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/books/delete/${id}`
      );
      const removeData = details.filter((p: any) => p._id !== id);
      setDetails(removeData);
      console.log(data);
    } catch (error) {
      console.log("can't delete item");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Title"
        value={details.title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={details.description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={details.price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Language"
        value={details.language}
        onChange={(e) => setLanguage(e.target.value)}
      />

      <input
        // value={details.image}
        type="file"
        onChange={changeFile}
        accept=".png,.jpeg,.jpg"
      />

      <p>{details.title}</p>
      <p>{details.description}</p>
      <p>{details.price}</p>
      <img src={details.image} alt="" />

      <button onClick={() => removeBook(details._id)}>remove</button>
      <button onClick={() => updateBook(details._id)}>update</button>
    </>
  );
}

export default Edit;
