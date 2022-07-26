import { useState } from "react";
import "../styles/navBar.css";

function CreateLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //get signin data from localstorage
  const [login] = useState(() => {
    const data = localStorage.getItem("user");
    if (!data) return [];
    const parsedData = JSON.parse(data);
    return parsedData;
  });
  console.log(login);

  //function leads to create page
  const CreateLoginBook = () => {
    if (login.email !== email) {
      alert("email do not match");
      return;
    }
    if (login.password !== password) {
      alert("password do not match");
      return;
    }
    window.location.href = "http://localhost:3000/create";
  };
  return (
    <div className="box">
      <h1>create your book</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Create" onClick={CreateLoginBook} />
    </div>
  );
}

export default CreateLogin;
