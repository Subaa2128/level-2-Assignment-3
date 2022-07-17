import Logo from "../assets/images/bookLogo.1.png";
import User from "../assets/images/user_img.png";
import { Link } from "react-router-dom";
import React from "react";
import ShoppingCart from "../assets/images/shopping_img.png";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="navbar_one">
        <div className="logo">
          <img src={Logo} alt="" />
          <div className="nav_items">
            <div className="search">
              <input type="search" placeholder="search brand, product" />
              <button className="search_btn">Search</button>
            </div>
            <Link to="/Books">
              <img src={ShoppingCart} alt="" />
            </Link>
            <Link to="/SignUp">
              <img src={User} alt="" />
            </Link>
          </div>
        </div>
        <ul className="links_container">
          <li className="link_item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="link_item">
            <Link to="/About" className="link">
              About
            </Link>
          </li>
          <li className="link_item">
            <Link to="/Service" className="link">
              Service
            </Link>
          </li>
          <li className="link_item">
            <Link to="/Books" className="link">
              Books
            </Link>
          </li>
          <li className="link_item">
            <Link to="/" className="link">
              accessories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
