import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { GiBookAura } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div>
      <h1 className="content">CONTENT</h1>
      <div className="footer_head">
        <div className="footer">
          <div className="footer_contant">
            <h2>
              <GiBookAura />
              <h5>Best Book</h5>
            </h2>
            <p>
              At SapnaOnline.com we are working towards bringing our retail
              experience to the web and we strive to uphold this prestige by
              serving our customers better.
            </p>
          </div>

          <div className="footerHead">
            <h2>Company</h2>

            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Blog</p>
            <p>Gift a Smile</p>
            <p>Contact Us</p>
          </div>

          <div className="footerHead">
            <h2>Help</h2>

            <p>Amazon Global Selling</p>
            <p>Become an Affiliate </p>
            <p>Payment</p>
            <p>Shipping</p>
            <p>Return</p>
            <p>FAQ</p>
            <p></p>
          </div>

          <div className="footerHead">
            <h2>Use Cases</h2>
            <p>Automotive</p>
            <p>Smartwatch</p>
            <p>Mobile & Tablet</p>
            <p>TV & Productions</p>
            <p>Game</p>
          </div>

          <div className="footerHead">
            <h2>Let Us Help you</h2>

            <p>Your Account</p>
            <p>Return Centre</p>
            <p>100% Purchase Protection</p>
            <p>Help</p>
          </div>
        </div>

        <div className="Social">
          <Link to="/">
            <p className="faceBook socialMedia">
              <FaFacebook />
            </p>
          </Link>
          <Link to="/">
            <p className="youtube socialMedia">
              <ImYoutube />
            </p>
          </Link>
          <Link to="/">
            <p className="twitter socialMedia">
              <AiFillTwitterCircle />
            </p>
          </Link>
          <Link to="/">
            <p className="dribble socialMedia">
              <AiFillDribbbleCircle />
            </p>
          </Link>

          <Link to="/">
            <p className="tumblr socialMedia">
              <AiFillInstagram />
            </p>
          </Link>
        </div>

        <div className="footer_end">
          <p>Copyright © 2022 . Bookswagon.com. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
