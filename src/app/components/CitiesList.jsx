"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingNameDisplay = () => {
  // List of names to cycle through
  const names = [
    'Vendôme, France',
    'Riyadh, Saudi Arabia',
    'Dubai, UAE',
    'Istanbul, Turkey',
    'Lagos, Nigeria',
    'Casablanca, Morocco',
    'Dammam, Saudi Arabia',
    'Jeddah, Saudi Arabia',
    'Abu Dhabi, UAE',
    'Manama, Bahrain',
    'Baghdad, Iraq',
    'New Delhi, India',
    'Multan, Pakistan',
    'Faisalabad, Pakistan',
    'Sialkot, Pakistan',
    'Amman, Jordan',
    'Tabuk, Saudi Arabia',
    'Cairo, Egypt',
    'Tel Aviv, Israel',
    'Kalba, UAE',
    'Johannesburg, South Africa',
    'Riyadh, Saudi Arabia',
    'Tashkent, Uzbekistan',
    'Marrakech, Morocco',
    'Mumbai, India',
    'Hurghada, Egypt',
    'Atyrau, Kazakhstan',
    'Mombasa, Kenya',
    'Abuja, Nigeria',
    'Benghazi, Libya',
    'Jubail, Saudi Arabia',
    'Baku, Azerbaijan',
    'Luanda, Angola',
    'Frankfurt, Germany',
    'Oskemen, Kazakhstan',
    'Ho Chi Minh City, Vietnam',
    'Doha, Qatar',
    'Maribor, Slovenia',
    'Muscat, Oman',
    'Lisbon, Portugal',
    'Leccio, Italy'
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
    }, 1200);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [isVisible, names.length]);

  return (
    <section>
        <span className='block mt-12 font-medium text-center'>Places touched down</span>
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