"use client";

import React, { useMemo, useState } from 'react';

const CitiesList = () => {
  const names = [
    "Vendôme, France",
    "Riyadh, Saudi Arabia",
    "Dubai, UAE",
    "Istanbul, Turkey",
    "Lagos, Nigeria",
    "Casablanca, Morocco",
    "Dammam, Saudi Arabia",
    "Jeddah, Saudi Arabia",
    "Abu Dhabi, UAE",
    "Manama, Bahrain",
    "Baghdad, Iraq",
    "New Delhi, India",
    "Multan, Pakistan",
    "Faisalabad, Pakistan",
    "Sialkot, Pakistan",
    "Amman, Jordan",
    "Tabuk, Saudi Arabia",
    "Cairo, Egypt",
    "Tel Aviv, Israel",
    "Kalba, UAE",
    "Johannesburg, South Africa",
    "Tashkent, Uzbekistan",
    "Marrakech, Morocco",
    "Mumbai, India",
    "Hurghada, Egypt",
    "Atyrau, Kazakhstan",
    "Mombasa, Kenya",
    "Abuja, Nigeria",
    "Benghazi, Libya",
    "Jubail, Saudi Arabia",
    "Baku, Azerbaijan",
    "Luanda, Angola",
    "Frankfurt, Germany",
    "Oskemen, Kazakhstan",
    "Ho Chi Minh City, Vietnam",
    "Doha, Qatar",
    "Maribor, Slovenia",
    "Muscat, Oman",
    "Lisbon, Portugal",
    "Leccio, Italy"
  ];

  const marqueeList = useMemo(() => [...names, ...names], [names]);

  return (
    <section className="corner-plus mt-14">
      <div className="flex items-baseline justify-between">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Places <span className="heading-em">touched</span> down
        </h2>
        <span className="text-xs text-neutral-500">Updated May 2023</span>
      </div>

      <div className="mt-6 bg-black/30 px-2 py-3 marquee-mask">
        <div className="marquee">
          {marqueeList.map((city, idx) => (
            <span
              key={`${city}-${idx}`}
              className="text-sm text-neutral-100 whitespace-nowrap"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesList;
