"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Freelance from "../components/Freelance";
import Pixel from "../components/Pixel";
import Adidas from "../components/Adidas";
import Footer from "../components/Footer";
import High from "../components/High";

function DisclaimerModal({ isOpen, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/75"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-neutral-700 bg-neutral-950 shadow-2xl corner-plus">
        <div className="p-6 sm:p-7 space-y-4">
          <h2
            id="disclaimer-title"
            className="text-xl text-center font-semibold text-white"
          >
            Image use notice
          </h2>
          <p className="text-neutral-200 text-center font-regular leading-relaxed">
            Images here belong to their original owners and are shown for portfolio reference only.
            If something is missing, outdated, or incorrect, I’ll swap or remove it quickly so the work
            stays respectful to rights.
          </p>
          <div className="text-center flex justify-center">
            <button
              onClick={onClose}
              className="inline-flex items-center rounded-full border border-neutral-700 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    const original = document.body.style.overflow;
    if (showDisclaimer) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [showDisclaimer]);

  return (
    <div>
      <div className="fade-on-load">
        <div className="text-white min-h-screen flex justify-center px-5 py-5">
          <div className="max-w-3xl w-full">
            <Navbar />

            <section className="mt-12 font-regular text-neutral-400 text-sm sm:text-base">
              This is not the full archive—just a few handpicked projects. Tap to reveal images and notes.
            </section>

            <section className="mt-12">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-8">
                High end <span className="heading-em">retail</span>
              </h1>
              <High />
            </section>


            <section className="mt-12">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-8">
                adidas: <span className="heading-em">handpicked</span>
              </h1>
              <Adidas />
            </section>

            <section className="mt-24">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-8">
                Works from <span className="heading-em">Pixel5</span>
              </h1>
              <Pixel />
            </section>

            <section className="mt-24">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-8">
                Works from <span className="heading-em">BuildNext</span>
              </h1>
              <Freelance />
            </section>

          </div>
        </div>

        <div className="mt-24">
          <Footer />
        </div>
      </div>

      <DisclaimerModal
        isOpen={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
      />
    </div>
  );
}
