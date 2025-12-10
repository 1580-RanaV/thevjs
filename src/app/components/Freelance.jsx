'use client';

import React from 'react';
import WorkAccordion from './WorkAccordion';

const Freelance = () => {
  const workDetails = [
    {
      title: 'Mr. Jayaraju Duplex',
      place: 'Hyderabad, India',
      description:
        'This duplex proposal in Hyderabad, designed for a family of 4-6 members, includes a formal living room, kitchen, dining area, three bedrooms, and a family living area. A cozy family sit-out lawn with landscaping and a distinctive striped elevation feature create a warm, inviting environment that fosters family togetherness while balancing functionality and aesthetics.',
      images: [
        '/buildnext/img1.jpg',
        '/buildnext/img2.jpg',
        '/buildnext/img3.jpg',
        '/buildnext/img4.jpg',
        '/buildnext/img5.jpg',
      ],
    },
    {
      title: 'Dr. Prakash Villa',
      place: 'Hyderabad, India',
      description:
        'This large-scale proposal in Hyderabad, designed for a family of 7-8 members, includes a formal living room, kitchen, dining area, five bedrooms, a family living area, and a gym. A key feature is the exterior family deck with landscaped stairs leading to the main entrance. The design also addresses the challenge of raising the plinth level to 7-9 feet, requiring careful planning and execution.',
      images: [
        '/buildnext/img6.jpg',
        '/buildnext/img7.jpg',
        '/buildnext/img8.jpg',
        '/buildnext/img9.jpg',
        '/buildnext/img10.jpg',
      ],
    },
    {
      title: 'Mr. Suman Villa',
      place: 'Hyderabad, India',
      description:
        'This modern villa proposal in Hyderabad, designed for a family of 5-6 members, embraces innovative design with a dynamic play of levels. Skylights above the internal staircase enhance visual interest and natural light, reflecting the clientƒ?Ts encouragement of creative experimentation in the design.',
      images: [
        '/buildnext/3-1.jpg',
        '/buildnext/3-4.jpg',
        '/buildnext/3-6.jpg',
        '/buildnext/3-7.jpg',
        '/buildnext/3-8.jpg',
        '/buildnext/3-9.jpg',
      ],
    },
    {
      title: 'Buildnext Experience Store',
      place: 'Vizag, India',
      description:
        'I designed the office and experience store for Buildnext in Vizag, aligning with the companyƒ?Ts goal to expand into central India. The design features a simple, crisp office space that blends functionality with aesthetics, creating an inviting and customer-centric environment.',
      images: [
        '/buildnext/4-1.jpg',
        '/buildnext/4-2.jpg',
        '/buildnext/4-3.jpg',
        '/buildnext/4-4.jpg',
        '/buildnext/4-5.jpg',
      ],
    },
    {
      title: 'Mr. Srikanth Villa',
      place: 'Vizag, India',
      description:
        'The client requested a residence with three bedrooms, a simple kitchen, and separate living and dining areas. The challenge was the small trapezoidal plot, requiring innovative design solutions to efficiently configure the spaces while incorporating small yet impactful design features.',
      images: [
        '/buildnext/5-1.jpg',
        '/buildnext/5-2.jpg',
        '/buildnext/5-3.jpg',
        '/buildnext/5-4.jpg',
      ],
    },
    {
      title: 'Mr. Faiz Commercial',
      place: 'Hyderabad, India',
      description:
        'The commercial building is designed to house a co-working space for small and medium-sized offices, featuring the latest support technology and services to enhance the working environment and provide efficiency for its users.',
      images: [
        '/buildnext/6-1.jpg',
        '/buildnext/6-2.jpg',
        '/buildnext/6-5.jpg',
        '/buildnext/6-4.jpg',
        '/buildnext/6-6.jpg',
      ],
    },
    {
      title: 'Mr. Raja Villa',
      place: 'Hyderabad, India',
      description:
        'The modern villa design emphasizes openness and a strong connection to nature, starting with the living areas on the first floor and extending vertically. It blends raw, modern Indian materials with Western influences, creating a unique and cohesive aesthetic.',
      images: [
        '/buildnext/7-2.jpg',
        '/buildnext/7-3.jpg',
        '/buildnext/7-4.jpg',
        '/buildnext/7-6.jpg',
        '/buildnext/7-7.jpg',
      ],
    },
  ];

  return <WorkAccordion items={workDetails} />;
};

export default Freelance;
