'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../../utils/supabaseClient';

const Page = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    // Check if fields are empty
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
        setFeedback('Couldn\'t get it, can you pls try later? :(');
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
            <h1 className="font-semibold text-4xl uppercase">Reach Out to Me</h1>
            <p className="font-regular mt-12 text-justify leading-relaxed">
              Feel free to reach out during business hours for general inquiries. For urgent or important matters, I'm available at any time via the listed channels. If I'm unavailable, you can always leave a message below—I'll check it regularly and respond as soon as I can.
            </p>

                    <div className="flex flex-wrap justify-center gap-2 mt-12">
          <Link
            href="mailto:jayasurya2223@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <img src="/mail.svg" alt="Email" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/viyyapujayasurya/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full" />
          </Link>
          <Link
            href="https://www.instagram.com/jaya_surya_js/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <img src="/insta.svg" alt="Instagram" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <img src="/x.svg" alt="X (Twitter)" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full" />
          </Link>
        </div>

            <p className="font-regular mt-12">Leave a message here</p>

            <div className="flex py-6 items-center">
              <input
                className="font-regular px-4 py-3 w-full rounded-lg bg-neutral-800 text-white"
                type="text"
                placeholder="whats up ?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="flex justify-between gap-6">
              <input
                className="font-regular px-4 py-3 w-full rounded-lg bg-neutral-800 text-white"
                type="email"
                placeholder="email address pls"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className={`text-black font-semibold py-3 px-10 rounded-lg ${
                  isSubmitting
                    ? 'bg-gray-400'
                    : 'bg-white hover:text-green-400 hover:bg-neutral-800'
                } transition-colors duration-300`}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>

            {feedback && (
              <p className="text-center text-neutral-600 font-regular mt-4">
                {feedback}
              </p>
            )}
          </section>
        </div>
      </div>

      <div className = 'mt-6'>
      <Footer />
      </div>

    </div>
  );
};

export default Page;
