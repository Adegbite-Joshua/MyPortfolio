"use client"

import React, { useState } from 'react'
import Typewriter from './Typewriter'
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper'


const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: .7
      }
    }
  }

  const children = {
    hidden: {
      opacity: 0,
      y: -200
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2
      }
    }
  }

  return (
      <motion.div variants={variants} initial='hidden' animate='show' className='w-full mt-16 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 h-[700px] md:h-[400px] relative'>
        <div className='flex flex-row justify-center md:p-10 gap-2'>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-3 h-3 rounded-full bg-violet-600' />
            <div className='w-1 sm:h-40 h-28 violet-gradient' />
          </div>
          <motion.div variants={children} className='h-full text-white order-2 md:order-none'>
            <Typewriter />
          </motion.div>
        </div>
        <motion.div variants={children} className='background h-full order-1 md:order-none'>
        </motion.div>
      </motion.div>
  )
}

export default SectionWrapper(HeroSection, '')