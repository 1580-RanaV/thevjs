import React, { useState } from 'react';
import Image from 'next/image';

const Adidas = () => {
  const [openWork, setOpenWork] = useState(null);

  const workDetails = [
    {
      title: 'adidas halo',
      place:'dezingoff, israel',
      description: 'For the Adidas Halo flagship store in Israel, I designed the first flagship location in the country, featuring an expansive floor plate to accommodate diverse store segments. A key aspect of the design was the creation of distinct, engaging zones, including dedicated areas for womens apparel, football gear, Originals, and more. I placed significant emphasis on the spatial aesthetics and functionality of these zones to enhance the stores overall atmosphere. The façades dynamic curvature plays a pivotal role, as it presents a striking and continuous view of the store from the road, effectively drawing attention and showcasing the brands identity.',
      images: [
        '/adidas/dezingoff/d-1.jpg',
        '/adidas/dezingoff/d-2.jpg',
        '/adidas/dezingoff/d-3.jpg',
        '/adidas/dezingoff/d-4.jpg',
        '/adidas/dezingoff/d-5.jpg',
        '/adidas/dezingoff/d-6.jpg',
        '/adidas/dezingoff/d-7.jpg',
        '/adidas/dezingoff/pic (11).png',
      ],
    },

    {
        title: 'adidias popup, terminal 1',
        place:'dubai airport, dubai, uae',
        description: 'For the Adidas pop-up store at Dubai Airport Terminal A, I designed a compact, striking space with a perforated screen façade that captures attention and creates a dynamic experience, drawing travelers into the store amidst the busy terminal.',
        images: [
          '/adidas/airport/pic (2).png',
          '/adidas/airport/pic (1).png',
          '/adidas/airport/pic (3).png',
          '/adidas/airport/pic (4).png',
          '/adidas/airport/pic (5).png',
        ],
      },

    {
    title: 'adidas hos',
    place:'cape town, south africa',
    description: 'At Cape Towns Canal Walk Mall, I developed one of the first Home of Sport (HOS) concepts in the country, focusing on an accessible, intriguing design with a seamless façade integration. By optimizing layout and incorporating innovative elements, I created a unique, immersive space that enhances the overall shopping experience while showcasing the HOS brand.',
    images: [
        '/adidas/canalwalk/ct-1.jpg',
        '/adidas/canalwalk/ct-2.jpeg',
        '/adidas/canalwalk/ct-3.jpeg',
        '/adidas/canalwalk/ct-4.jpg',
        '/adidas/canalwalk/ct-5.jpg',
        '/adidas/canalwalk/ct-6.jpeg',
    ],
    },

    {
        title: 'adidas head office',
        place:'dubai design district, dubai, uae',
        description: 'For the Adidas MENA headquarters redesign, I revamped two floors by blending traditional and modern elements, integrating regional art, optimizing lighting, and utilizing unused spaces to create a functional, engaging, and locally reflective workspace.',
        images: [
            '/adidas/d3/pic (1).png',
            '/adidas/d3/pic (2).png',
            '/adidas/d3/pic (3).png',
            '/adidas/d3/pic (6).png',
            '/adidas/d3/pic (4).png',
    ],
    },

    {
        title: 'adidas pulse fo',
        place:'dubai outlet village, dubai, uae',
        description: 'The Pulse Factory Outlet, the largest store of its kind in the region, is located in Dubai Outlet Village. I creatively adapted the design to harmonize with the existing elevation, reimagining the façade to enhance visual appeal while maintaining coherence with the surrounding environment, resulting in a striking and cohesive presence.',
        images: [
            '/adidas/fopulse/pic (1).png',
            '/adidas/fopulse/pic (2).png',
            '/adidas/fopulse/pic (5).png',
            '/adidas/fopulse/pic (6).png',
            '/adidas/fopulse/pic (7).png',
    ],
    },

    {
        title: 'adidas kids flagship store',
        place:'dubai mall, dubai, uae',
        description: 'The Kids Store Concept, the first flagship store for children in the region, uses a vibrant material palette to reflect its playful audience. The design features a dynamic, parametric cash desk backwall, developed with architect Arturo Tedeschi, adding architectural depth and enhancing the customer experience.',
        images: [
            '/adidas/kidsdm/pic (1).png',
            '/adidas/kidsdm/pic (2).png',
            '/adidas/kidsdm/pic (3).png',
            '/adidas/kidsdm/pic (4).png',
    ],
    },

    {
        title: 'adidas makerlab',
        place:'dubai mall, dubai, uae',
        description: 'For the Customization Zone in the Maker Lab, I designed bespoke furniture to enhance the customer experience. The space allows patrons to interact with artists while personalizing items, with the furniture crafted to facilitate seamless interactions and reflect the zones creative nature, creating a memorable experience for visitors.',
        images: [
            '/adidas/makerlab/pic (1).png',
            '/adidas/makerlab/pic (3).png',
            '/adidas/makerlab/pic (2).png',
            '/adidas/makerlab/pic (6).png',
            '/adidas/makerlab/pic (8).png',
            '/adidas/makerlab/pic (7).png',
    ],
    },

    {
        title: 'adidas flagship store',
        place:'marina bay sands, singapore',
        description: 'The Home of Sport flagship store at Marina Bay Sands features a striking design with a curving façade and a central column transformed into an art element. This design draws attention while optimizing space with a footwear trial area, enhancing the stores appeal and the overall shopping experience.',
        images: [
            '/adidas/marina/pic (2).png',
            '/adidas/marina/pic (1).png',
            '/adidas/marina/pic (3).png',
            '/adidas/marina/pic (5).png',
            '/adidas/marina/pic (6).png',
            '/adidas/marina/pic (9).png',
    ],
    },

    {
        title: 'adidas originals',
        place:'mall of the emirates, dubai, uae',
        description: 'The Originals Concept store, the first of its kind in the UAE and the Middle East, features a design inspired by the brands guidelines and regional sand dunes. The contour art, displayed on the back of the footwear walls and enhanced with cove lighting, highlights the intricate dune formations I personally drafted from sketches to the final model, bringing the design element to life.',
        images: [
            '/adidas/ocs/pic (1).png',
            '/adidas/ocs/pic (3).png',
            '/adidas/ocs/pic (4).png',
            '/adidas/ocs/pic (5).png',
            '/adidas/ocs/pic (7).png',
    ],
    },

    {
        title: 'adidas originals flagship',
        place: 'dubai mall, Dubai, uae',
        description: 'The Originals Concept store at Dubai Mall is one of the largest flagship stores globally and the first of its kind. I revamped the customer activation zones, designing engaging areas that reflect the brands identity and enhance the immersive shopping experience, aligning with the stores prestigious status and innovative offerings.',
        images: [
            '/adidas/ofsdm/pic (1).png',
            '/adidas/ofsdm/pic (2).png',
            '/adidas/ofsdm/pic (4).png',
            '/adidas/ofsdm/pic (3).png',
            '/adidas/ofsdm/pic (5).png',
    ],
    },
  ];

  const toggleWork = (index) => {
    setOpenWork(openWork === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {workDetails.map((work, index) => (
        <div 
        onClick={() => toggleWork(index)}
        key={index}
        className="border-b pb-4 border-neutral-800 hover:cursor-pointer">
          {/* Project Title */}
          <div className=''>
          <h1
            onClick={() => toggleWork(index)}
            className="font-semibold uppercase cursor-pointer py-1 hover:text-neutral-500 transition-colors"
          >
            {work.title}
          </h1>
          <span 
          onClick={() => toggleWork(index)}
          className="block text-sm font-semibold uppercase text-neutral-500 cursor-pointer hover:text-neutral-500 transition-colors">
            {work.place}
          </span>
          </div>

          {/* Project Details */}
          {openWork === index && (
            <div className="pt-6 pb-6 transition-all duration-300 ease-in-out">
              {/* Project Description */}
              <p className="text-neutral-200 text-justify font-regular mb-6">{work.description}</p>

              {/* Project Images */}
              { <div className="space-y-4">
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
              </div> }

            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Adidas;