import React, { useEffect, useState } from "react";
import { PiCaretCircleDoubleUpFill } from "react-icons/pi";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 px-2 primary-btn ${
        showButton ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <PiCaretCircleDoubleUpFill />
    </button>
  );
};

export default ScrollToTop;
