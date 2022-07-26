import { useState, useEffect } from "react";
import logo from "../assets/logo/bookLogo.png";
import Login from "./Login";
import CreateLogin from "./CreateLogin";
import "../styles/navBar.css";
import { FaSearch, FaShoppingCart, FaBookOpen } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import axios from "axios";
import RemoveCart from "../components/removeCart";
import { Link } from "react-router-dom";
import _ from "lodash";

function Navbar() {
  const [value, setValue] = useState<any>([]);
  const [filteredData, setFilterData] = useState<any>([]);
  const [filteredAuthor, setFilterAuthor] = useState<any>([]);
  const [openModal, setOpenModal] = useState(true);
  const [openCart, setOpenCart] = useState(true);
  const [openBook, setOpenBook] = useState(true);

  //get all book from data
  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/books/`);
        setValue(data);
      } catch (data) {
        console.log(data);
      }
    };
    init();
  }, []);

  // search filter function on title and author
  const handleFilter = (e: any) => {
    const inputNameValue = e.target.value;
    const newFilter = value.filter((obj: any) => {
      return obj.title.toLowerCase().includes(inputNameValue.toLowerCase());
    });
    console.log(value);
    const authorFilter = value.filter((obj: any) => {
      return obj.author.toLowerCase().includes(inputNameValue.toLowerCase());
    });

    if (inputNameValue === "") {
      setFilterAuthor([]);
      setFilterData([]);
    } else {
      setFilterData(newFilter);
      setFilterAuthor(_.uniqBy(authorFilter, (obj: any) => obj.author));
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="nav">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="..." />
            </Link>{" "}
          </div>
          <div className="search-bar">
            <div className="search-sort">
              <div className="search-icon">
                <FaSearch />
              </div>
            </div>
            <div>
              <input
                onChange={handleFilter}
                type="search"
                placeholder="Search books by Title, Author"
              />
            </div>
          </div>
          <div className="user-login " onClick={() => setOpenModal((m) => !m)}>
            Login
          </div>
        </div>
        <div className="icons">
          <div className="user">
            <Link to={"/book"}>
              <FaBookOpen />
              <p>Book</p>
            </Link>
          </div>

          <div className="user " onClick={() => setOpenCart((m) => !m)}>
            <FaShoppingCart />

            <p> Cart</p>
          </div>
          <div className="user " onClick={() => setOpenBook((m) => !m)}>
            <GiNotebook />
            <p>Create</p>
          </div>
        </div>
      </div>
      <div className="search-filter-content">
        {filteredData.length !== 0 && (
          <div className="search-content">
            <h2>Book Title</h2>
            {filteredData.slice(0, 5).map((props: any) => {
              return <div className="filter-content"> {props.title}</div>;
            })}
          </div>
        )}
        {filteredAuthor.length !== 0 && (
          <div className="search-content">
            <h2>Author</h2>
            {filteredAuthor.slice(0, 5).map((props: any) => {
              return <div className="filter-content">{props.author}</div>;
            })}
          </div>
        )}
      </div>
      {!openCart && (
        <div className="cart">
          <RemoveCart />
        </div>
      )}
      {!openModal && (
        <div className="cart">
          <Login />
        </div>
      )}
      {!openBook && (
        <div className="cart">
          <CreateLogin />
        </div>
      )}
    </>
  );
}

export default Navbar;
