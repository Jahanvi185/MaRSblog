import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Home";
import { useState } from "react";
import Cards from "./components/Card/Cards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/gallery/Gallery";
import Projects from "./components/Project/Projects";
// import FeaturedSection from './components/FeaturedSection';
// import HeroSection from './components/HeroSection';

import Blog from "./components/Blog.js";
import Achievements from "./components/Achievements";

function App() {
  const [display, setDisplay] = useState(["about", "help"]);

  return (
    <>
    <Navbar />
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Homepage display={display} setDisplay={setDisplay} />}
            />
            <Route path="/Teams" element={<Cards />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Blog" element={<Blog />} />

          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}
export default App;
