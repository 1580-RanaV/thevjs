'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../../utils/supabaseClient';
import Image from 'next/image';
import BackToTopButton from '../components/BackToTopButton';

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
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    if (!message || !email) {
      setFeedback('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setFeedback('');

    const { data, error } = await supabase.from('messages').insert([
      {
        email,
        message,
      },
    ]);

    if (error) {
      setFeedback("Couldn't get it, can you please try later? :(");
      console.error(error);
    } else {
      setFeedback('Got your message! Expect a response soon. :)');
      setMessage('');
      setEmail('');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-neutral-950">
      <div className="bg-neutral-950 text-white min-h-screen flex justify-center px-5 py-5">
        <div className="max-w-3xl w-full">
          <Navbar />

          <section className="mt-12">
            <h1 className="font-semibold text-5xl uppercase">get in touch with me</h1>

            {/* Casual + professional copy */}
            <p className="font-regular mt-12 text-justify leading-relaxed text-neutral-200">
              I’m around during business hours for most queries, and I’m quick on urgent notes too.
              If I miss you, drop a message below and I’ll circle back as soon as I can. For work
              samples, collabs, or a quick hello—pick a link that suits you.
            </p>

            {/* Compact link row with small logos + arrow */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Email */}
              <Link
                href="mailto:jayasurya2223@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-neutral-800/60 bg-neutral-900/40 px-4 py-3 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                aria-label="Email Jayasurya"
              >
                <span className="flex items-center gap-3">
                  <Image
                    src="/mail.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                    priority
                  />
                  <span className="font-medium">Email</span>
                </span>
                <ExternalArrow />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/viyyapujayasurya/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-neutral-800/60 bg-neutral-900/40 px-4 py-3 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                aria-label="Open LinkedIn profile"
              >
                <span className="flex items-center gap-3">
                  <Image
                    src="/linkedin.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="font-medium">LinkedIn</span>
                </span>
                <ExternalArrow />
              </Link>

              {/* Instagram (dotted underline on label) */}
              <Link
                href="https://www.instagram.com/jaya_surya_js/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-neutral-800/60 bg-neutral-900/40 px-4 py-3 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                aria-label="Open Instagram profile"
              >
                <span className="flex items-center gap-3">
                  <Image
                    src="/insta.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="font-medium underline decoration-dotted underline-offset-4">
                    Instagram
                  </span>
                </span>
                <ExternalArrow />
              </Link>
            </div>

            {/* Small helper nav */}
            <div className="mt-12 text-neutral-500 text-center">
              <p className="text-sm sm:text-base">
                Head to{' '}
                <Link href="/work" className="font-semibold underline text-green-500">
                  work
                </Link>{' '}
                to view all my works, or go back to{' '}
                <Link href="/" className="font-semibold underline text-green-500">
                  home
                </Link>
                .
              </p>
            </div>

            {/* Form */}
            <p className="font-regular mt-16">Leave a message here</p>

            <div className="flex py-6 items-center">
              <input
                className="font-regular px-4 py-3 w-full rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                type="text"
                placeholder="What’s up?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="flex justify-between gap-3">
              <input
                className="font-regular px-4 py-3 w-full rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className={`text-black font-semibold py-3 px-10 rounded-lg ${
                  isSubmitting
                    ? 'bg-gray-400'
                    : 'bg-white hover:text-green-400 hover:bg-neutral-800'
                } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-700`}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>

            {feedback && (
              <p className="text-center text-neutral-500 font-regular mt-4">
                {feedback}
              </p>
            )}
          </section>

          <BackToTopButton />
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
