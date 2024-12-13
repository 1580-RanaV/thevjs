import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Creative from './components/Creative';
import WorkImpact from './components/WorkImpact';
import Journey from './components/Journey';
import Future from './components/Future';
import Cta from './components/Cta';
import AdidasList from './components/CitiesList';
import ClientList from './components/ClientList';

const Page = () => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col px-5 py-5">
      <Navbar />
      <main className="flex-grow px-3 sm:px-5 py-5 flex justify-center">
        <div className="container mx-auto max-w-3xl">

        <Welcome />
          
        <Cta />

        <Creative />

        <AdidasList />

        <WorkImpact />

        <ClientList />

        <Journey />

        <Cta />

        <Future />

        <BackToTopButton />

        </div>
        
      </main>

      <div className='mt-24'>
      <Footer />
      </div>

    </div>
  );
};

export default Page;
