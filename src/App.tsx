import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookFilter from "./pages/BookFilter";
import Edit from "./pages/Edit";
import CreateBook from "./pages/CreateBook";
import BookDetails from "./pages/BookDetails";
import AuthorFilter from "./pages/AuthorFilter";
import Fil from "./pages/Filter";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Book" element={<BookFilter />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/Create" element={<CreateBook />} />
      <Route path="/author" element={<AuthorFilter />} />
      <Route path="/details/:id" element={<BookDetails />} />
      <Route path="/filt" element={<Fil />} />
    </Routes>
  );
};
export default App;
