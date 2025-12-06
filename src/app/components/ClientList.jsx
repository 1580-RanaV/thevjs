"use client";

import React, { useMemo, useState } from 'react';

const ClientList = () => {
  const names = [
    "Adidas",
    "HUGO BOSS",
    "BOSS",
    "HUGO",
    "Seiko",
    "Cartier",
    "Aldar",
    "Al Futtaim",
    "Rolex",
    "Marks & Spencer",
    "K & N",
    "Al Habtoor Motors",
    "Blue",
    "Zeal",
    "Watches & More",
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

  const marqueeList = useMemo(() => [...names, ...names], [names]);

  return (
    <section className="corner-plus mt-16">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        Clients who left <span className="heading-em">smiling</span>
      </h2>
      <div className="mt-6 bg-black/30 px-3 py-4 marquee-mask">
        <div className="marquee">
          {marqueeList.map((client, idx) => (
            <span
              key={`${client}-${idx}`}
              className="text-sm text-neutral-100 whitespace-nowrap"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientList;
