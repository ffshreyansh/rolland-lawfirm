import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col uppercase bg-black p-6'>
        <div className='flex items-center justify-between text-gray-500 font-medium'>
            <a href="/project">About Us</a>
            <a href="/service">Service</a>
            <a href="/member">Member</a>
            <a href="/project">Project</a>
        </div>
        <div className='flex items-center justify-between text-7xl'>
                <span>TOMMY</span>
                <span>*</span>
                <span>ALPHA</span>
        </div>
    </div>
  )
}

export default Footer