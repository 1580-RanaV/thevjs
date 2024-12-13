"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    // Show button when page is scrolled down more than 300 pixels
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else if (isVisible) {
      setIsExiting(true); // Trigger exit animation
      setTimeout(() => {
        setIsExiting(false);
        setIsVisible(false); // Hide button after animation
      }, 400); // Match exit animation duration
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 text-neutral-950 rounded-full border-4 border-white p-2 shadow-lg transition-all duration-300 ease-in-out ${
            isExiting ? "animate-popOut" : "animate-popUp"
          }`}
        >
          <ArrowUp className="text-white" size={44} />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
