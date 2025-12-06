import React from 'react'
import ExperienceEntry from './ExperienceEntry'

const Journey = () => {
  return (
    <div>
        <section className="mt-16 corner-plus">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Learn, <span className="heading-em">evolve</span>, repeat.
            </h2>
            <p className='mt-4 text-neutral-200 leading-relaxed'>
              350+ projects across architecture, urban planning, interiors, and retail. I lead with clarity,
              guide teams, and keep brands centered as spaces move from sketch to site.
            </p>
            <ExperienceEntry
              company="Al Tayer Insignia L.L.C"
              location="Dubai, UAE"
              position="Senior Retail Designer"
            />
            <ExperienceEntry
              company="Pixel5 Design Studio"
              location="Dubai, UAE"
              position="Design Manager - Design Development"
            />
            <ExperienceEntry
              company="BuildNext Studios"
              location="Bangalore, India"
              position="Lead Architect"
            />
            <ExperienceEntry
              company="RR Associates"
              location="Hyderabad, India"
              position="Interior Designer"
            />
          </section>
    </div>
  )
}

export default Journey
