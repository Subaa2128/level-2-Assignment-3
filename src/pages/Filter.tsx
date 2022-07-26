import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "../styles/bookFilter.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Fil() {
  const [details, setDetails] = useState<any>([]);
  const [sportList, setSportList] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/books/`);
        setDetails(data);
      } catch (data) {
        console.log(data);
      }
    };
    init();
  }, []);

  //function for filter category
  function getFilteredList() {
    if (!selectedCategory) {
      return details;
    }
    return details.filter((item: any) => item.category === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event: any) {
    setSelectedCategory(event.target.value);
  }

  //storing id in localstorage for cart
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
    <>
      <Navbar />
      <div className="app">
        <div className="filter-container">
          <div>Filter by Category:</div>
          <div>
            <select
              name="category-list"
              className="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="romance">romance</option>
              <option value="horror">horror</option>
              <option value="fantacy">fantacy</option>
              <option value="fiction">fiction</option>
              <option value="food & drink">food & drink</option>
              <option value="history">history</option>
              <option value="poetry">poetry</option>
            </select>
          </div>
        </div>

        <div className="book-card">
          {filteredList.map((props: any, index: any) => (
            <div {...props} key={index}>
              <div className="wrapper">
                <div className="card">
                  <Link to={`/details/${props._id}`}>
                    <img src={props.image} alt="" />
                  </Link>
                  <div className="content">
                    <div className="buttons">
                      <div className="button">
                        <button onClick={() => handleClick(props._id)}>
                          Add to Cart
                        </button>
                      </div>
                      <div className="button">
                        <a href={`edit/${props._id}`}>
                          <button>Edit</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title">{props.title}</div>
                <div className="row">
                  <div className="details">
                    <span>By:{props.author}</span>
                  </div>
                  <div className="price"> &#x20B9;{props.price}.00</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Fil;
