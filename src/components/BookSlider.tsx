import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookSlider1 from "../assets/bookSlider/bookSlide1.jpg";
import bookSlider2 from "../assets/bookSlider/bookSlide2.jpg";
import bookSlider3 from "../assets/bookSlider/bookSlide3.jpg";
import bookSlider4 from "../assets/bookSlider/bookSlide4.webp";

import "../styles/home.css";

function BookSlider() {
  var settings = {
    arrow: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    cssEase: "linear",
  };
  return (
    <div className="book-slider">
      {" "}
      <Slider {...settings}>
        <div className="slider-book">
          <img src={bookSlider1} alt="" />
        </div>
        <div className="slider-book">
          <img src={bookSlider2} alt="" />
        </div>
        <div className="slider-book">
          <img src={bookSlider3} alt="" />
        </div>
        <div className="slider-book">
          <img src={bookSlider4} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default BookSlider;
