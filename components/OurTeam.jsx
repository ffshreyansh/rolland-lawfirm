import React, { useState } from 'react';

const OurTeam = () => {
  const [hoveredContainer, setHoveredContainer] = useState(null);

  const images = [
    'https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  return (
    <div className="bg-black text-white font-inter p-6">
      <p className=''>OUR TEAM</p>
      <div className="flex flex-col gap-4 items-start lg:gap-0 lg:flex lg:items-center lg:justify-between">
        <p className="uppercase text-4xl lg:text-6xl font-medium mt-4 lg:mt-8">Expert in Position</p>
        <button className="rounded-full w-28 h-fit py-2 border-white border-2 text-sm lg:text-lg">See More</button>
      </div>
      <div className="w-full mt-8 h-96 flex flex-col lg:flex justify-between">
        {images.map((image, index) => (
          <div
            key={index}
            className={`container ${hoveredContainer === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredContainer(index)}
            onMouseLeave={() => setHoveredContainer(null)}
          >
            <img src={image} alt={`Image ${index}`} className={`image ${hoveredContainer === index ? 'visible' : ''}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
