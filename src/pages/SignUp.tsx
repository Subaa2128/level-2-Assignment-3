import React, { useState } from "react";
import axios from "axios";
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      SignUp<Link to="/Login">Login</Link>
      <h1>SignUp</h1>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => handleCreatePost()}>Create</button>
      </div>
    </div>
  );
};

export default SignUp;
