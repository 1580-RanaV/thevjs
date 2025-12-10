'use client';

import React from 'react';
import WorkAccordion from './WorkAccordion';

const Pixel = () => {
  const workDetails = [
    {
      title: 'Aldar Headquarters',
      place: 'Al Raha, Abu Dhabi, UAE',
      description:
        'For the Aldar HQ building in Abu Dhabi, I developed a simple yet impactful design that utilizes circles and overlapping forms to create a dynamic landscape.',
      images: [
        '/pixel/aldar/pic1.PNG',
        '/pixel/aldar/pic6.PNG',
        '/pixel/aldar/pic2.PNG',
        '/pixel/aldar/pic3.PNG',
        '/pixel/aldar/pic4.png',
        '/pixel/aldar/pic5.PNG',
      ],
    },

    {
      title: 'Aldar Al Rayanna',
      place: 'Abu Dhabi, UAE',
      description:
        'A community development project for Aldar Group, focusing on modern planning strategies and cohesive neighborhood design.',
      images: [
        '/pixel/alrayanna/pic (1).png',
        '/pixel/alrayanna/pic (2).png',
        '/pixel/alrayanna/pic (5).png',
        '/pixel/alrayanna/pic (6).png',
        '/pixel/alrayanna/pic (8).png',
        '/pixel/alrayanna/pic (9).png',
      ],
    },

    {
      title: 'Al Futtaim Rental Experience',
      place: 'Dubai, UAE',
      description:
        'The experience center design embraces minimalism, enhancing customer engagement with thoughtful ideas and materials.',
      images: [
        '/pixel/arec/pic (2).png',
        '/pixel/arec/pic (1).png',
        '/pixel/arec/pic (3).png',
        '/pixel/arec/pic (6).png',
      ],
    },

    {
      title: 'Aldar Eastern Mangrooves',
      place: 'Abu Dhabi, UAE',
      description:
        'A comprehensive community development project integrating design innovation and elevated user experience.',
      images: [
        '/pixel/eastern/pic (1).png',
        '/pixel/eastern/pic (3).png',
        '/pixel/eastern/pic (5).png',
        '/pixel/eastern/pic (6).png',
        '/pixel/eastern/pic (8).png',
        '/pixel/eastern/pic (10).png',
        '/pixel/eastern/pic (11).png',
        '/pixel/eastern/pic (12).png',
      ],
    },

    {
      title: 'Gadgets Showroom',
      place: 'Dubai, UAE',
      description:
        'A large-scale tech retail layout designed for accessibility, product visibility, and improved customer flow.',
      images: [
        '/pixel/gadgets/pic (1).png',
        '/pixel/gadgets/pic (2).png',
        '/pixel/gadgets/pic (4).png',
        '/pixel/gadgets/pic (6).png',
        '/pixel/gadgets/pic (7).png',
      ],
    },

    {
      title: 'Al Futtaim HR Office',
      place: 'Dubai, UAE',
      description:
        'A modern HR office designed using AI-assisted planning for optimal flow, visibility, and material harmony.',
      images: [
        '/pixel/hr-office/pic1.png',
        '/pixel/hr-office/pic2.jpeg',
        '/pixel/hr-office/pic3.jpeg',
        '/pixel/hr-office/pic4.jpg',
        '/pixel/hr-office/pic (5).png',
      ],
    },

    {
      title: 'Jeep Showroom',
      place: 'Dubai, UAE',
      description:
        'A rugged, nature-inspired design reflecting Jeepƒ?Ts adventurous DNA through textures and sculptural elements.',
      images: [
        '/pixel/jeep/pic (1).png',
        '/pixel/jeep/pic (5).png',
        '/pixel/jeep/pic (4).png',
        '/pixel/jeep/pic (1).jpg',
        '/pixel/jeep/pic (2).jpg',
        '/pixel/jeep/pic (2).png',
      ],
    },

    {
      title: 'Khunji Store',
      place: 'Dubai, UAE',
      description:
        'A serene retail space guided by Wabi-Sabi principles, using minimalism and warm lighting to highlight the products.',
      images: [
        '/pixel/khunji/pic (1).png',
        '/pixel/khunji/pic (2).png',
        '/pixel/khunji/pic (4).png',
        '/pixel/khunji/pic (6).png',
        '/pixel/khunji/pic (7).png',
      ],
    },

    {
      title: 'Obriens',
      place: 'Dubai Airport, UAE',
      description:
        'A food court dining concept designed with strategic seating flow, subtle lighting, and travel-friendly comfort.',
      images: [
        '/pixel/obriens/pic (1).png',
        '/pixel/obriens/pic (2).png',
        '/pixel/obriens/pic (5).png',
        '/pixel/obriens/pic (6).png',
        '/pixel/obriens/pic (7).png',
      ],
    },

    {
      title: 'Roberto Cavalli Store',
      place: 'Italy',
      description:
        'A bold interior using heavy textures and luxurious finishes to reflect Roberto Cavalliƒ?Ts iconic design language.',
      images: [
        '/pixel/roberto/pic (1).png',
        '/pixel/roberto/pic (2).png',
        '/pixel/roberto/pic (3).png',
        '/pixel/roberto/pic (4).png',
        '/pixel/roberto/pic (5).png',
      ],
    },

    {
      title: 'Taste of India',
      place: 'Dubai, UAE',
      description:
        'A fine dining space with a dark, intimate theme featuring Indian cultural accents and warm, focused lighting.',
      images: [
        '/pixel/toi/pic (1).png',
        '/pixel/toi/pic (2).png',
        '/pixel/toi/pic (3).png',
        '/pixel/toi/pic (4).png',
        '/pixel/toi/pic (5).png',
      ],
    },

    {
      title: 'Al Futtaim Watch House',
      place: 'Dubai, UAE',
      description:
        'A luxury watch boutique designed with refined materials and an understated elegance to highlight premium timepieces.',
      images: [
        '/pixel/watch-house/pic (6).png',
        '/pixel/watch-house/pic (1).png',
        '/pixel/watch-house/pic (4).png',
        '/pixel/watch-house/pic (5).png',
        '/pixel/watch-house/pic (7).png',
      ],
    },
  ];

  return <WorkAccordion items={workDetails} />;
};

export default Pixel;
