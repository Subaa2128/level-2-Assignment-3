import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Books.css";

interface Store {
  _id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  author: string;
  image: string;
}

const Books: React.FC = () => {
  const [items, setItems] = useState<Store[]>([]);

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

  return (
    <div className="books">
      <h1>Books</h1>
      <div className="bookStore">
        {items.map((pro) => {
          return (
            <div>
              <div className="books_items">
                <div key={pro._id}>
                  <h2>{pro.title}</h2>
                  <img src={pro.image} alt="" />
                  <h4>{pro.price}</h4>
                  <p>{pro.description}</p>
                  <h5>{pro.category}</h5>
                  <h3>{pro.author}</h3>
                  <div>
                    <Link to={`/EditPage/${pro._id}`}>
                      <button>Edit</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
