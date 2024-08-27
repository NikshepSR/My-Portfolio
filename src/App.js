import React from "react";
import "./styles/app.css";
// import "./styles/AnimatedBackground.css";
import ParticlesComponent from "./components/ParticlesBackground";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import Contact from "./pages/Contact";

function App() {
  return (
    <div className="animated-background">
      <Router>
        <ParticlesComponent id="particles" />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
