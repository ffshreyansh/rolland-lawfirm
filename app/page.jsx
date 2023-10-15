"use client"
import About from '@/components/About'
import { motion } from 'framer-motion';
import Nav from '@/components/Nav'
import Image from 'next/image'
import React from 'react'
import Team from '@/components/Team';
import PracticeArea from '@/components/PracticeArea';
import OurTeam from '@/components/OurTeam';

const page = () => {
  const animationVariants = {
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1 },
  };
  return (
    <div className='font-inter pb-0'>
      <Nav />
      <motion.div
      className='py-6'
      initial='initial'
      animate='animate'
      exit='exit'
      variants={animationVariants}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <p className='text-center text-sm'>WE BUILD BRIDGES BETWEEN</p>
      <motion.p
      className='text-center font-bold text-3xl sm:text-5xl lg:text-8xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        PROBLEM <br /> SOLUTION
      </motion.p>
    </motion.div>
      <div className='flex items-center justify-between text-xs px-10 '>
        <span>A TEAM DEDICATED TO</span>
        <span>SOLVE YOUR PROBLEM</span>
      </div>
      <div className='p-6'>
      <motion.div
      className='image-container rounded-lg '
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
    >
        <img src="https://images.pexels.com/photos/7063750/pexels-photo-7063750.jpeg" className='rounded-lg' alt="Your Image Description"/>
        </motion.div>
      </div>
      <About/>
      <Team/>
      <PracticeArea/>
      <OurTeam/>
    </div>
  )
}

export default page