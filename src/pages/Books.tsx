import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../styles/Books.css";
import "../styles/Cart.css";
import Footer from "../components/Footer";

interface Store {
  _id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  author: string;
  image: string;
}

const Books: React.FC = () => {
  const [items, setItems] = useState<Store[]>([]);
  const [sportList, setSportList] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/books/");
        setItems(data);
        setSportList(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  const handleCart = (id: any) => {
    const cartOld = JSON.parse(localStorage.getItem("title") || "[]");
    if (!cartOld) {
      localStorage.setItem("title", JSON.stringify([id]));
      return;
    }

    const isOldId = cartOld.find((p: any) => p === id);
    if (isOldId) {
      const filterData = cartOld.filter((p: any) => p !== id);
      localStorage.setItem("title", JSON.stringify(filterData));
      return;
    }
    cartOld.push(id);
    localStorage.setItem("title", JSON.stringify(cartOld));
  };

  function getFilteredList() {
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item: any) => item.category === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event: any) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div>
      <Navbar />
      <div className="categoryOption">
        <h1>Books</h1>
        <select
          name="category-list"
          id="category-list"
          onChange={handleCategoryChange}
        >
          <option className="category" value="">
            All
          </option>
          <option className="category" value="Children stories">
            Children Stories
          </option>
          <option className="category" value="Food">
            Food
          </option>
          <option className="category" value="Programming">
            Programming
          </option>
          <option className="category" value="Indian polity">
            Indian polity
          </option>
          <option className="category" value="Avengers">
            Avengers
          </option>
        </select>
      </div>
      <div className="books">
        <div className="bookStore Cart_main">
          {filteredList.map((pro: any, index: any) => {
            return (
              <div {...pro} key={index}>
                <div className="books_items Cart_contant">
                  <div key={pro._id}>
                    <Link to={`/BookDetails/${pro._id}`}>
                      <img src={pro.image} alt="" />
                    </Link>
                    <div className="btn_add">
                      <button onClick={() => handleCart(pro._id)}>
                        Add to Cart
                      </button>
                    </div>
                    <div className="edit_btn">
                      <Link to={`/EditPage/${pro._id}`}>
                        <button>Edit</button>
                      </Link>
                    </div>

                    <h2>{pro.title}</h2>

                    <h4>&#8377;{pro.price}.00</h4>
                    <p>{pro.description}</p>

                    <h3>{pro.author}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Books;
