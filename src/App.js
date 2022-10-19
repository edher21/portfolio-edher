import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Cover from "./components/cover/Cover";

// import CatsDogs from "./components/FirstProject/CatsDogs";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<Cover />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
