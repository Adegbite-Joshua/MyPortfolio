"use client"

import Image from '@/node_modules/next/image'
import React from 'react'
import Typewriter from './Typewriter'
import SkillsDiv from './SkillsDiv'
import { motion } from 'framer-motion';



const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 2
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
    <>
        <motion.div variants={variants} initial='hidden' animate='show' className='w-full p-2 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 h-[720px] md:h-80 relative'>
            <motion.div variants={children} className='h-full text-white order-2 md:order-none'>
                <Typewriter />
            </motion.div>
            <motion.div variants={children} className='absolute h-20 w-20 rounded-full left-1/2 top-1/2 md:top-3/4 transform -translate-x-1/2 -translate-y-1/4'>
              <SkillsDiv />
            </motion.div>
            <motion.div variants={children} className='background h-full order-1 md:order-none'>
            </motion.div>
        </motion.div>
    </>
  )
}

export default HeroSection