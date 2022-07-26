import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/authorFilter.css";
import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import Navbar from "../components/Navbar";
const alphabets = [
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
function AuthorFilter() {
  const [isSelected, setIsSelected] = useState(alphabets[0]);
  const [details, setDetails] = useState<any>([]);
  const [author, setAuthor] = useState<any>([]);

  // get all data from database
  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/books/`);
        setDetails(data);
      } catch (data) {
        console.log(data);
      }
    };
    init();
  }, []);

  //filter author from data
  const handleGetData = (letter: string) => {
    setIsSelected(letter);
    const result = details.filter((f: any) =>
      f.author.toLowerCase().startsWith(letter.toLocaleLowerCase())
    );

    return setAuthor(_.uniqBy(result, (obj: any) => obj.author));
  };

  return (
    <>
      <Navbar />
      <div className="author-filter-page">
        <div className="author-header">
          <p>Author Directory</p>
          <div className="search-bar">
            <input type="search" placeholder="Search Author" />
            <FaSearch className="search-icon" />
          </div>
        </div>
        <div className="author-filter-alphabet">
          {alphabets.map((alpha) => (
            <p
              className={isSelected === alpha ? "active" : undefined}
              onClick={() => handleGetData(alpha)}
            >
              {alpha}
            </p>
          ))}
        </div>
        <div>
          {!author.length ? (
            <p>No authors found</p>
          ) : (
            author.map((props: any) => (
              <div key={props._id}>
                <h3>{props.author}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default AuthorFilter;
