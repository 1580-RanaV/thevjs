"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingNameDisplay = () => {
  // List of names to cycle through
  const names = [
    "Adidas",
    "HUGO BOSS",
    "BOSS",
    "HUGO",
    "seiko",
    "cartier",
    "Aldar",
    "Al Futtaim",
    "Rolex",
    "Marks & Spencer",
    "K & N",
    "Al Habtoor Motors",
    "Blue",
    "Zeal",
    "Watches & more",
    "Asteco Al Zeina",
    "Asteco Al Raha",
    "Salik HQ",
    "Al Firas",
    "Al Futtaim Electric Motors",
    "Jawhara Jewellers",
    "Ladybird Nursery",
    "Yalla Begums",
    "BITS Lobby",
    "Taste of India",
    "Gadgets",
    "Raddison Blu",
    "JEEP Grand Wagoneer",
    "Spring Oasis Villa",
    "Roberto Cavalli",
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only start cycling when component is visible
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % names.length
      );
    }, 1500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [isVisible, names.length]);

  return (
    <section>
        <span className='block mt-12 font-medium text-lg text-center uppercase'>clients left with a big smile</span>
        <div 
      ref={containerRef} 
      className="flex justify-center items-center h-32 w-full mt-5"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.8 }}
          className="text-4xl text-green-400 font-bold text-center uppercase"
        >
          {names[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
    <span className='block mt-4 font-medium text-sm text-neutral-600 italic text-center lowercase'>(Last updated to May 2023)</span>
    </section>
  );
};

export default RotatingNameDisplay;