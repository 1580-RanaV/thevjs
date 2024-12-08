import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';

const Page = () => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen flex justify-center">
      
      <div className="max-w-xl w-full">

        <Navbar />

        <Welcome />

        <div className='mt-24 px-5 text-neutral-500 font-regular'>
        <span className='text-lg'>
        please head to <span className='font-semibold underline'>work</span> 🡥 to view works or,
        contact me at <span className='font-semibold underline'>contact</span> 🡥 for any queries or business. 
        </span>
        </div>

      </div>
      
    </div>
  );
};

export default Page;
