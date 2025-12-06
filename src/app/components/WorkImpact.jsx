import React from 'react'
import Image from 'next/image'

const WorkImpact = () => {
  return (
    <section className="mt-16 corner-plus">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        Work <span className="heading-em">impact</span> and the nods that followed.
      </h2>
      <p className='mt-5 text-neutral-200 leading-relaxed'>
        Recognition matters when it signals meaningful design. Awards for Commercial Project of the Year and Retail Interior Design of the Year,
        plus nods from Design Middle East and NASA juries, affirm the craft and collaboration behind each build.
      </p>
      <div className='mt-10 bg-neutral-900/40 overflow-hidden rounded-xl border border-neutral-800'>
        <Image
          src="/awards/award1.png"
          alt="Award for Commercial Project of the Year"
          width={100}
          height={800}
          sizes="100vw"
          className='w-full h-auto object-cover transition-transform duration-500 hover:scale-105'
        />
      </div>
    </section>
  )
}

export default WorkImpact
