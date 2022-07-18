import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/bookFilter.css";
import Pagination from "../components/pagination";
function BookFilter() {
  const [details, setDetails] = useState<any>([]);

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
  const handleClick = (id: number) => {
    console.log("success");

    const oldCart = JSON.parse(localStorage.getItem("id") || "[]");

    if (!oldCart) {
      localStorage.setItem("id", JSON.stringify([id]));
      return;
    }
    const isOldId = oldCart.find((p: number) => p === id);

    if (isOldId) {
      const filteredData = oldCart.filter((p: number) => p !== id);
      localStorage.setItem("id", JSON.stringify(filteredData));
      return;
    }

    oldCart.push(id);
    localStorage.setItem("id", JSON.stringify(oldCart));
  };

  return (
    <div>
      <div className="book-grid">
        {details.map((props: any) => (
          <div key={props._id}>
            <p>{props.title}</p>
            <Link to={`/details/${props._id}`}>
              <img src={props.image} alt="" />
            </Link>
            <p>By: {props.author}</p>
            <div className="book-button-flex">
              <p> &#x20B9; {props.price}</p>
              <button>Buy</button>
            </div>
            <button
              className="cart-button"
              onClick={() => handleClick(props._id)}
            >
              Add To Cart
            </button>
            <Link to={`/edit/${props._id}`}>
              <button>Edit</button>
            </Link>
            <h1>{props.category}</h1>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default BookFilter;
