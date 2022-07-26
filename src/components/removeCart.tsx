import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/navBar.css";

function RemoveCart() {
  const [data, setData] = useState<any>([]);
  const [ids] = useState(() => {
    const data = localStorage.getItem("id");
    if (!data) return [];
    const parsedData = JSON.parse(data);
    return parsedData;
  });

  // Get particular id from data
  const handleGetData = useCallback(async () => {
    const result = await Promise.all(
      ids.map(async (id: any) => {
        const { data } = await axios.get(`http://localhost:5000/books/${id}`);
        console.log(data);
        return data;
      })
    );
    setData(result);
  }, [ids]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  //remove function
  const removeClick = (id: number) => {
    const oldCart = JSON.parse(localStorage.getItem("id") || "[]");

    const isOldId = oldCart.find((p: number) => p === id);

    if (isOldId) {
      const filteredData = oldCart.filter((p: number) => p !== id);
      localStorage.setItem("id", JSON.stringify(filteredData));

      return;
    }
  };

  return (
    <div>
      <div className="cart-products">
        {!data.length ? (
          <h1>No Items Selected</h1>
        ) : (
          data.map((cartItem: any) => {
            return (
              <div className="all-products" key={cartItem._id}>
                <div className="image">
                  <img src={cartItem.image} alt="" />
                </div>
                <div className="cart-content">
                  <h3>{cartItem.title}</h3>
                  <div className="cart-price">
                    <p>₹{cartItem.price}</p>
                    <button onClick={() => removeClick(cartItem.id)}>
                      remove to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default RemoveCart;
