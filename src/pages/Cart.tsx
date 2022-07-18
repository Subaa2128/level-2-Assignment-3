import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Cart.css";
interface Store {
  _id: string;
  title: string;
  price: string;
  image: string;
}

const Cart: React.FC = () => {
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
    <div>
      <h1>Cart</h1>
      <div className="Cart_main">
        {items.map((pro) => {
          return (
            <div>
              <div key={pro._id}>
                <div className="Cart_contant">
                  <img src={pro.image} alt="" />
                  <h2>{pro.title}</h2>
                  <h4>&#8377; {pro.price}</h4>
                  <div className="btns">
                    <div className="like_btn">
                      <button>Like</button>
                    </div>
                    <div className="delete_btn">
                      <button>Delete</button>
                    </div>
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

export default Cart;
