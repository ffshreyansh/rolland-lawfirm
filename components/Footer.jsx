import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col uppercase bg-black p-6 font-inter'>
        <div className='flex items-center justify-between text-gray-500 text-xs lg:text-lg '>
            <a href="/project">About Us</a>
            <a href="/service">Service</a>
            <a href="/member">Member</a>
            <a href="/project">Project</a>
        </div>
        <div className='flex items-center justify-between w-full tt2 text-white font-semibold  px-3 pb-0 mt-8'>
                <span>TOMMY</span>
                <span>*</span>
                <span>ALPHA</span>
        </div>
        <span className='tt text-white text-center font-bold leading-0'>ROLLAND</span>
        <div className='flex items-center justify-between w-full tt3 text-white font-bold pb-0'>
                <span>SMART</span>
                <span>EXPERIENCED</span>
                <span>EXPERT</span>
        </div>
        <div className='mt-14 flex items-center justify-between'>
          <div className='icons flex items-center gap-1'>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          </div>
          <button className='text-white border-2 py-2 px-4 rounded-full text-xs lg:text-lg'>CONTACT US</button>
        </div>
    </div>
  )
}

export default Footer