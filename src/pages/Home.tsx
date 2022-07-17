import "../styles/Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import header1 from "../assets/images/book_header_1.jpg";
import header2 from "../assets/images/book_header_2.jpg";
import header3 from "../assets/images/book_header_3.jpg";
import header4 from "../assets/images/book_header_4.jpg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { GiRead } from "react-icons/gi";
import { GiSpellBook } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { GiWhiteBook } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { IoMdHeadset } from "react-icons/io";

interface Store {
  _id: string;
  title: string;
  price: string;
  image: string;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<Store[]>([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/books/getBook");
        setItems(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="header_images">
        <img className="slide_1" src={header1} alt="" />
        <img className="slide_2" src={header2} alt="" />
        <img className="slide_3" src={header3} alt="" />
        <img className="slide_4" src={header4} alt="" />
      </div>

      <div className="books_icon">
        <div className="fiction">
          <GiWhiteBook />
          <p>Fictions Books</p>
        </div>
        <div className="award">
          <AiFillStar />
          <p>Award Winners</p>
        </div>
        <div className="Books">
          <AiOutlineRead />
          <p>Book</p>
        </div>
        <div className="best">
          <FaAward />
          <p>Best Seller</p>
        </div>
        <div className="new">
          <GiSpellBook />
          <p>New Arrivals</p>
        </div>
        <div className="box">
          <FaBoxOpen />
          <p>Box Sets</p>
        </div>
        <div className="books_read">
          <GiRead />
          <p>Books Reading</p>
        </div>
        <div className="books_store">
          <GiBookshelf />
          <p>Books Store</p>
        </div>
        <div className="Book">
          <SiBookstack />
          <p>Books</p>
        </div>
        <div className="store">
          <BsFillJournalBookmarkFill />
          <p>Store Pickup</p>
        </div>
        <div className="audio">
          <IoMdHeadset />
          <p>Audio Books</p>
        </div>
      </div>

      <div className="homeBooks">
        <h2>All Time Favourite</h2>
        <Slider {...settings}>
          {items.map((pro) => {
            return (
              <div>
                <div key={pro._id}>
                  <div className="homeBook_slider">
                    <div>
                      <img src={pro.image} alt="" />
                      <h2>{pro.title}</h2>
                      <h4>&#8377; {pro.price}</h4>
                      <div className="card_btn">
                        <button>Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
