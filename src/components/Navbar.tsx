import Logo from "../assets/images/bookLogo.1.png";
import User from "../assets/images/user_img.png";
import { Link } from "react-router-dom";
import React from "react";
import ShoppingCart from "../assets/images/shopping_img.png";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar_one">
      <div className="logo">
        <img src={Logo} alt="" />
        <div className="nav_items">
          <div className="search">
            <input type="search" placeholder="search brand, product" />
            <button className="search_btn">Search</button>
          </div>
          <div className="image_logos">
            <Link to="/Books">
              <img src={ShoppingCart} alt="" />
            </Link>
            <Link to="/SignUp">
              <img src={User} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
