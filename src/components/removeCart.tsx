import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function RemoveCart() {
  const [details, setDetails] = useState<any>([]);
  // const [id, setId] = useState(() => {
  //   const data = localStorage.getItem("id");
  //   const parsdata = JSON.parse(data)
  //   details.filter((pro: any) => {
  //     const d = parsdata.find((f: number) => f === pro._id);
  //     return d ? true : false;
  //   });
  // });
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/books/get`);

        setDetails(data);
      } catch (data) {
        console.log(data);
      }
    };
    init();
  }, []);

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
      {/* {" "} */}
      <div className="cart-products">
        {data.map((cartItem: any) => {
          return (
            <div className="all-products" key={cartItem.id}>
              <h3>{cartItem.title}</h3>
              <p>{cartItem.price}</p>
              <button onClick={() => removeClick(cartItem.id)}>
                remove to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RemoveCart;
