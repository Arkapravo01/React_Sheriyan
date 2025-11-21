import React from "react";
import { Route, Routes, Link } from "react-router-dom"; // use Link not <a>
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      <footer>This is Footer</footer>
    </div>
  );
};

export default App;
