import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Navbar from "../components/Navbar"
import "../styles/Signup.css"

const SignUp: React.FC = () => {

  const [userName, setUserName] = useState("")
  const [userMail, setUserMail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const accountCreate = async () => {
    try {

      const { data } = await axios.post("http://localhost:8000/users/signup",
        {
          name: userName, email: userMail, password: userPassword
        });
      localStorage.setItem("signUp", JSON.stringify(data));
      console.log(data)
    } catch (error) {
      console.log(error);
    }

  };


  return (
    <>
   <Navbar/>

    <h1>Signup</h1>
    <div className="signup-container">
    <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Username' required />
      <input onChange={(e) => setUserMail(e.target.value)} type="email" placeholder='UserEmail...' required />
      <input onChange={(e) => setUserPassword(e.target.value)} type="password" placeholder='Password' required />
      <button onClick={accountCreate}>create</button>
    </div>
      

     


    </>
  );


}

export default SignUp;
