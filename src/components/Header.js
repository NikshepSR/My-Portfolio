// src/components/Header.js
import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaPhone } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__name">Nikshep S R</div>
      <nav className="header__nav">
        <a href="/" title="Home">
          <FaHome />
        </a>
        <a href="/about" title="About Me">
          <FaUser />
        </a>
        <a href="/projects" title="Projects">
          <FaProjectDiagram />
        </a>
        <a href="/contact" title="Contact">
          <FaPhone />
        </a>
      </nav>
    </header>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Header.css";

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/projects">Projects</Link>
//           </li>
//           <li>
//             <Link to="/skills">Skills</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
