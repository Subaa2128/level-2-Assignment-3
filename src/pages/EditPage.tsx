import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditBook: React.FC = () => {
  const { id } = useParams();
  const [items, setItems] = useState<any>([]);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");
  const [image, setImage] = useState<string>();

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/books/bookGet/${id}`
        );
        setItems(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [id]);

  const deleteBook = async (id: string) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/books/delete/${id}`
      );
      const filters = items.filter((p: any) => p._id !== id);
      setItems(filters);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const patchBook = async (id: string) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/books/patchBook/${id}`,
        {
          title: titleValue,
          description: descriptionValue,
          price: priceValue,
          category: categoryValue,
          author: authorValue,
          image: image,
        }
      );
      const newItems = [...items];
      newItems.push(data);
      setItems(newItems);
      console.log(data);
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
      Edit<Link to="/Books">Books</Link>
      <h1>EditBook</h1>
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
        <input
          type="file"
          value={image}
          onChange={handleChange}
          accept=".png,.jpeg,.jpg"
        />
      </div>
      <div>
        <h2>{items.title}</h2>
        <img src={items.image} alt="" />
        <h4>{items.price}</h4>
        <p>{items.description}</p>
        <h5>{items.category}</h5>
        <h3>{items.author}</h3>
        <div>
          <button onClick={() => deleteBook(items._id)}>Delete</button>
          <button onClick={() => patchBook(items._id)}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
