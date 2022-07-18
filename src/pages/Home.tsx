import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import BookSlider from "../components/BookSlider";
import AuthorSlider from "../components/AuthorSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Poster from "../assets/poster/horrorPoster.jpg";
import tamilPoster from "../assets/poster/tamilPoster.jpg";
import romancePoster from "../assets/poster/romancePoster.webp";

function Home() {
  const [details, setDetails] = useState<any>([]);
  const [tamil, setTamil] = useState<any>([]);
  const [romance, setRomance] = useState<any>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/books/get`);

        const inputNameValue = "horror";
        const filtered = data.filter((obj: any) => {
          return obj.category.toLowerCase() === inputNameValue.toLowerCase();
        });
        const inputTamilValue = "tamil";
        const filteredTamil = data.filter((obj: any) => {
          return obj.language.toLowerCase() === inputTamilValue.toLowerCase();
        });
        const inputRomanceValue = "romance";
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
    slidesToScroll: 2,
    autoplay: false,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div>
        <BookSlider />
      </div>
      <div>
        <AuthorSlider />
      </div>
      <div className="poster">
        <div className="poster-image">
          <img src={Poster} alt="" />
        </div>
        <div className="book-grid">
          <Slider {...settings}>
            {details.map((props: any) => (
              <div key={props._id}>
                <img src={props.image} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="tamil-poster">
        <div className="poster-image">
          <img src={tamilPoster} alt="" />
        </div>
        <div className="book-grid">
          <Slider {...settings}>
            {tamil.map((props: any) => (
              <div key={props._id}>
                <img src={props.image} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="romance-poster">
        <div className="poster-image">
          <img src={romancePoster} alt="" />
        </div>
        <div className="book-grid">
          <Slider {...settings}>
            {romance.map((props: any) => (
              <div key={props._id}>
                <img src={props.image} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
