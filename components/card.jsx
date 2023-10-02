import React from 'react';
const Card = ({ heading, description,image }) => {
  return (
    <div className="relative text-teal-900 bg-teal-900 bg-opacity-30 rounded-lg shadow-md p-4 w-72 flex flex-col">
      <h2 className="relative text-xl font-semibold mb-2">{heading}</h2>
      <p className="relative text-sm mb-4">{description}</p>
      <div className='relative h-44 w-44'>
      <img src={image} alt="Component Image" className="w-full h-full " />
      </div>
    </div>
  );
};

export default Card;
