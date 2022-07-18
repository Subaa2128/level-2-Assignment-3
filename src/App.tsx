import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Service from "./pages/Service";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CreateBook from "./pages/CreateBook";
import EditPage from "./pages/EditPage";
import Books from "./pages/Books";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateBook" element={<CreateBook />} />
        <Route path="/EditPage/:id" element={<EditPage />} />
        <Route path="/Books" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
