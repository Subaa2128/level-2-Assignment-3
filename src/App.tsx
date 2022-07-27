
import Signup  from "./pages/Signup";
import Login from "./pages/Login";
import Create from "./pages/CreateBooks"
import Home from "./pages/Home"
import Edit from "./pages/Edit"
import Books from "./pages/Books"
import BookDetail from "./pages/BookDetails"
import {Route,Routes} from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/create' element={<Create/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Edit/:id' element={<Edit/>}/>
      <Route path='/Book' element={<Books/>}/>
      <Route path='/BookDetail/:id' element={<BookDetail/>}/>
    </Routes>
    </>
  );
}

export default App;
