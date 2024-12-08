'use client'
import React, { useState, useEffect } from 'react'
import NumberFlow from '@number-flow/react'
import Image from 'next/image'

const Welcome = () => {
  const [projectCount, setProjectCount] = useState(0)
  const [areaCount, setAreaCount] = useState(0)
  const [countriesCount, setCountriesCount] = useState(0)

  useEffect(() => {
    // Animate to full values when component mounts
    setProjectCount(204)
    setAreaCount(3.5)
    setCountriesCount(22)
  }, [])

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between">
        {/* Left Side Text */}
        <div className="flex flex-col space-y-3">
          <h1 className="font-semibold text-4xl uppercase">V Jaya Surya</h1>
          <span className="text-neutral-200 font-regular">Senior Retail Designer</span>
          <span className="text-neutral-200 font-regular">Pixel5</span>
          <p className="text-neutral-200 font-regular">
            Dubai, UAE
          </p>
        </div>
        
        {/* Right Side Image */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden flex-shrink-0">
          <Image 
            src="/wallpaper.jpg" 
            alt="V Jaya Surya" 
            layout="responsive" 
            width={100} 
            height={100} 
            className="w-full h-full object-cover aspect-square"
          />
        </div>
      </div>
      <p className="font-regular mt-12 text-justify leading-relaxed">
        Hello. I am V Jaya Surya, a Retail Design Manager specializing
        in concept development, blending architecture, interior design,
        and visualization to craft inspiring retail spaces.
        With expertise in retail design, landscape, and immersive
        storytelling, I create environments that elevate brand experiences.
        Explore my work to see how design transforms ideas into captivating
        spaces.
      </p>
      
      <div className="mt-20 flex justify-between">
        <div>
          <span className="font-semibold block">PROJECTS</span>
          <span className="font-bold text-5xl">
            <NumberFlow 
              value={projectCount} 
              transformTiming={{ duration: 1000, easing: 'ease-out' }}
              spinTiming={{ duration: 3000 }}
              opacityTiming={{ duration: 2000, easing: 'ease-in-out' }}
            />
          </span>
        </div>
        <div>
          <span className="font-semibold block">AREA IN SQ.FT</span>
          <span className="font-bold text-5xl">
            <NumberFlow 
              value={areaCount} 
              format={{ maximumFractionDigits: 1 }}
              transformTiming={{ duration: 1000, easing: 'ease-out' }}
              spinTiming={{ duration: 4000 }}
              opacityTiming={{ duration: 1000, easing: 'ease-in-out' }}
            />
          </span>
          <span className="font-semibold text-5xl">M</span>
        </div>
        <div>
          <span className="font-semibold block">COUNTRIES</span>
          <span className="font-bold text-5xl">
            <NumberFlow 
              value={countriesCount} 
              transformTiming={{ duration: 1000, easing: 'ease-out' }}
              spinTiming={{ duration: 3000 }}
              opacityTiming={{ duration: 2000, easing: 'ease-in-out' }}
            />
          </span>
          <span className="font-semibold text-5xl">+</span>
        </div>
      </div>
    </section>
  )
}

export default Welcome
