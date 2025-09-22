import React from 'react'
import ExperienceEntry from './ExperienceEntry'
import Image from 'next/image'

const Featured = () => {
  return (
    <div>
      <section className="mt-16">
        <h2 className="font-semibold text-5xl md:text-5xl uppercase">
          noted. <span className="text-green-400">featured. </span>honored.
        </h2>
        <p className="font-regular mt-4 md:mt-6 text-justify leading-relaxed">
          My work has been featured across international design and lifestyle
          platforms, celebrating the creative impact of my retail collaborations.
          Highlights include SNKRDUNK Magazine covering the adidas Marina Bay Sands
          launch in Singapore, Gen Z Mag spotlighting the same project’s cultural
          influence, and Checkland Kindleysides showcasing the adidas Originals
          Flagship Store at Dubai Mall.
        </p>

        {/* SNKRDUNK (Article 1) */}
        <a
          href="https://snkrdunk.com/en/magazine/2025/03/28/adidas-marina-bay-sands-singapore-store-reopen-april-2025/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 block bg-neutral-900 overflow-hidden rounded-lg"
        >
          <Image
            src="/featured/image1.png"
            alt="SNKRDUNK Marina Bay Sands Reopening"
            width={1200}
            height={800}
            className="rounded-lg object-cover transition-transform duration-500 hover:scale-105"
          />
        </a>
        <ExperienceEntry
          company="SNKRDUNK Magazine"
          location="adidas Marina Bay Sands, Singapore"
          position="Featured in the reopening of adidas at Marina Bay Sands, Singapore on April 2, 2025 — a 4,000 sq.ft. concept store blending premium design, cultural storytelling, and exclusive collaborations."
        />
        <a
          href="https://snkrdunk.com/en/magazine/2025/03/28/adidas-marina-bay-sands-singapore-store-reopen-april-2025/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center rounded-full border border-neutral-700 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          Read article
        </a>

        {/* GEN Z MAG (Article 2) */}
        <a
          href="https://genz-mag.com/adidas-marina-bay-sands-launch/fashion/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 block bg-neutral-900 overflow-hidden rounded-lg"
        >
          <Image
            src="/featured/image3.png"
            alt="Gen Z Mag adidas Marina Bay Sands"
            width={1200}
            height={800}
            className="rounded-lg object-cover transition-transform duration-500 hover:scale-105"
          />
        </a>
        <ExperienceEntry
          company="GZ Magazine (GENZ MAG)"
          location="adidas Marina Bay Sands, Singapore"
          position="Featured in Gen Z Mag on April 4, 2025 for the adidas Marina Bay Sands launch in Singapore — a 4,000 sq.ft. cultural hub blending runway showcases, exclusive collaborations, and Baremetalcos “Steel in Bloom” installation."
        />
        <a
          href="https://genz-mag.com/adidas-marina-bay-sands-launch/fashion/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center rounded-full border border-neutral-700 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          Read article
        </a>

        {/* SNKRDUNK (Article 3) */}
        <a
          href="https://snkrdunk.com/en/magazine/2025/04/04/adidas-singapore-celebrates-grand-opening-of-new-marina-bay-sands-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 block bg-neutral-900 overflow-hidden rounded-lg"
        >
          <Image
            src="/featured/image2.png"
            alt="SNKRDUNK Grand Opening Celebration"
            width={1200}
            height={800}
            className="rounded-lg object-cover transition-transform duration-500 hover:scale-105"
          />
        </a>
        <ExperienceEntry
          company="SNKRDUNK Magazine"
          location="adidas Marina Bay Sands, Singapore"
          position="Featured in the grand opening celebration of adidas’ Marina Bay Sands concept store in Singapore on April 4, 2025 — an event blending fashion runways, cultural performances, and bespoke artistry to mark the launch of a new sport-inspired luxury destination."
        />
        <a
          href="https://snkrdunk.com/en/magazine/2025/04/04/adidas-singapore-celebrates-grand-opening-of-new-marina-bay-sands-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center rounded-full border border-neutral-700 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          Read article
        </a>

        {/* Checkland Kindleysides (Article 4) */}
        <a
          href="https://checklandkindleysides.com/our-work/adidas-originals-flagship-store-design-dubai-mall"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 block bg-neutral-900 overflow-hidden rounded-lg"
        >
          <Image
            src="/featured/image4.png"
            alt="Checkland Kindleysides Dubai Mall"
            width={1200}
            height={800}
            className="rounded-lg object-cover transition-transform duration-500 hover:scale-105"
          />
        </a>
        <ExperienceEntry
          company="checkland kindleysides"
          location="adidas Originals Dubai Mall, UAE"
          position="Featured in Checkland Kindleysides & GQ Middle East for the adidas Originals Dubai Mall flagship — “the go-to destination for Adidas Originals products and collabs in this region” — an elevated retail concept blending Dubai’s cultural energy with exclusive drops like the rare Blue Room experience."
        />
        <a
          href="https://checklandkindleysides.com/our-work/adidas-originals-flagship-store-design-dubai-mall"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center rounded-full border border-neutral-700 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          Read article
        </a>
      </section>
    </div>
  )
}

export default Featured
