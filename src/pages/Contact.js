import React, { useEffect, useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Apply the animation class when the component mounts
    setAnimationClass("slide-in");
  }, []);

  return (
    <div className={`contact ${animationClass}`}>
      <h1>Get In Touch</h1>
      <p>
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your visions. Feel free to reach out to me
        through any of the platforms below:
      </p>

      <div className="contact-links">
        <a
          href="mailto:nikshepsraj6@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i> Email
        </a>
        <a
          href="https://www.linkedin.com/in/nikshepsr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/nikki3383"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://wa.me/9353243874"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>

      <p>I look forward to hearing from you!</p>
    </div>
  );
};

export default Contact;
