import axios from 'axios';
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import "../styles/Login.css"
import { Link } from "react-router-dom"

const CreateAccount:React.FC = () => {

    const [mailId,setMailId]= useState("");
    const [password,setPassword]= useState("");


    const Login = async () =>{
        try {

            const {data} = await axios.post("http://localhost:8000/users/login", {
                email: mailId,
                password:password,
            });
            setMailId("")
            setPassword("")
            console.log(data)
        } catch (error) {
            console.log("error");
        }
    }




  return (
    <>
    <Navbar/>
    <div className='login-container'>
      
      <h1>Login</h1>
      <div className="input-container">
           <input
          type="text"
          placeholder="Email"
          onChange={(e) => setMailId(e.target.value)}
         />
         <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          />
      </div>
         

        <button onClick={Login}>Login</button>
      <Link to="/SignUp">
      <p>Don't have an account!</p>
      </Link>
       
    </div>
    </>
  )
}

export default CreateAccount