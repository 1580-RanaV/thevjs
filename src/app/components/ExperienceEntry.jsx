import React from 'react';

const ExperienceEntry = ({ company, location, position }) => {
  return (
    <div className="mt-6 leading-relaxed text-white">
      <span className="font-semibold">{company}</span>{' '}
      <span className="font-bold text-lg text-neutral-1000">·</span>{' '}
      <span className="font-regular text-neutral-200">{location}</span>
      <span className="font-regular block text-neutral-400 mt-1">
        {position}
      </span>
    </div>
  );
};

export default ExperienceEntry;
