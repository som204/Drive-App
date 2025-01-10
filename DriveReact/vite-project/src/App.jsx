import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import Form from "./Components/form";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Homepage from "./Components/Homepage";
import "./index.css";

function App() {
  const [cookies] = useCookies(["token"]);
  return (
    <>
      <NavBar />
      <Routes>
        {/* Publicly accessible routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Form />} />

        {/* Protected route */}
        <Route
          path="/files"
          element={
            cookies.token ? (<Home />) : (<Login />) }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
