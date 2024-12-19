import React from 'react';

const ExperienceEntry = ({ company, location, position }) => {
  return (
    <div className="mt-6 text-justify leading-relaxed">
      <span className="font-semibold text-lg md:text-lg">{company}</span>{' '}
      <span className="font-regular text-lg">|</span>{' '}
      <span className="font-regular text-lg">{location}</span>
      <span className="block text-neutral-400 text-lg md:text-lg">
        {position}
      </span>
    </div>
  );
};

export default ExperienceEntry;
