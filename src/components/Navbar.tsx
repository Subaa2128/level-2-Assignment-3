import { useState, useEffect } from "react";
import logo from "../assets/logo/bookLogo.png";
import "../styles/navBar.css";
import { FaSearch, FaOpencart } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import axios from "axios";
import RemoveCart from "../components/removeCart";
function Navbar() {
  const [value, setValue] = useState<any>([]);
  const [filteredData, setFilterData] = useState<any>([]);
  const [filteredAuthor, setFilterAuthor] = useState<any>([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/books/get`);
        setValue(data);
      } catch (data) {
        console.log(data);
      }
    };
    init();
  }, []);

  const handleFilter = (e: any) => {
    const inputNameValue = e.target.value;
    const newFilter = value.filter((obj: any) => {
      return obj.title.toLowerCase().includes(inputNameValue.toLowerCase());
    });
    const authorFilter = value.filter((obj: any) => {
      return obj.author.toLowerCase().includes(inputNameValue.toLowerCase());
    });
    if (inputNameValue === "") {
      setFilterAuthor([]);
      setFilterData([]);
    } else {
      setFilterData(newFilter);
      setFilterAuthor(authorFilter);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="..." />
        </div>
        <div className="search-bar">
          <div>
            <input
              onChange={handleFilter}
              type="search"
              placeholder="Search books by Title, Author"
            />
          </div>
          <div className="search-icon">
            <FaSearch />
          </div>

          <select defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              None
            </option>
            <option value="author">By Author</option>
            <option value="title">By Title</option>
          </select>
        </div>
        <div className="icons">
          <div className="user login">
            <TiUser />
            Login
          </div>
          <div className="user cart">
            <FaOpencart onClick={() => setOpenModal((m) => !m)} />
            Cart
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
      {!openModal && (
        <div className="cart">
          <RemoveCart />
        </div>
      )}
    </>
  );
}

export default Navbar;
