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
import header5 from "../assets/images/book_header_5.jpg";
import header6 from "../assets/images/book_header_6.jpg";
import header7 from "../assets/images/book_header_7.jpg";
import bookStore from "../assets/images/books_store.jpg";
import trending1 from "../assets/images/book_rending_1.jpg";
import trending2 from "../assets/images/book_rending_2.jpg";
import trending3 from "../assets/images/book_rending_3.jpg";
import trending4 from "../assets/images/book_rending_4.jpg";
import trending5 from "../assets/images/book_rending_5.jpg";
import trending6 from "../assets/images/book_rending_6.jpg";
import trending7 from "../assets/images/book_rending_7.jpg";
import trending8 from "../assets/images/book_rending_8.jpg";
import trending9 from "../assets/images/book_rending_9.jpg";
import trending10 from "../assets/images/book_rending_10.jpg";
import trending11 from "../assets/images/book_rending_11.jpg";
import trending12 from "../assets/images/book_rending_12.jpg";
import trending13 from "../assets/images/book_rending_13.jpg";
import trending14 from "../assets/images/book_rending_14.jpg";
import trending15 from "../assets/images/book_rending_15.jpg";
import trending16 from "../assets/images/book_rending_16.jpg";
import trending17 from "../assets/images/book_rending_17.jpg";
import trending18 from "../assets/images/book_rending_18.jpg";

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

  const silder = {
    slidesToShow: 2,
    dots: true,
    autoplay: true,
    speed: 500,
  };

  const iconSilder = {
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
  };

  const trendingSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
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

      <div className="bIcon">
        <div className="books_icon">
          <Slider {...iconSilder}>
            <div className="fiction">
              <GiWhiteBook />
              <p>Fictions Books</p>
            </div>
            <div className="fiction">
              <AiFillStar />
              <p>Award Winners</p>
            </div>
            <div className="fiction">
              <AiOutlineRead />
              <p>Book</p>
            </div>
            <div className="fiction">
              <FaAward />
              <p>Best Seller</p>
            </div>
            <div className="fiction">
              <GiSpellBook />
              <p>New Arrivals</p>
            </div>
            <div className="fiction">
              <FaBoxOpen />
              <p>Box Sets</p>
            </div>
            <div className="fiction">
              <GiRead />
              <p>Books Reading</p>
            </div>
            <div className="fiction">
              <GiBookshelf />
              <p>Books Store</p>
            </div>
            <div className="fiction">
              <SiBookstack />
              <p>Books</p>
            </div>
            <div className="fiction">
              <BsFillJournalBookmarkFill />
              <p>Store Pickup</p>
            </div>
            <div className="fiction">
              <IoMdHeadset />
              <p>Audio Books</p>
            </div>
          </Slider>
        </div>
      </div>

      <div className="trendHeading">
        <h1>Now Trending</h1>
        <div className="rending">
          <Slider {...trendingSlider}>
            <div className="trendingImg">
              <img src={trending1} alt="" />
            </div>
            <div className="trendingImg trImg">
              <img src={trending2} alt="" />
            </div>
            <div className="trendingImg treImg">
              <img src={trending3} alt="" />
            </div>
            <div className="trendingImg trenImg">
              <img src={trending4} alt="" />
            </div>
            <div className="trendingImg tImg">
              <img src={trending5} alt="" />
            </div>
            <div className="trendingImg ">
              <img src={trending6} alt="" />
            </div>

            <div className="trendingImg ">
              <img src={trending7} alt="" />
            </div>
            <div className="trendingImg trImg">
              <img src={trending8} alt="" />
            </div>
            <div className="trendingImg treImg">
              <img src={trending9} alt="" />
            </div>
            <div className="trendingImg treImg">
              <img src={trending10} alt="" />
            </div>
            <div className="trendingImg tImg">
              <img src={trending11} alt="" />
            </div>
            <div className="trendingImg ">
              <img src={trending12} alt="" />
            </div>

            <div className="trendingImg ">
              <img src={trending13} alt="" />
            </div>
            <div className="trendingImg trenImg">
              <img src={trending14} alt="" />
            </div>
            <div className="trendingImg trImg">
              <img src={trending15} alt="" />
            </div>
            <div className="trendingImg trImg">
              <img src={trending16} alt="" />
            </div>
            <div className="trendingImg treImg">
              <img src={trending17} alt="" />
            </div>
            <div className="trendingImg">
              <img src={trending18} alt="" />
            </div>
          </Slider>
        </div>
      </div>

      <div className="bookStore">
        <img src={bookStore} alt="" />
      </div>

      <div className="headerImg">
        <Slider {...silder}>
          <div>
            <img src={header5} alt="" />
            <p>New Offers Only for you</p>
          </div>
          <div>
            <img src={header6} alt="" />
            <p>Discount Offer you can't miss</p>
          </div>
          <div>
            <img src={header7} alt="" />
            <p>Big Discount on Selected Product</p>
          </div>
        </Slider>
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
