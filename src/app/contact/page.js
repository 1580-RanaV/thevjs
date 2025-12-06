'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const ExternalArrow = () => (
  <svg
    aria-hidden="true"
    className="w-4 h-4 opacity-70 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col fade-on-load">
      <div className="text-white flex-grow flex justify-center px-5 py-5">
        <div className="max-w-3xl w-full">
          <Navbar />

          <section className="mt-10">
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Let&apos;s connect <span className="heading-em">directly</span>
                </h1>
                <p className="text-neutral-300 leading-relaxed max-w-xl">
                  Quick on weekdays; I keep an eye on urgent notes. Pick a channel that works for you.
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-end text-xs text-neutral-500">
                <span>Based in Dubai, UAE</span>
                <span>GMT+4</span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="mailto:jayasurya2223@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-neutral-800 bg-black/40 px-4 py-3 hover:border-neutral-600 transition-colors"
                aria-label="Email Jayasurya"
              >
                <span className="flex items-center gap-3 text-neutral-100">
                  <Image
                    src="/mail.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                    priority
                  />
                  <span className="font-medium">Email</span>
                </span>
                <ExternalArrow />
              </Link>

              <Link
                href="https://www.linkedin.com/in/viyyapujayasurya/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-neutral-800 bg-black/40 px-4 py-3 hover:border-neutral-600 transition-colors"
                aria-label="Open LinkedIn profile"
              >
                <span className="flex items-center gap-3 text-neutral-100">
                  <Image
                    src="/linkedin.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="font-medium">LinkedIn</span>
                </span>
                <ExternalArrow />
              </Link>

              <Link
                href="https://www.instagram.com/jaya_surya_js/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-neutral-800 bg-black/40 px-4 py-3 hover:border-neutral-600 transition-colors"
                aria-label="Open Instagram profile"
              >
                <span className="flex items-center gap-3 text-neutral-100">
                  <Image
                    src="/insta.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="font-medium">
                    Instagram
                  </span>
                </span>
                <ExternalArrow />
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
