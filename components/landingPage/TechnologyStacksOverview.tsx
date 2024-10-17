'use client'
import { motion } from 'framer-motion';
import React from 'react';
import SectionWrapper from '../hoc/SectionWrapper';



const TechnologyStacksOverview = () => {
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
      x: -200
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2
      }
    }
  }
  return (
    <>
      <motion.div variants={variants} initial='hidden' whileInView='show' transition={{ duration: 1 }} className="p-5">
        <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>Introduction</p>
        <h2 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Overview</h2>
        {/* <p className="text-white">I am a proficient full-stack developer with expertise in front-end, back-end, and DevOps, ensuring end-to-end excellence in web development projects.</p> */}
        <motion.p
          className='text-[#dfd9ff] mt-4 text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a dedicated software developer proficient in JavaScript and TypeScript, with extensive experience in building robust applications using frameworks like React, Next.js, and Node.js. I thrive on solving complex challenges, delivering scalable and high-performance solutions tailored to user needs. Let's collaborate to turn your vision into impactful, real-world applications!
        </motion.p>
        <motion.div className="stack-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5 w-full">
          <motion.div whileHover={{ scale: 1.2 }} variants={children} className="mx-auto stack-card bg-white bg-opacity-30">
            <img className='h-12 w-12 rounded-circle scaling' src='/front-end.png'></img>
            <p className="second-text font-semibold">Front End</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} variants={children} className="mx-auto stack-card bg-white bg-opacity-30">
            <img className='h-12 w-12 rounded-circle scaling' src='/backend.png'></img>
            <p className="second-text font-semibold">Back End</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} variants={children} className="mx-auto stack-card bg-white bg-opacity-30">
            <img className='h-12 w-12 rounded-full scaling' src='/native.jpg'></img>
            <p className="second-text font-semibold">Native App</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(TechnologyStacksOverview, 'about')