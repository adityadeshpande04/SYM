import React from 'react';

const Card1 = ({ heading, description, imageSrc }) => {
  return (
    <div className="relative flex-shrink-0 rounded-lg bg-card-bg border border-gray-400 p-4">
      <h2 className="text-xl text-center font-bold mb-2">{heading}</h2>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <img src={imageSrc} alt="Card Image" className="w-full h-auto rounded-lg" />
    </div>
  );
};

export default Card1;
