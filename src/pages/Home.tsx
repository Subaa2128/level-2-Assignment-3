import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookSlider from "../components/BookSlider";
import AuthorSlider from "../components/AuthorSlider";
import FilterCategory from "../components/FilterCategory";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Poster from "../assets/poster/horrorPoster.jpg";
import tamilPoster from "../assets/poster/tamilPoster.jpg";
import romancePoster from "../assets/poster/fantacy.png";
import poster from "../assets/poster/poster.jpg";
import poster2 from "../assets/poster/posters.jpg";
import poster3 from "../assets/poster/posterTales.jpg";
import logo from "../assets/logo/bookLogo.png";

function Home() {
  const [details, setDetails] = useState<any>([]);
  const [tamil, setTamil] = useState<any>([]);
  const [romance, setRomance] = useState<any>([]);

  //filtering horror, tamil, fantacy category function
  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/books/`);

        const inputNameValue = "horror";
        const filtered = data.filter((obj: any) => {
          return obj.category.toLowerCase() === inputNameValue.toLowerCase();
        });
        const inputTamilValue = "tamil";
        const filteredTamil = data.filter((obj: any) => {
          return obj.language.toLowerCase() === inputTamilValue.toLowerCase();
        });
        const inputRomanceValue = "fantacy";
        const filteredRomance = data.filter((obj: any) => {
          return obj.category.toLowerCase() === inputRomanceValue.toLowerCase();
        });
        console.log(filtered);
        setDetails(filtered);
        setTamil(filteredTamil);
        setRomance(filteredRomance);
      } catch (data) {
        console.log(data);
      }
    };
    init();
  }, []);

  var settings = {
    arrow: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div>
        <BookSlider />
      </div>
      <h2>Browse Geners</h2>
      <div>
        <FilterCategory />
      </div>
      <h2>Best Horror Books</h2>
      <div className="poster">
        <div className="poster-image">
          <img src={Poster} alt="" />
        </div>
        <div className="book-grid">
          <Slider {...settings}>
            {details.map((props: any) => (
              <div className="card" key={props._id}>
                <img src={props.image} alt="" />
                <div className="content">
                  <div className="buttons">
                    <Link to={`/details/${props._id}`}>
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="book-poster">
        <img src={poster3} alt="" />
        <img src={poster2} alt="" />
      </div>

      <h2>Popular Tamil Books</h2>
      <div className="tamil-poster">
        <div className="poster-image">
          <img src={tamilPoster} alt="" />
        </div>
        <div className="book-grid">
          <Slider {...settings}>
            {tamil.map((props: any) => (
              <div key={props._id} className="card">
                <img src={props.image} alt="" />
                <div className="content">
                  <div className="buttons">
                    <Link to={`/details/${props._id}`}>
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <h2>Most Viewd Sci-Fi, Fantacy Books</h2>
      <div className="romance-poster">
        <div className="poster-image">
          <img src={romancePoster} alt="" />
        </div>
        <div className="book-grid">
          <Slider {...settings}>
            {romance.map((props: any) => (
              <div className="card" key={props._id}>
                <img src={props.image} alt="" />
                <div className="content">
                  <div className="buttons">
                    <Link to={`/details/${props._id}`}>
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="poster-pamplet">
        <img src={poster} alt="" />
      </div>
      <div>
        <AuthorSlider />
      </div>
      <div className="footer">
        <div className="footer-icon">
          <img src={logo} alt="" />
          <div className="icons">
            <h3>Follow Us</h3>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="footer-collection">
          <ul>
            <h2>Shop By Category</h2>
            <p>fiction</p>
            <p>non-fiction</p>
            <p>horror</p>
            <p>romance</p>
            <p>thriller</p>
            <p>history</p>
          </ul>
          <ul>
            <h2>Our Services</h2>
            <p>find a drop box</p>
            <p>libraries</p>
            <p>campus</p>
            <p>bookseller</p>
            <p>host a drop box</p>
            <p>individuals</p>
            <p>client portal</p>
          </ul>
          <ul>
            <h2>Support</h2>
            <p>order status</p>
            <p>shiping</p>
            <p>return policy</p>
            <p>support center</p>
            <p>payment methods</p>
            <p>cookites setting</p>
          </ul>
          <ul>
            <h2>Shop</h2>
            <p>gift certificates</p>
            <p>wholesale</p>
            <p>affilicates program</p>
            <p>deals and discounts</p>
            <p>reviews</p>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>© Copyright 2022 - All rights Reserves</p>
          <p>
            Privacy Policy | Terms & Condition | Accessibility | Cookie settings
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
