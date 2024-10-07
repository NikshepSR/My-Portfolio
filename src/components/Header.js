import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaPhone } from "react-icons/fa";
import ReactJoyride from "react-joyride"; // Import ReactJoyride
import "../styles/Header.css";

const Header = () => {
  const [run, setRun] = useState(false); // Start with Joyride not running

  useEffect(() => {
    setRun(true); // Start Joyride when the component mounts
  }, []);

  // Define the steps for Joyride
  const steps = [
    {
      target: ".header__nav",
      content:
        "This is your navigation panel. Use these links to navigate through my app!",
      placement: "bottom", // Position of the tooltip
    },
    {
      target: ".header__nav a:nth-child(1)",
      content: "Go to Home",
      placement: "bottom",
    },
    {
      target: ".header__nav a:nth-child(2)",
      content: "Learn more about me.",
      placement: "bottom",
    },
    {
      target: ".header__nav a:nth-child(3)",
      content: "Check out my projects.",
      placement: "bottom",
    },
    {
      target: ".header__nav a:nth-child(4)",
      content: "Get in touch with me.",
      placement: "bottom",
    },
  ];

  return (
    <>
      <ReactJoyride
        steps={steps}
        run={run}
        continuous
        showSkipButton
        hideBackButton // Hide the back button if you want a more streamlined experience
        styles={{
          options: {
            primaryColor: "#007bff", // Customize primary color
          },
        }}
        callback={(data) => {
          if (data.status === "finished" || data.status === "skipped") {
            setRun(false); // Stop Joyride when finished or skipped
          }
        }}
        start={true} // Start Joyride automatically
      />
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
    </>
  );
};

export default Header;
