import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
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
    <div className="login_container">
      login<Link to="/CreateBook">CreateBook</Link>
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmailLog(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPasswordLog(e.target.value)}
        />

        <button onClick={login}>logIn</button>
      </div>
    </div>
  );
};

export default Login;
