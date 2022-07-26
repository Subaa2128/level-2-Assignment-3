import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Cart.css";
interface Store {
  _id: number;
  title: string;
  price: string;
  image: string;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<Store[]>([]);
  const [id, setId] = useState(() => {
    const data = localStorage.getItem("title");
    if (!data) return [];
    const parsedData = JSON.parse(data);
    return parsedData;
  });

  const handleGetData = useCallback(async () => {
    const result = await Promise.all(
      id.map(async (id: any) => {
        const { data } = await axios.get(`http://localhost:5000/books/${id}`);
        console.log(data);
        return data;
      })
    );
    setItems(result);
  }, [id]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  const removeClick = (id: number) => {
    const oldCart = JSON.parse(localStorage.getItem("title") || "[]");

    const isOldId = oldCart.find((p: number) => p === id);

    if (isOldId) {
      const filteredData = oldCart.filter((p: number) => p !== id);
      localStorage.setItem("id", JSON.stringify(filteredData));
      return;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="Cart_main">
        {items.map((pro) => {
          return (
            <div>
              <div key={pro._id}>
                <div className="Cart_contant">
                  <img src={pro.image} alt="" />
                  <h2>{pro.title}</h2>
                  <h4>&#8377; {pro.price}.00</h4>
                  <div className="btns">
                    <div className="delete_btn">
                      <button onClick={() => removeClick(pro._id)}>
                        Remove to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
