import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/bookDetails.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import useCollapse from "react-collapsed";
import Navbar from "../components/Navbar";

function BookDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState<any>([]);
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  //get particular book from data
  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/books/${id}`);
        setDetails(data);
        console.log(data);
      } catch (data) {
        console.log(data);
      }
    };
    init();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="book-details">
        <div className="link">
          <Link to={`/`}>
            <p>Home </p>
          </Link>
          <p>&#62;</p>
          <Link to={`/Book`}>
            <p>All Books</p>
          </Link>
          <p> &#62; </p>
          <p>{details.title}</p>
        </div>

        <div className="book-details-grid">
          <div className="book-details-image">
            <img src={details.image} alt="" />
          </div>
          <div className="book-content">
            <h1>{details.title}</h1>
            <div className="icons">
              <p>By :{details.author}</p>
              <div>
                <FaFacebookF className="icon" />
                <FaInstagram className="icon" />
                <FaTwitter className="icon" />
              </div>
            </div>
            <div className="content">
              <p>Category : {details.category}</p>
              <p>Language :{details.language}</p>
              <p> Rate : {details.price}</p>
            </div>
            <button>Add To Wishlist</button>
          </div>
        </div>

        <div className="read-more-read-less">
          <h3>About The Book</h3>

          <p {...getCollapseProps()}>{details.description}</p>
          <button
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
