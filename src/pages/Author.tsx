import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bookHeader from "../assets/images/book_header_4.jpg";
import _ from "lodash";
import "../styles/Home.css";
import axios from "axios";
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const Author: React.FC = () => {
  const [isSelected, setIsSelected] = useState(alphabet[0]);
  const [details, setDetails] = useState<any>([]);
  const [author, setAuthor] = useState<any>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/books/");
        setDetails(data);
        console.log(data);
      } catch (data) {
        console.log(data);
      }
    };
    init();
  }, []);
  const handleGetData = (letter: string) => {
    setIsSelected(letter);
    console.log(details);
    const result = details.filter((f: any) => {
      return f.author.toLowerCase().startsWith(letter.toLocaleLowerCase());
    });
    setAuthor(_.uniqBy(result, (obj: any) => obj.author));
    console.log(result);
  };
  return (
    <div>
      <Navbar />
      <div className="authors">
        <h3>Author</h3>
        <div className="alphabet">
          {alphabet.map((alphabet: any) => {
            return (
              <div>
                {" "}
                <p
                  className={isSelected === alphabet ? "active" : undefined}
                  onClick={() => handleGetData(alphabet)}
                >
                  {alphabet}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          {author.map((a: any) => (
            <div className="alphaPara">
              <h6>{a.author}</h6>
            </div>
          ))}
        </div>
        <div className="author_head">
          {!author.length ? (
            <p>No author found</p>
          ) : (
            author.map((pro: any) => (
              <div key={pro._id}>{/* <p>{pro.author}</p> */}</div>
            ))
          )}
        </div>
      </div>
      <div className="authorImg">
        <img src={bookHeader} alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default Author;
