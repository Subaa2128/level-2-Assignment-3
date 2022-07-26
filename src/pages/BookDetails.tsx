import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";
import "../styles/BookDetails.css";
import { Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/books/${id}`);
        setItems(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [id]);

  return (
    <div>
      <Navbar />

      <div className="bookDetails_head">
        <h2>{items.title}</h2>
        <div className="bookDetails">
          <img src={items.image} alt="" />
          <div className="details">
            <p>{items.description}</p>

            <h5>{items.category}</h5>
            <h4>&#8377;{items.price}.00</h4>

            <h3>{items.author}</h3>
            <div className="bookDetails_btn">
              <div className="cart">
                <Link to="/Cart">
                  <button>Cart</button>
                </Link>
              </div>
              <div className="buyNow">
                <button>Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDetails;
