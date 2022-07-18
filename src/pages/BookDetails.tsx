import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/bookDetails.css";

function BookDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState<any>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/books/get/${id}`
        );
        setDetails(data);
        console.log(data);
      } catch (data) {
        console.log(data);
      }
    };
    init();
  }, [id]);
  return (
    <div>
      <h1>{details.title}</h1>
      <div className="book-details-grid">
        <div className="book-details-image">
          <img src={details.image} alt="" />
        </div>
        <div className="book-content">
          <h3>About The Book</h3>
          <p>{details.description}</p>
          <p>{details.author}</p>
          <p>{details.language}</p>
          <p>{details.price}</p>
          <button>Add To Wishlist</button>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
