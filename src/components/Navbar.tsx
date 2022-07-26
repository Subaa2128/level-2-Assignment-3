import { GiBookAura } from "react-icons/gi";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { IoIosCreate } from "react-icons/io";
import "../styles/Navbar.css";
import axios from "axios";

const Navbar: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [email, setEmail] = useState([]);
  const [passWord, setPassWord] = useState([]);
  const [close, setClose] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        console.log("data");
        const { data } = await axios.get("http://localhost:5000/books/");
        setSearchFilter(data);
        console.log(data);
      } catch (data) {
        console.log(data);
      }
    };
    loadPosts();
  }, []);

  const handleSearch = (e: any) => {
    const searchValue = e.target.value;
    const value = searchFilter.filter((p: any) => {
      return p.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setPosts([]);
    } else setPosts(value);
  };

  const handleCreate = () => {
    let localGet = JSON.parse(localStorage.getItem("signUp") || "[]");

    if (localGet.password !== passWord) {
      console.log("password do not match");

      return;
    }
    if (localGet.email !== email) {
      console.log("email do not match");

      return;
    }

    window.location.href = "http://localhost:3000/CreateBook";
  };

  return (
    <div>
      <div className="navbar_one">
        <div className="logo">
          <div className="logo_img">
            <h5>
              <Link to="/">
                <GiBookAura className="heading" />
              </Link>
            </h5>
            <p>Best Book</p>
          </div>
          <div className="nav_search">
            <input
              type="search"
              placeholder="search brand, product"
              onChange={handleSearch}
            />
            <button className="search_btn">Search</button>
          </div>
          <div className="nav_icons">
            <div className="icon">
              <p>
                <Link to="/Cart">
                  <ImCart className="para" />
                </Link>
              </p>
              <h5>Cart</h5>
            </div>
            <div className="icon">
              <p>
                <Link to="/Login">
                  <FaUserCircle className="para" />
                </Link>
              </p>
              <h5>Login</h5>
            </div>
            <div className="icon" onClick={() => setClose((e) => !e)}>
              <p>
                <IoIosCreate className="para" />
              </p>
              <h5>Create</h5>
            </div>
          </div>
        </div>

        <div className="search_filter">
          {posts.map((item: any) => (
            <Link to={`/BookDetails/${item._id}`}>
              <h5>{item.title}</h5>
            </Link>
          ))}
        </div>

        <ul className="links_container">
          <li className="link_item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>

          <li className="link_item">
            <Link to="/Books" className="link">
              Books
            </Link>
          </li>
          <li className="link_item">
            <Link to="/Author" className="link">
              Author
            </Link>
          </li>
        </ul>
      </div>
      <div className="searchFilter">
        <input
          type="search"
          placeholder="search brand, product"
          onChange={handleSearch}
        />
        <button className="search_btn">Search</button>
      </div>

      {/* Create page */}
      {!close && (
        <div className="createMain">
          <div className="create">
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={passWord}
              placeholder="PassWord"
              onChange={(e: any) => setPassWord(e.target.value)}
            />
          </div>
          <div className="btnCreate">
            <button onClick={() => handleCreate()}>Create</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
