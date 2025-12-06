'use client'
import React, { useState, useEffect } from 'react'
import NumberFlow from '@number-flow/react'
import Image from 'next/image'

const Welcome = () => {
  const [projectCount, setProjectCount] = useState(0)
  const [areaCount, setAreaCount] = useState(0)
  const [countriesCount, setCountriesCount] = useState(0)

  useEffect(() => {
    // Stagger the counters so they animate one after another
    const timers = [
      setTimeout(() => setProjectCount(353), 150),
      setTimeout(() => setAreaCount(2.5), 1200),
      setTimeout(() => setCountriesCount(45), 2400),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="mt-10 corner-plus">
      <div className="flex items-center justify-between gap-6">

        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl sm:text-5xl tracking-tight text-white">
            V Jaya <span className="heading-em">Surya</span>
          </h1>
          <span className="text-neutral-200 text-sm">Senior Retail Designer</span>
          <span className="text-neutral-300 text-sm">Al Tayer Insignia</span>
          <p className="text-neutral-300 text-sm">
            Dubai, UAE
          </p>
        </div>
        
        <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden flex-shrink-0 border border-neutral-800">
          <Image 
            src="/wallpaper.jpg" 
            alt="V Jaya Surya"
            width={100} 
            height={100} 
            className="w-full h-full object-cover aspect-square"
          />
        </div>
      </div>
      <p className="mt-10 text-neutral-200 leading-relaxed">
        I design immersive retail and architectural stories—blending spatial intuition with brand strategy.
        Each project is crafted to feel human, intentional, and quietly bold.
      </p>
      
      <div className="mt-14 grid grid-cols-3 gap-8 items-end">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-normal text-neutral-500">Projects</span>
          <span className="text-5xl font-semibold text-white leading-none">
            <NumberFlow 
              value={projectCount} 
              transformTiming={{ duration: 900, easing: 'ease-out' }}
              spinTiming={{ duration: 5000 }}
              opacityTiming={{ duration: 1800, easing: 'ease-in-out' }}
            />
          </span>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <span className="text-[11px] uppercase tracking-normal text-neutral-500">Area in sq.ft</span>
          <div className="flex items-baseline gap-2 leading-none">
            <span className="text-5xl font-semibold text-white">
              <NumberFlow 
                value={areaCount} 
                format={{ maximumFractionDigits: 1 }}
                transformTiming={{ duration: 900, easing: 'ease-out' }}
                spinTiming={{ duration: 5200 }}
                opacityTiming={{ duration: 1200, easing: 'ease-in-out' }}
              />
            </span>
            <span className="text-2xl text-neutral-400">M</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <span className="text-[11px] uppercase tracking-normal text-neutral-500">Countries</span>
          <div className="flex items-baseline gap-2 leading-none">
            <span className="text-5xl font-semibold text-white">
              <NumberFlow 
                value={countriesCount} 
                transformTiming={{ duration: 900, easing: 'ease-out' }}
                spinTiming={{ duration: 5000 }}
                opacityTiming={{ duration: 1800, easing: 'ease-in-out' }}
              />
            </span>
            <span className="text-2xl text-neutral-400">+</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
