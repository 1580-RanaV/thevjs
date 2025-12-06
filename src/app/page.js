import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Creative from './components/Creative';
import WorkImpact from './components/WorkImpact';
import Journey from './components/Journey';
import Future from './components/Future';
import Cta from './components/Cta';
import AdidasList from './components/CitiesList';
import ClientList from './components/ClientList';
import Featured from './components/Featured';

const Page = () => {
  return (
    <div className="text-white min-h-screen flex flex-col px-5 py-5 fade-on-load">
      <Navbar />
      <main className="flex-grow px-3 sm:px-5 py-5 flex justify-center">
        <div className="container mx-auto max-w-3xl">

        <Welcome />
          
        <Cta />

        <Creative />

        <AdidasList />

        <Featured />

        <WorkImpact />

        <ClientList />

        <Journey />

        <Cta />

        <Future />

        </div>
        
      </main>

      <div className='mt-24'>
      <Footer />
      </div>

    </div>
  );
};

export default Page;
