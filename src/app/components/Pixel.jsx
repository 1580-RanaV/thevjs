import React, { useState } from 'react';
import Image from 'next/image';
const Freelance = () => {
  const [openWork, setOpenWork] = useState(null);

  const workDetails = [
    {
      title: 'aldar headquarters, dubai',
      description: 'For the Aldar HQ building in Abu Dhabi, I developed a simple yet impactful design that utilizes circles and overlapping forms to create a dynamic landscape. The design takes full advantage of the natural context, introducing elements that captivate and engage users of the space. By incorporating innovative materials and design sources, the project aims to upscale the landscape and redefine the area with a modern aesthetic. The circular motifs and overlaps not only enhance visual interest but also foster a sense of fluidity and harmony within the space. This approach ensures that the landscape complements the architectural integrity of the headquarters while offering a sophisticated and inviting environment for all who experience it.',
      images: [
        '/pixel/aldar/pic1.PNG',
        '/pixel/aldar/pic6.PNG',
        '/pixel/aldar/pic2.PNG',
        '/pixel/aldar/pic3.png',
        '/pixel/aldar/pic4.PNG',
        '/pixel/aldar/pic5.PNG',
      ],
    },

    {
        title: 'aldar al rayanna',
        description: 'For the prestigious Aldar Group in Abu Dhabi, I led a community development project that included comprehensive design and planning for the entire neighborhood. The project involved implementing innovative approaches to enhance the user experience and creating a holistic development strategy for the housing zones. By focusing on integrating modern design principles with community needs, the project aimed to foster a vibrant and cohesive living environment. This approach ensured that every aspect of the development—from layout to amenities—was thoughtfully designed to promote a high quality of life and a strong sense of community.',
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
        title: 'al futtaim rental experience centre, dubai',
        description: 'The experience center design embraces minimalism, enhancing customer engagement with thoughtful ideas and materials. Clean lines, open spaces, and a neutral palette create a serene environment, while natural materials add warmth. The layout ensures seamless flow, with functional elements and subtle technology integration that complement the minimalist aesthetic.',
        images: [
          '/pixel/arec/pic (2).png',
          '/pixel/arec/pic (1).png',
          '/pixel/arec/pic (3).png',
          '/pixel/arec/pic (6).png',
        ],
    },

    {
        title: 'aldar eastern mangrooves, abu dhabi',
        description: 'For the prestigious Aldar Group in Abu Dhabi, I led a comprehensive community development project that focused on overall design and planning. The project employed innovative approaches to enhance user experience, integrating modern design principles with a holistic development strategy for the housing zones. By considering various aspects of community living and incorporating cutting-edge design solutions, the project aimed to create a cohesive and vibrant environment. The result is a thoughtfully developed community that fosters a high quality of life and supports the dynamic needs of its residents.',
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
        title: 'gadgets showroom',
        description: 'For the large-scale tech store in Mall of Oman, I led a retail design project focusing on space optimization, creating an engaging layout that enhances accessibility and improves the shopping experience.',
        images: [
          '/pixel/gadgets/pic (1).png',
          '/pixel/gadgets/pic (2).png',
          '/pixel/gadgets/pic (4).png',
          '/pixel/gadgets/pic (6).png',
          '/pixel/gadgets/pic (7).png',
        ],
    },

    {
        title: 'al futtaim hr office, dubai',
        description: 'The Al Futtaim HR Office project began with in-depth research and consultations to understand the clients vision and requirements. By utilizing AI technology, we optimized space movement and visibility, simulating various layouts to enhance flow and spatial awareness. A comprehensive SWOT analysis informed the design strategy, addressing key areas for improvement and guiding the creation of a calculated design structure that maximized the spaces potential while overcoming limitations. Modern materials and methods were selected for their durability, sustainability, and visual appeal, incorporating the latest advancements in interior design. The thoughtful curation of color combinations and material choices contributed to a harmonious and inviting environment. The project successfully transformed the space into a visually stunning and functional office, reflecting the clients unique personality and needs through the integration of AI and modern design principles.',
        images: [
          '/pixel/hr-office/pic1.png',
          '/pixel/hr-office/pic2.jpeg',
          '/pixel/hr-office/pic3.jpeg',
          '/pixel/hr-office/pic4.jpg',
          '/pixel/hr-office/pic (5).png',
        ],
    },

    {
        title: 'jeep showroom',
        description: 'The Jeep showroom in Dubai reflects the brans rugged spirit, using nature-inspired materials and wood wave patterns to evoke the desert landscape. The design blends modern aesthetics with Jeep adventurous essence, creating a dynamic space that showcases vehicles while immersing customers in the brands identity.',
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
        title: 'khunji store',
        description: 'For the Abhaya store, I integrated Wabi Sabi aesthetics to create a serene environment with accent-lit niches showcasing products and furniture that blend natural beauty with simplicity, offering an elegant and tranquil shopping experience.',
        images: [
          '/pixel/khunji/pic (1).png',
          '/pixel/khunji/pic (2).png',
          '/pixel/khunji/pic (4).png',
          '/pixel/khunji/pic (6).png',
          '/pixel/khunji/pic (7).png',
        ],
    },

    {
        title: 'obriens, dubai airport',
        description: 'For the Dubai Airport Terminal 1 food court, I prioritized optimal spatial arrangement with diverse seating options, minimal lighting details, and subtle color schemes, creating an inviting ambiance that enhances the dining experience in a busy airport setting.',
        images: [
          '/pixel/obriens/pic (1).png',
          '/pixel/obriens/pic (2).png',
          '/pixel/obriens/pic (5).png',
          '/pixel/obriens/pic (6).png',
          '/pixel/obriens/pic (7).png',
        ],
    },

    {
        title: 'roberto cavalli store, italy',
        description: 'For the mid-scale Roberto Cavalli retail store located in Italy, I adhered closely to the brand guidelines and motifs to create a design that resonates with customers. The store features bold and impactful aesthetics, achieved through the use of substantial, heavy-looking furniture and sophisticated wall finishes. The choice of materials was carefully selected to enhance the stores dramatic and luxurious outlook, reflecting the brand’s opulent style. This design approach ensures a striking and memorable shopping environment that aligns with Roberto Cavallis iconic image and appeals to its discerning clientele.',
        images: [
          '/pixel/roberto/pic (1).png',
          '/pixel/roberto/pic (2).png',
          '/pixel/roberto/pic (3).png',
          '/pixel/roberto/pic (4).png',
          '/pixel/roberto/pic (5).png',
        ],
    },

    {
        title: 'taste of india',
        description: 'For the fine dining Indian cuisine restaurant in Portugal, I crafted a design that emphasizes meticulous attention to detail across all key aspects. The use of a dark theme throughout the space enhances the fine dining experience by creating a rich and intimate atmosphere. Accent lighting highlights the dining areas, while artfully placed feature items—such as portraits, traditional jars, and other culturally resonant elements—reinforce the restaurants Indian roots. This thoughtful design approach not only enriches the dining experience but also provides a visually captivating and immersive environment that celebrates Indian heritage.',
        images: [
          '/pixel/toi/pic (1).png',
          '/pixel/toi/pic (2).png',
          '/pixel/toi/pic (3).png',
          '/pixel/toi/pic (4).png',
          '/pixel/toi/pic (5).png',
        ],
    },

    {
        title: 'al futtaim watch house, dubai',
        description: 'The authentic watch store, a unit by Al Futtaim Group, is designed to offer a luxurious and refined shopping experience. The design emphasizes simplicity and elegance, creating a space that exudes sophistication. By incorporating natural and rich materials, the store achieves a timeless and high-end feel that enhances the customers purchasing journey. The understated design approach ensures that the focus remains on the luxury watches while providing a seamless and immersive environment for discerning customers.',
        images: [
          '/pixel/watch-house/pic (6).png',
          '/pixel/watch-house/pic (1).png',
          '/pixel/watch-house/pic (4).png',
          '/pixel/watch-house/pic (5).png',
          '/pixel/watch-house/pic (7).png',
        ],
    },
  ];

  const toggleWork = (index) => {
    setOpenWork(openWork === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {workDetails.map((work, index) => (
        <div key={index} className="border-b border-neutral-800">
          {/* Project Title */}
          <h1
            onClick={() => toggleWork(index)}
            className="font-semibold uppercase cursor-pointer py-4 hover:text-neutral-500 transition-colors"
          >
            {work.title}
          </h1>

          {/* Project Details */}
          {openWork === index && (
            <div className="pb-8 transition-all duration-300 ease-in-out">
              {/* Project Description */}
              <p className="text-neutral-200 font-regular mb-6">{work.description}</p>

              {/* Project Images */}
              <div className="space-y-4">
                {work.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="w-full h-full bg-neutral-900 overflow-hidden rounded-lg"
                  >
                    <Image
                      src={image}
                      layout="responsive" 
                      width={100} 
                      height={900}
                      alt={`${work.title} - Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Freelance;
