"use client"

import Image from '@/node_modules/next/image'
import React, { useState } from 'react'
import Typewriter from './Typewriter'
import SkillsDiv from './SkillsDiv'
import { motion } from 'framer-motion';
import {ComputersCanvas} from "@/components/canvas/index.js";


const HeroSection = () => {

  const [place3DAbove, setPlace3DAbove] = useState(false)

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
    <>
      <motion.div variants={variants} initial='hidden' animate='show' className='w-full p-2 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 h-[720px] md:h-80 relative'>
        <div className='flex flex-row p-0 md:p-10 gap-2'>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-3 h-3 rounded-full bg-violet-600' />
            <div className='w-1 sm:h-40 h-28 violet-gradient' />
          </div>
          <motion.div variants={children} className='h-full text-white order-2 md:order-none'>
            <Typewriter />
          </motion.div>
        </div>
        <motion.div variants={children} className='absolute h-20 w-20 rounded-full left-1/2 top-1/2 md:top-3/4 transform -translate-x-1/2 -translate-y-1/4'>
          <SkillsDiv />
        </motion.div>
        <motion.div variants={children} className='background h-full order-1 md:order-none'>
        </motion.div>
        <div className={`absolute top-0 bottom-0 right-0 left-0 ${place3DAbove ? 'z-30' : '-z-10'}`}>
          <ComputersCanvas/>
        </div>
        <button onClick={()=>setPlace3DAbove(!place3DAbove)} className='absolute top-0 right-0 z-50 m-10 text-white'>Show/Hide</button>
      </motion.div>
    </>
  )
}

export default HeroSection