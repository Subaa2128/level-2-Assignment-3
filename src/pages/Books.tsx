import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Books.css";
import "../styles/Cart.css";

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

  const handleCart = (id: any) => {
    const cartOld = JSON.parse(localStorage.getItem("title") || "[]");
    if (!cartOld) {
      localStorage.setItem("title", JSON.stringify([id]));
      return;
    }

    const isOldId = cartOld.find((p: any) => p === id);
    if (isOldId) {
      const filterData = cartOld.filter((p: any) => p !== id);
      localStorage.setItem("title", JSON.stringify(filterData));
      return;
    }
    cartOld.push(id);
    localStorage.setItem("title", JSON.stringify(cartOld));
  };

  return (
    <div className="books">
      <h1>Books</h1>
      <div className="bookStore Cart_main">
        {items.map((pro) => {
          return (
            <div>
              <div className="books_items Cart_contant">
                <div key={pro._id}>
                  <img src={pro.image} alt="" />
                  <h2>{pro.title}</h2>
                  <h4>&#8377;{pro.price}</h4>
                  <p>{pro.description}</p>
                  <div className="edit_btn">
                    <Link to={`/EditPage/${pro._id}`}>
                      <button>Edit</button>
                    </Link>
                  </div>
                  <button onClick={() => handleCart(pro._id)}>Cart</button>

                  <h3>{pro.author}</h3>
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
