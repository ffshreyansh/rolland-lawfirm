import React, { useState, useRef } from 'react';

const Team = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  function togglePlay() {
    const video = videoRef.current;
    if (video) {
      if (playing) {
        video.pause();
      } else {
        video.play();
      }
      setPlaying(!playing);
    }
  }

  return (
    <div className='font-inter mt-20'>
      <div className='flex flex-col justify-center px-2 lg:px-10'>
        <span className='text-4xl sm:text-5xl lg:text-8xl font-medium flex items-center gap-4'>
          MEET THE
          <span className='h-1 w-10 lg:h-2 lg:w-20 bg-black'></span>
          <span className='bg-blue w-14 h-14 flex items-center justify-center rounded-full p-2'>
            <img width="30" height="30" className='rotate-45' src="/arrow.svg" alt="long-arrow-up" />
          </span>
        </span>
        <span className='text-4xl sm:text-5xl lg:text-8xl font-medium ml-auto'>ROLLAND TEAM</span>
      </div>
      <div className='vContain w-full h-fit mt-20 relative'>
        <span className='w-32 h-32 text-2xl cursor-pointer select-none z-40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bgM flex items-center justify-center text-white' onClick={togglePlay}>
          {playing ? 'Pause' : 'Play'}
        </span>
        <video ref={videoRef} src="https://cdn.jsdelivr.net/gh/ffshreyansh/VDOC/law.webm" alt="lawyers discussing video" />
        <span className='absolute font-bold rolland left-1/2 transform -translate-x-1/2 w-full pl-10 lg:pl-0'>ROLLAND</span>
      </div>
      
    </div>
  );
};

export default Team;
