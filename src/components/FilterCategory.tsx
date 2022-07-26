import React from "react";
import "../styles/filterCategory.css";
import { Link } from "react-router-dom";

function FilterCategory() {
  return (
    <div className="book-category">
      <Link to={"/book"}>
        <div className="book">
          <p>Books</p>
        </div>
      </Link>
      <Link to={"/filt"}>
        <div className="fantacy">
          <p>Fantacy</p>
        </div>
      </Link>
      <Link to={"/filt"}>
        {" "}
        <div className="thriller">
          <p>Thriller</p>
        </div>
      </Link>
      <Link to={"/filt"}>
        <div className="science">
          <p>Science</p>
        </div>
      </Link>
      <Link to={"/filt"}>
        <div className="history">
          <p>History</p>
        </div>
      </Link>
      <Link to={"/filt"}>
        <div className="action">
          <p>Action</p>
        </div>
      </Link>
      <Link to={"/filt"}>
        <div className="food">
          <p>Food & Drinks</p>
        </div>
      </Link>
      <Link to={"/filt"}>
        <div className="horror">
          <p>Horror</p>
        </div>
      </Link>
      <Link to={"/filt"}>
        <div className="romance">
          <p>Romance</p>
        </div>
      </Link>
    </div>
  );
}

export default FilterCategory;
