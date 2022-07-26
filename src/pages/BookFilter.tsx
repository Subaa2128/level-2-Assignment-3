import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/bookFilter.css";
import Navbar from "../components/Navbar";

function BookFilter() {
  const [details, setDetails] = useState<any>([]);
  const [prices, setCategory] = useState("");
  const [category, setPrices] = useState("");
  const [price, setPrice] = useState<any>(40);

  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e: any) => {
    setPrice(e.target.value);
  };

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

  //price sorting function
  const handleChange = (e: any) => {
    const selected = e.target.value;
    setPrices(selected);
    if (selected === "") {
      return details;
    }

    if (selected === "higher") {
      return setDetails([
        ...details.sort((a: any, b: any) => a.price - b.price),
      ]);
    }
    if (selected === "lower") {
      return setDetails([
        ...details.sort((a: any, b: any) => b.price - a.price),
      ]);
    }
  };

  //adding id in localstorage for cart
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
      <div>
        <Link to={"/filt"}>
          <div className="filter-category-link">
            <h2>Click Here To Filter Category</h2>
          </div>
        </Link>
        <div className="filter-sort">
          <div className="container">
            <h1>Price</h1>
            <div className="price-filter">
              <div className="filt">
                <input type="range" onInput={handleInput} />
              </div>
            </div>
          </div>
          <div className="sort-filter">
            <h3>Sort By:</h3>
            <select defaultValue={prices} onChange={handleChange}>
              <option value="">By Relevence</option>
              <option value="higher">Price: Low to High</option>
              <option value="lower">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="book-card">
          {details
            .filter((hotel: any) => {
              return hotel.price > parseInt(price, 30);
            })
            .map((props: any) => {
              return (
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
              );
            })}
        </div>
      </div>
    </>
  );
}

export default BookFilter;
