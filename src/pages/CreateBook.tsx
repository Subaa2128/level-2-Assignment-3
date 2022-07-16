import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        const { data } = await axios.get("http://localhost:5000/books/getBook");
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
      const { data } = await axios.post(
        "http://localhost:5000/books/CreateBook",
        {
          title: titleValue,
          description: descriptionValue,
          price: priceValue,
          category: categoryValue,
          author: authorValue,
          image,
        }
      );
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
      CreateBook<Link to="/EditPage/:id">EditPage</Link>
      <h1>CreateBook</h1>
      <div>
        <input
          type="text"
          value={titleValue}
          placeholder="Title"
          onChange={(e) => setTitleValue(e.target.value)}
        />
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
      <div>
        <input type="file" onChange={handleChange} accept=".png,.jpeg,.jpg" />
      </div>
      <button onClick={() => createPost()}>Create</button>
    </div>
  );
};

export default CreateBook;
