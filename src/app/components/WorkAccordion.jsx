'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const WorkAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [progress, setProgress] = useState({ active: null, loaded: 0, total: 0 });
  const itemRefs = useRef([]);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setProgress({ active: null, loaded: 0, total: 0 });
      return;
    }

    const total = items[index]?.images?.length || 0;
    setProgress({ active: index, loaded: 0, total });
    setOpenIndex(index);

    const target = itemRefs.current[index];
    if (target) {
      window.requestAnimationFrame(() => {
        const nextTop = target.getBoundingClientRect().top + window.scrollY - 12;
        window.scrollTo({ top: nextTop });
      });
    }
  };

  const handleImageSettled = (index) => {
    setProgress((prev) => {
      if (prev.active !== index) return prev;
      const loaded = Math.min(prev.loaded + 1, prev.total);
      return { ...prev, loaded };
    });
  };

  const getProgressWidth = () => {
    if (!progress.total) return '0%';
    return `${Math.round((progress.loaded / progress.total) * 100)}%`;
  };

  return (
    <div className="space-y-4 corner-plus">
      {items.map((work, index) => {
        const isOpen = openIndex === index;
        const isLoading = progress.active === index && progress.loaded < progress.total;

        return (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="border-b pb-4 border-neutral-800"
          >
            <button
              type="button"
              onClick={() => handleToggle(index)}
              className="w-full text-left"
            >
              <h1 className="font-semibold cursor-pointer py-1 hover:text-neutral-500 transition-colors">
                {work.title}
              </h1>
              <span className="block text-sm font-semibold text-neutral-500 cursor-pointer hover:text-neutral-500 transition-colors">
                {work.place}
              </span>
            </button>

            {isOpen && (
              <div className="pt-6 pb-6 transition-all duration-300 ease-in-out">
                <p className="text-neutral-200 text-justify font-regular mb-6">
                  {work.description}
                </p>

                {isLoading && (
                  <div className="mb-4 flex items-center gap-3 text-sm text-neutral-400">
                    <div className="h-1 w-full rounded-full bg-neutral-800 overflow-hidden">
                      <div
                        className="h-full bg-white transition-all duration-300"
                        style={{ width: getProgressWidth() }}
                      />
                    </div>
                    <span className="whitespace-nowrap">
                      Loaded {progress.loaded}/{progress.total}
                    </span>
                  </div>
                )}

                <div
                  className={`relative space-y-4 transition-opacity duration-300 ${
                    isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  {work.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="w-full h-full bg-neutral-900 overflow-hidden rounded-lg"
                    >
                      <Image
                        src={image}
                        width={100}
                        height={900}
                        sizes="100vw"
                        loading="eager"
                        alt={`${work.title} - Image ${imgIndex + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                        onLoad={() => handleImageSettled(index)}
                        onError={() => handleImageSettled(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorkAccordion;
