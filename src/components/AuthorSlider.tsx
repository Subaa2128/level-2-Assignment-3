import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../styles/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stephenKing from "../assets/authorSlider/stephenKing.jpg";
import jkRowling from "../assets/authorSlider/jkRowling.jpg";
import kalki from "../assets/authorSlider/kalki.jpg";
import colleenHoover from "../assets/authorSlider/colleenHoover.webp";
import cixinLiu from "../assets/authorSlider/cixinLiu.jpeg";
import rickRiordan from "../assets/authorSlider/rickRiordan.jpg";
import shomaNarayanan from "../assets/authorSlider/shomaNarayanan.webp";
import julesVerne from "../assets/authorSlider/julesVerne.webp";

function AuthorSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <div>
      {" "}
      <div>
        <Link to={"/author"}>
          <button>View All</button>
        </Link>
      </div>
      <Slider {...settings}>
        <div className="slider">
          <img src={stephenKing} alt="" />
          <h3>Stephen King</h3>
        </div>
        <div className="slider">
          <img src={jkRowling} alt="" />
          <h3>J.K.Rowling</h3>
        </div>
        <div className="slider">
          <img src={kalki} alt="" />
          <h3>kalki</h3>
        </div>
        <div className="slider">
          <img src={colleenHoover} alt="" />
          <h3>Colleen Hoover</h3>
        </div>
        <div className="slider">
          <img src={cixinLiu} alt="" />
          <h3>Cixin Liu</h3>
        </div>
        <div className="slider">
          <img src={rickRiordan} alt="" />
          <h3>Rick Riordan</h3>
        </div>
        <div className="slider">
          <img src={shomaNarayanan} alt="" />
          <h3>Shoman Narayanan</h3>
        </div>
        <div className="slider">
          <img src={julesVerne} alt="" />
          <h3>Jules Verne</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AuthorSlider;
