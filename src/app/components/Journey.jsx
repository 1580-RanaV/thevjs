import React from 'react'
import ExperienceEntry from './ExperienceEntry'

const Journey = () => {
  return (
    <div>
        <section className="mt-16">
            <h2 className="font-semibold text-5xl md:text-5xl uppercase">
              learn. <span className='text-green-400'>evolve.</span> Journey.
            </h2>
            <p className='text-lg font-regular mt-4 md:mt-6 text-justify leading-relaxed'>
            With extensive experience spanning various sectors including architecture, urban planning, interiors, and retail design, I have worked on over 350 projects, delivering innovative and impactful solutions. My expertise includes managing diverse teams, developing design concepts, and executing customer-centric spaces that enhance brand identity. Throughout my career, I have taken on key roles in design coordination and project management, ensuring seamless collaboration across disciplines and contributing to the successful realization of both small and large-scale projects.
            </p>
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