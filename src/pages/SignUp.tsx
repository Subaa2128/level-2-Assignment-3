import React, { useState } from "react";
import axios from "axios";
import booksRead from "../assets/images/books_reading.jpeg";
import { RiCloseFill } from "react-icons/ri";
import "../styles/SignUp.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreatePost = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/users/singnup", {
        name: name,
        email: email,
        password: password,
      });
      localStorage.setItem("signUp", JSON.stringify(data));
      console.log(data);
      window.location.href = "http://localhost:3000/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signUp_main">
      <div className="ImgBx">
        <img src={booksRead} alt="" />
      </div>
      <div className="close">
        <Link to="/">
          <RiCloseFill />
        </Link>
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>SignUp</h2>
          <div className="formBx">
            <div className="inputBx">
              <span>Username</span>
              <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="inputBx">
              <span>Email</span>
              <input
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputBx">
              <span>Password</span>
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="remember">
              <p>
                Don't have an account? <Link to="/Login">Login</Link>
              </p>
            </div>
            <div className="inputBtn">
              <button onClick={() => handleCreatePost()}>SignUp</button>
            </div>
            <h3>SignUp with social media</h3>

            <div className="sci">
              <p>
                <BsFacebook />
              </p>
              <p>
                <AiFillTwitterCircle />
              </p>
              <p>
                <AiFillInstagram />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
