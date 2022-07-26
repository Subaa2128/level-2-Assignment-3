import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import booksRead from "../assets/images/reading.jpg";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [passwordLog, setPasswordLog] = useState("");
  const [emailLog, setEmailLog] = useState("");

  const login = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/users/logIn", {
        email: emailLog,
        password: passwordLog,
      });
      console.log(data);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="login_contant">
      <div className="ImgBx">
        <img src={booksRead} alt="" />
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>Login</h2>
          <div className="formBx">
            <div className="inputBx">
              <span>Email</span>

              <input
                type="text"
                className="form_contol"
                placeholder="Email"
                onChange={(e) => setEmailLog(e.target.value)}
              />
            </div>
            <div className="inputBx">
              <span>Password</span>
              <input
                type="password"
                className="form_contol"
                placeholder="Password"
                onChange={(e) => setPasswordLog(e.target.value)}
              />
            </div>
            <div className="remember">
              <p>
                Don't have an account <Link to="/SignUp">SignUp</Link>
              </p>
            </div>
            <div className="inputBtn">
              <button className="btn" onClick={login}>
                login
              </button>
              <h3>SignUp with social media</h3>
            </div>
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

export default Login;
