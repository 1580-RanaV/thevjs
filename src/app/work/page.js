"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Freelance from "../components/Freelance";
import Pixel from "../components/Pixel";
import Adidas from "../components/Adidas";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

// ---- Inline modal (fixed hooks order) ----
function DisclaimerModal({ isOpen, onClose }) {
  // Hooks must run unconditionally (even when not open)
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
        className="absolute inset-0 bg-black/60 backdrop-blur-lg"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-950 shadow-xl">
        <div className="p-5 sm:p-6">
          <h2
            id="disclaimer-title"
            className="mb-3 text-xl text-center font-semibold text-white"
          >
            Heads up — Image Rights
          </h2>
          <p className="text-neutral-200 text-center font-regular mb-6">
            Some renders/images may be hidden or removed due to copyright
            considerations. None of the images are owned by me; all rights and
            ownership belong to their respective creators/brands. This page is
            for portfolio/showcase purposes only.
          </p>
          <div className="mt-5 text-center flex justify-center">
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
// -------------------------------------------

export default function Page() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  // Lock body scroll while modal is open
  useEffect(() => {
    const original = document.body.style.overflow;
    if (showDisclaimer) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [showDisclaimer]);

  return (
    <div className="bg-neutral-950">
      <div className="bg-neutral-950 text-white min-h-screen flex justify-center px-5 py-5">
        <div className="max-w-3xl w-full">
          <Navbar />

          <section className="mt-12 font-normal text-neutral-400 text-sm sm:text-base">
            This is obviously not the entire list of my works. These are a few
            of the handpicked projects to showcase my work. Please tap to reveal
            the images and the description of the project.
          </section>

          <section className="mt-12">
            <h1 className="font-semibold text-5xl uppercase mb-10">
              adidas: handpicked
            </h1>
            <Adidas />
          </section>

          <section className="mt-24">
            <h1 className="font-semibold text-5xl uppercase mb-10">
              works from Pixel5
            </h1>
            <Pixel />
          </section>

          <section className="mt-24">
            <h1 className="font-semibold text-5xl uppercase mb-10">
              works from buildnext
            </h1>
            <Freelance />
          </section>

          <BackToTopButton />
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>

      <DisclaimerModal
        isOpen={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
      />
    </div>
  );
}
