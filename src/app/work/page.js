"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Freelance from '../components/Freelance';
import Pixel from '../components/Pixel';
import Adidas from '../components/Adidas';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div className='bg-neutral-950'>
      <div className="bg-neutral-950 text-white min-h-screen flex justify-center px-5 py-5">
      <div className="max-w-3xl w-full">
        <Navbar />

        <section className='mt-12 font-regular text-neutral-600 text-sm sm:text-base'>
          This is obviously not the entire list of my works. These are a few of the handpicked projects
          to showcase my work. Please tap to reveal the images and the description of the project.
        </section>

        <section className="mt-12">
          <h1 className="font-semibold text-4xl uppercase mb-10">adidas - handpicked</h1>
          <Adidas />
        </section>

        <section className="mt-24">
          <h1 className="font-semibold text-4xl uppercase mb-10">works from Pixel5</h1>
          <Pixel />
        </section>

        <section className="mt-24">
          <h1 className="font-semibold text-4xl uppercase mb-10">works from buildnext</h1>
          <Freelance />
        </section>

      </div>
    </div>
    
    <div className = 'mt-24'>
      <Footer />
      </div>
       
    </div>
  );
};

export default Page;
