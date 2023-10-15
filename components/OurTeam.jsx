import React, { useState } from 'react';

const OurTeam = () => {
  const [hoveredContainer, setHoveredContainer] = useState(null);

  const images = [
    'https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <div className="bg-black text-white font-inter p-6">
      <p className='mb-8'>OUR TEAM</p>
      <div className="flex flex-col gap-4 items-start lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
        <p className="uppercase text-4xl lg:text-7xl font-medium ">Expert in Position</p>
        <button className="rounded-full w-28 h-fit py-2 border-white border-2 text-sm lg:text-md">See More</button>
      </div>
      <div className="w-full mt-8 h-72 lg:h-96 flex justify-between">
        {images.map((image, index) => (
          <div
            key={index}
            className={`container ${hoveredContainer === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredContainer(index)}
            onMouseLeave={() => setHoveredContainer(null)}
          >
            <img src={image} alt={`Image ${index}`} className={`${hoveredContainer === index ? 'visible image relative ' : 'visible image relative grayscale'}`} />
            <div className='absolute bottom-8 text-center flex flex-col gap1 left-1/2 transform -translate-x-1/2 translate-y-1/2'>
            <span className='text-sm font-bold'>Johnson Hopkins</span>
            <span className='text-xs'>Co-founder</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
