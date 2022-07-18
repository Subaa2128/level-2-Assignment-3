import React from "react";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailLogin, setEmailLogin] = useState("");

  const signUp = async () => {
    try {
      const { data } = await axios.post(`http://localhost:5000/users/signIn`, {
        name: name,
        email: email,
        password: password,
      });

      localStorage.setItem("user", JSON.stringify(data));
      console.log(data);
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      console.log("can't update");
    }
  };
  const login = async () => {
    try {
      const { data } = await axios.post(`http://localhost:5000/users/logIn`, {
        email: emailLogin,
        password: passwordLogin,
      });

      console.log(data);
    } catch (error) {
      console.log("can't update");
    }
  };
  return (
    <div>
      <div className="login-inputs">
        <input
          type="text"
          placeholder="Enter Your Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login-buttons">
        <button onClick={signUp}>signUp</button>
      </div>

      <div>
        <input type="text" onChange={(e) => setEmailLogin(e.target.value)} />
        <input type="text" onChange={(e) => setPasswordLogin(e.target.value)} />

        <button onClick={login}>log In</button>
      </div>
    </div>
  );
}

export default Login;
