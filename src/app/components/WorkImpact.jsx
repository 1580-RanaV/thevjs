import React from 'react'
import Image from 'next/image'

const WorkImpact = () => {
  return (
    <section className="mt-16">
            <h2 className="font-semibold text-5xl md:text-5xl uppercase">
              Work. <span className='text-green-400'>iMPACT.</span> Awards.
            </h2>
            <p className='text-lg font-regular mt-4 md:mt-6 text-justify leading-relaxed'>
              My work has consistently garnered recognition in the architectural community, with accolades such as the <span className='font-medium italic'>Commercial Project of the Year</span> and <span className='font-medium italic'>Retail Interior Design of the Year</span> highlighting my commitment to innovation and excellence. I was also honored at the <span className='font-medium italic'>Design Middle East - Architecture Leaders Awards 2023</span> and received special mentions at prestigious events like the <span className='font-medium italic'>NASA Louis I. Khan Trophy</span> and the <span className='font-medium italic'>HUDCO Trophy</span>. Additionally, Ive contributed to major architectural events, including serving as the Organizing Committee Head for <span className='font-medium italic'>Archcult</span> and holding leadership roles in <span className='font-medium italic'>NASA</span> events at NIT Trichy. These milestones reflect my dedication to pushing creative boundaries and shaping the future of architecture.
            </p>
            <div className='mt-12 bg-neutral-900 overflow-hidden rounded-lg'>
            <Image
              src="/awards/award1.png"
              alt="Award for Commercial Project of the Year"
              layout="responsive"
              width={100}
              height={800}
              className='rounded-lg object-cover transition-transform duration-500 hover:scale-105'
            />
            </div>
          </section>
  )
}

export default WorkImpact