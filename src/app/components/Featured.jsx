"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    title: "SNKRDUNK Magazine",
    subtitle: "adidas Marina Bay Sands, Singapore · Apr 2, 2025",
    summary:
      "Reopening coverage for a 4,000 sq.ft. concept store that blends premium design, cultural storytelling, and exclusive collaborations.",
    href: "https://snkrdunk.com/en/magazine/2025/03/28/adidas-marina-bay-sands-singapore-store-reopen-april-2025/",
    image: "/featured/image1.png",
  },
  {
    title: "GZ Magazine (GENZ MAG)",
    subtitle: "adidas Marina Bay Sands, Singapore · Apr 4, 2025",
    summary:
      "Feature on the Marina Bay Sands launch - runway energy, collabs, and Baremetalco's \"Steel in Bloom\" holding court at the cultural hub.",
    href: "https://genz-mag.com/adidas-marina-bay-sands-launch/fashion/",
    image: "/featured/image3.png",
  },
  {
    title: "SNKRDUNK Magazine",
    subtitle: "adidas Marina Bay Sands, Singapore · Apr 4, 2025",
    summary:
      "Grand opening story: fashion runways, live performances, and bespoke artistry to launch a sport-inspired luxury destination.",
    href: "https://snkrdunk.com/en/magazine/2025/04/04/adidas-singapore-celebrates-grand-opening-of-new-marina-bay-sands-store/",
    image: "/featured/image2.png",
  },
  {
    title: "Checkland Kindleysides",
    subtitle: "adidas Originals Dubai Mall, UAE",
    summary:
      "Flagship profiled for its cultural energy and exclusive drops - now the go-to destination for Originals in the region.",
    href: "https://checklandkindleysides.com/our-work/adidas-originals-flagship-store-design-dubai-mall",
    image: "/featured/image4.png",
  },
];

const Featured = () => {
  return (
    <div>
      <section className="mt-16 corner-plus">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Noted, <span className="heading-em">featured</span>, honored.
        </h2>
        <p className="mt-4 md:mt-6 text-neutral-200 leading-relaxed">
          Recent press highlights - each story captures the craft, collaboration, and cultural weight behind these builds.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10">
          {features.map((item) => (
            <article
              key={item.href}
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 overflow-hidden"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
              <div className="px-5 py-5 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-500">{item.subtitle}</p>
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {item.summary}
                </p>
                <div className="flex justify-start">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Read article
                    <span aria-hidden="true" className="text-neutral-700">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Featured;
