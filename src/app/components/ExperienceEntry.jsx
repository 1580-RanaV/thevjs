import React from 'react';

const ExperienceEntry = ({ company, location, position }) => {
  return (
    <div className="mt-6 text-justify leading-relaxed">
      <span className="font-semibold">{company}</span>{' '}
      <span className="font-regular text-lg">|</span>{' '}
      <span className="font-regular">{location}</span>
      <span className="block text-neutral-400">
        {position}
      </span>
    </div>
  );
};

export default ExperienceEntry;
