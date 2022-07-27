import "../styles/Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
import fiction1 from "../assets/images/fiction_img_1.png";
import fiction2 from "../assets/images/fiction_img_2.png";
import fiction3 from "../assets/images/fiction_img_3.png";
import fiction4 from "../assets/images/fiction_img_4.png";
import steadman1 from "../assets/images/a.f_Steadman_1.jpg";
import rowling2 from "../assets/images/j.k_Rowling_img_2.jpg";
import markuszusak3 from "../assets/images/markus_zusak_3.jpg";
import niyatee4 from "../assets/images/Niyatee_parikh_sharma_4.png";
import james5 from "../assets/images/James_berry.png";
import zetta6 from "../assets/images/zetta_elliott.jpg";
import lisa7 from "../assets/images/lisa_7.png";
import pierre8 from "../assets/images/pierre_8.jpg";
import ellen9 from "../assets/images/ellen_9.jpg";
import william10 from "../assets/images/william_10.jpg";
import bruce11 from "../assets/images/bruce_11.jpg";
import sia12 from "../assets/images/sia_12.jpg";
import frontImg1 from "../assets/images/front_img_1.png";
import frontImg2 from "../assets/images/front_img_2.png";
import frontImg3 from "../assets/images/front_img_3.jpg";
import frontImg4 from "../assets/images/front_img_4.jpg";
import frontImg5 from "../assets/images/front_img_5.png";
import frontImg6 from "../assets/images/front_img_6.jpg";
import frontImg7 from "../assets/images/front_img_7.png";
import frontImg8 from "../assets/images/front_img_8.jpg";
import frontImg9 from "../assets/images/front_img_9.jpg";

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
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const silder = {
    slidesToShow: 2,
    autoplay: true,
    speed: 500,
  };

  const iconSilder = {
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const trendingSlider = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  const author = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1055,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 345,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const frontImg = {
    slidesToShow: 7,
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 965,
        settings: {
          slidesToShow: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/books/");
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

      <div className="iconHead">
        <h2>Choose Your Own Interest</h2>
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
        <h1>All Time Favourite</h1>
        <Slider {...settings}>
          {items.map((pro) => {
            return (
              <div>
                <div key={pro._id}>
                  <div className="homeBook_slider">
                    <Link to="/Books">
                      <div>
                        <img src={pro.image} alt="" />
                        <h2>{pro.title}</h2>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="categories">
        <h2>Top Ten Categories</h2>
      </div>

      <div className="fiction_img">
        <img src={fiction1} alt="" />
        <img src={fiction2} alt="" />
        <img src={fiction3} alt="" />
        <img src={fiction4} alt="" />
      </div>

      <div className="headingTwo">
        <h2>New Arrival</h2>
      </div>

      <div className="front_img">
        <Slider {...frontImg}>
          <div className="box">
            <Link to="/Books">
              <img src={frontImg1} alt="" />
              <p>The Silence (Movie Tie in edition)</p>
              <h5>&#8377; 179.00</h5>
            </Link>
          </div>
          <div className="box">
            <Link to="/Books">
              <img src={frontImg2} alt="" />
              <p>Alita: Battle Angel The official Movie</p>
              <h5>&#8377; 266.00</h5>
            </Link>
          </div>
          <div className="box">
            <Link to="/Books">
              <img src={frontImg3} alt="" />
              <p>Secret Garden: The Story of the Movie</p>
              <h5>&#8377; 199.00</h5>
            </Link>
          </div>
          <div className="box">
            <Link to="/Books">
              <img src={frontImg4} alt="" />
              <p>The French Road Movie</p>
              <h5>&#8377; 263.00</h5>
            </Link>
          </div>
          <div className="box">
            <Link to="/Books">
              <img src={frontImg5} alt="" />
              <p>Bloodshot-The official Movie</p>
              <h5>&#8377; 399.00</h5>
            </Link>
          </div>
          <div className="box">
            <Link to="/Books">
              <img src={frontImg6} alt="" />
              <p>The Movie Version</p>
              <h5>&#8377; 250.00</h5>
            </Link>
          </div>
          <div className="box">
            <Link to="/Books">
              <img src={frontImg7} alt="" />
              <p>Gemini Man-The official Movie</p>
              <h5>&#8377; 105.00</h5>
            </Link>
          </div>
          <div className="box">
            <Link to="/Books">
              <img src={frontImg8} alt="" />
              <p>Refugee Women In Ritwik Ghatak Movies</p>
              <h5>&#8377; 620.00</h5>
            </Link>
          </div>
          <div className="box">
            <Link to="/Books">
              <img src={frontImg9} alt="" />
              <p>How To train you Dragon</p>
              <h5>&#8377; 679.00</h5>
            </Link>
          </div>
        </Slider>
      </div>

      <div className="author_heading">
        <h2>Featured Author</h2>
        <div className="author_images">
          <Slider {...author}>
            <div>
              <Link to="/Author">
                <img src={steadman1} alt="" />
                <p>J.K Rowling</p>
              </Link>
            </div>
            <div>
              <Link to="/Author">
                <img src={rowling2} alt="" />
                <p>A.F Steadman</p>
              </Link>
            </div>
            <div>
              <Link to="/Author">
                <img src={markuszusak3} alt="" />
                <p>Markus Zusak</p>
              </Link>
            </div>
            <div>
              <Link to="/Author">
                <img src={niyatee4} alt="" />
                <p>Niyatee Sharma</p>
              </Link>
            </div>
            <div>
              <Link to="/Author">
                <img src={james5} alt="" />
                <p>James Berry</p>
              </Link>
            </div>
            <div>
              <Link to="/Author">
                <img src={zetta6} alt="" />
                <p>Zetta Elliott</p>
              </Link>
            </div>
            <div>
              <Link to="/Author">
                <img src={lisa7} alt="" />
                <p>Lisa Maxwell</p>
              </Link>
            </div>
            <div>
              <Link to="/Author">
                <img src={pierre8} alt="" />
                <p>Pierre Vanhove</p>
              </Link>
            </div>
            <div>
              <Link to="/Author">
                <img src={ellen9} alt="" />
                <p>Ellen Byron</p>
              </Link>
            </div>
            <div>
              <Link to="/Author">
                <img src={william10} alt="" />
                <p>William Joseph</p>
              </Link>
            </div>
            <div>
              <Link to="/Author">
                <img src={bruce11} alt="" />
                <p>Bruce Coville</p>
              </Link>
            </div>
            <div>
              <Link to="/Author">
                <img src={sia12} alt="" />
                <p>Sia Gupta</p>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
