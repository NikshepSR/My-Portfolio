// SlideInWrapper.js
import React, { useEffect, useState } from "react";
import "../styles/SlideInWrapper.css";

const SlideInWrapper = ({ children }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Trigger the slide-in animation when the component mounts
    setAnimationClass("slide-in");
  }, []);

  return <div className={animationClass}>{children}</div>;
};

export default SlideInWrapper;
