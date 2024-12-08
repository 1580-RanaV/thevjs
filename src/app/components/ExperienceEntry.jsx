import React from 'react';

const ExperienceEntry = ({ company, location, position }) => {
  return (
    <div className="mt-6 text-justify leading-relaxed">
      <span className="font-semibold text-base md:text-xl">{company}</span>{' '}
      <span className="font-regular">|</span>{' '}
      <span className="font-regular">{location}</span>
      <span className="block text-neutral-400 font-regular text-sm md:text-base">
        {position}
      </span>
    </div>
  );
};

export default ExperienceEntry;
