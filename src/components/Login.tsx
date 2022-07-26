import React from "react";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [value, setValue] = useState(false);
  const [close, setClose] = useState(true);

  const signUp = async () => {
    // Create and store data in local storage
    try {
      const { data } = await axios.post(`http://localhost:5000/users/signIn`, {
        name: name,
        email: email,
        password: password,
      });

      localStorage.setItem("user", JSON.stringify(data));
      console.log(data);
      alert(`Welcome ${data.name}`);
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      console.log("can't update");
    }
  };

  // function matches login with signup data
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
      {close && (
        <div className="overlay">
          <div className="wrapper">
            <a href="#" className="close" onClick={() => setClose(false)}>
              &times;
            </a>
            <div className="column details">
              {!value && (
                <div className="signin">
                  <h1>Sign In</h1>
                  <input
                    type="email"
                    placeholder="UserEmail"
                    onChange={(e) => setEmailLogin(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPasswordLogin(e.target.value)}
                  />
                  <a href="#">Forgot Password</a>
                  <button className="form-submit" onClick={login}>
                    Sign In
                  </button>
                  <span>
                    You don't have an account yet?
                    <button id="signUp" onClick={() => setValue(true)}>
                      {" "}
                      Create in Now
                    </button>
                  </span>
                </div>
              )}

              {value && (
                <div className="signup">
                  <h1>Sign Up</h1>
                  <input
                    type="name"
                    placeholder="Full Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Username"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="form-submit" onClick={signUp}>
                    Sign Up
                  </button>
                  <span>
                    Already have an account?
                    <button id="signIn" onClick={() => setValue(false)}>
                      Sign In
                    </button>
                  </span>
                </div>
              )}
            </div>

            <div className="column content">
              {!value && (
                <div className="signin">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with our personal
                    info.
                  </p>
                </div>
              )}

              {value && (
                <div className="signup">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
