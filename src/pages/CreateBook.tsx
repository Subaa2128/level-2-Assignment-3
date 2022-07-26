import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadImg from "../assets/images/Head_img_1.png";
import headImg from "../assets/images/headImg.png";
import "../styles/BookDetails.css";

interface Store {
  _id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

const CreateBook: React.FC = () => {
  const [items, setItems] = useState<Store[]>([]);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");
  const [image, setImage] = useState<string>();

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/books/");
        setItems(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  const createPost = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/books/", {
        title: titleValue,
        description: descriptionValue,
        price: priceValue,
        category: categoryValue,
        author: authorValue,
        image,
      });
      console.log(data);
      const newItems = [...items];
      newItems.push(data);
      setItems(newItems);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = (res) => {
      const image = res.target?.result as string;
      setImage(image);
    };

    reader.readAsDataURL(file);
  };
  return (
    <div>
      <Navbar />
      <h1 className="heading">Create Book</h1>
      <div className="createBook">
        <input
          type="text"
          value={titleValue}
          placeholder="Title"
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={descriptionValue}
          placeholder="Description"
          onChange={(e) => setDescriptionValue(e.target.value)}
        />
        <input
          type="number"
          value={priceValue}
          placeholder="Price"
          onChange={(e) => setPriceValue(e.target.value)}
        />
        <input
          type="text"
          value={categoryValue}
          placeholder="Category"
          onChange={(e) => setCategoryValue(e.target.value)}
        />
        <input
          type="text"
          value={authorValue}
          placeholder="Author"
          onChange={(e) => setAuthorValue(e.target.value)}
        />
      </div>
      <div className="createFile">
        <input type="file" onChange={handleChange} accept=".png,.jpeg,.jpg" />
      </div>
      <div className="createBtn">
        <button onClick={() => createPost()}>Create</button>
      </div>
      <div className="createImg">
        <img src={HeadImg} alt="" />
        <img src={headImg} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default CreateBook;
