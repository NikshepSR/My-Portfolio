import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaPhone } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__name">Nikshep S R</div>
      <nav className="header__nav">
        <Link to="/" title="Home">
          <FaHome />
        </Link>
        <Link to="/about" title="About Me">
          <FaUser />
        </Link>
        <Link to="/projects" title="Projects">
          <FaProjectDiagram />
        </Link>
        <Link to="/contact" title="Contact">
          <FaPhone />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
