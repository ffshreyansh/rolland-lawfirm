import Nav from '@/components/Nav'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='p-6 font-inter'>
      <Nav />
      <div className='py-6'>
        <p className='text-center text-sm'>WE BUILD BRIDGES BETWEEN</p>
        <p className='text-center font-bold text-8xl '>PROBLEM <br /> SOLUTION</p>
      </div>
      <div className='flex items-center justify-between text-xs py-3 px-4'>
        <span>A TEAM DEDICATED TO</span>
        <span>SOLVE YOUR PROBLEM</span>
      </div>
      <div class="image-container rounded-lg">
        <img src="https://images.pexels.com/photos/7063750/pexels-photo-7063750.jpeg" className='rounded-lg' alt="Your Image Description"/>
      </div>
    </div>
  )
}

export default page