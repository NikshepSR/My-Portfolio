import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a
          className="icons"
          href="https://www.linkedin.com/in/nikshepsr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="icons"
          href="https://github.com/nikki3383"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="icons"
          href="https://wa.me/9353243874"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          className="icons"
          href="mailto:nikshepsraj6@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
