import Form from "./Components/form";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavBar from "./Components/Navbar";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
  <div>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Form/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
  </div>
  );
};

export default App
