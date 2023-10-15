import React from 'react'

const About = () => {


  return (
    <div className='flex-col lg:flex-col items-start justify-between mt-16 lg:py-24 font-inter px-6'>
      <div className='w-full lg:w-1/4  text-lg font-medium '>
        ABOUT US
      </div>
      <div className='w-full mt-10 lg:w-3/4 '>
        <p className=' text-gray-500 font-medium text-3xl lg:text-5xl'>
          <span className='text-black'>WE UNDERSTAND</span>  THAT EVERY LEGAL CASE IS UNIQUE, AND THAT IS WHY WE STRIVE TO PROVIDE SOLUTIONS TAILORED TO PROVIDE
          SOLUTIONS TAILORED TO YOUR SPECIFIC NEED <span className='text-black'> AND INTERESTS.</span>
        </p>
        <div className='flex-col lg:flex items-center justify-between h-fit mt-14 lg:mt-28'>
            <div className='flex flex-col h-fit lg:maxW items-start mb-10 lg:gap-2'>
              <span className='text-8xl font-semibold lg:mb-4'>284</span>
              <span className='text-lg font-semibold'>Case Resolved</span>
              <span className=' text-slate-300 font-medium'>corem ipsum dolor sit amet, consectetur adipisicing elit. Atque, blanditiis.</span>
            </div>
            <div className='flex flex-col h-fit lg:maxW items-start mb-10 lg:gap-2'>
              <span className='text-8xl font-semibold lg:mb-4'>84%</span>
              <span className='text-lg font-semibold'>Case Win Rate</span>
              <span className=' text-slate-300 font-medium'>corem ipsum dolor sit amet, consectetur adipisicing elit. Atque, blanditiis.</span>
            </div>
            <div className='flex flex-col h-fit lg:maxW items-start mb-10 lg:gap-2'>
              <span className='text-8xl font-semibold lg:mb-4'>$28 B</span>
              <span className='text-lg font-semibold'>Our Case Results</span>
              <span className=' text-slate-300 font-medium'>corem ipsum dolor sit amet, consectetur adipisicing elit. Atque, blanditiis.</span>
            </div>
        </div>
      </div>

    </div>
  )
}

export default About