"use client";

import React from 'react';
import WorkAccordion from './WorkAccordion';

const workDetails = [
    {
      title: 'BOSS Fashion Avennue Flagship Store',
      place: 'Dubai Mall, Dubai, UAE',
      description: 'Flagship BOSS Fashion Avenue in Dubai Mall with flowing facade and tailored luxury zones.',
      images: [
        '/high/01/01-min.jpg',
        '/high/01/02-min.jpg',
        '/high/01/03-min.jpg',
        '/high/01/04-min.jpg',
        '/high/01/05-min.jpg',
        '/high/01/06-min.jpg',
        '/high/01/07-min.jpg',
        '/high/01/08-min.jpg',
        '/high/01/09-min.jpg',
        '/high/01/10-min.jpg',
        '/high/01/11-min.jpg',
        '/high/01/12-min.jpg',
      ],
    },
    {
      title: 'BOSS Pop-up Concept Store',
      place: 'Concept Design',
      description: 'Pop-up concept exploring bold perforated screening and compact merchandising for BOSS.',
      images: [
        '/high/boss-popup/01-min.jpg',
        '/high/boss-popup/02-min.jpg',
        '/high/boss-popup/03-min.jpg',
        '/high/boss-popup/04-min.jpg',
        '/high/boss-popup/05-min.jpg',
      ],
    },
    {
      title: 'Rolex / Tudor / Catier Boutique',
      place: 'Mall of Oman, Oman',
      description: 'Boutique concept blending Rolex, Tudor, and Cartier cues for Mall of Oman shoppers.',
      images: [
        '/high/rolex/01-min.png',
        '/high/rolex/02-min.png',
        '/high/rolex/03-min.png',
        '/high/rolex/04-min.png',
        '/high/rolex/05-min.png',
      ],
    },
    {
      title: 'Roberto Cavalli',
      place: 'Leccio, Italy',
      description: 'Roberto Cavalli vision in Leccio with rich textures, sculpted forms, and couture detailing.',
      images: [
        '/high/roberto/01-min.png',
        '/high/roberto/02-min.png',
        '/high/roberto/03-min.png',
        '/high/roberto/04-min.png',
        '/high/roberto/05-min.png',
      ],
    },
    {
      title: 'BOSS Maribor',
      place: 'Maribor, Slovenia',
      description: 'Store refresh for BOSS Maribor with clean lines and warm contemporary detailing.',
      images: [
        '/high/maribor/01-min.png',
        '/high/maribor/02-min.png',
        '/high/maribor/03-min.png',
        '/high/maribor/04-min.png',
        '/high/maribor/05-min.png',
        '/high/maribor/06-min.png',
      ],
    },
    {
      title: 'HUGO x REPLAY Airport Pop-up',
      place: 'Doha, Qatar',
      description: 'HUGO x REPLAY shop-in-shop for Doha with industrial palette and denim-led highlights.',
      images: [
        '/high/replay/01-min.png',
        '/high/replay/02-min.png',
        '/high/replay/03-min.png',
        '/high/replay/04-min.png',
        '/high/replay/05-min.png',
      ],
    },
    {
      title: 'Cartier Experience Center',
      place: 'Istanbul, Turkey',
      description: 'Cartier Experience Center in Istanbul designed as a refined, immersive showcase.',
      images: [
        '/high/cartier/01-min.png',
        '/high/cartier/02-min.png',
        '/high/cartier/03-min.png',
      ],
    },
    {
      title: 'JEEP Rennovation Concept',
      place: 'Dubai, UAE',
      description: 'Jeep renovation concept in Dubai with rugged materials and a confident graphic facade.',
      images: [
        '/high/jeep/03-min.png',
        '/high/jeep/04-min.png',
        '/high/jeep/05-min.png',
        '/high/jeep/06-min.png',
      ],
    },
    {
      title: 'HUGO',
      place: 'Mall of the Emirates, Dubai, UAE',
      description: 'HUGO boutique at Mall of the Emirates pairing sharp tailoring with energetic accents.',
      images: [
        '/high/hugo-moe/01.png',
        '/high/hugo-moe/02.png',
        '/high/hugo-moe/03.png',
      ],
    },
    {
      title: 'BOSS Bodywear',
      place: 'Behrain City Center, Bahrain',
      description: 'Bodywear boutique in Bahrain with streamlined circulation and comfortable premium feel.',
      images: [
        '/high/bodywear/01.png',
        '/high/bodywear/02.png',
        '/high/bodywear/03.png',
        '/high/bodywear/04.png',
        '/high/bodywear/05.png',
      ],
    },
  ];

const High = () => <WorkAccordion items={workDetails} />;

export default High;
