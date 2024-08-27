import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import SlideInWrapper from "../components/SlideInWrapper";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Front End Developer", "Content Creator", "Aspiring Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <SlideInWrapper>
      <div className="home">
        <h1 className="heading-1">Nikshep S R</h1>

        <div className="glitch-container">
          <div className="glitch-text" data-text={texts[textIndex]}>
            {texts[textIndex]}
          </div>
        </div>
      </div>
    </SlideInWrapper>
  );
};

export default Home;
