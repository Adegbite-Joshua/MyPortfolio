import React, { useEffect, useState } from 'react'
import Project from './Project'
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import SectionWrapper from '../hoc/SectionWrapper';


const MyProjects = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1
      }
    }
  }

  return (
    <div className='my-5 p-2 md:px-5'>
      <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>Project Showcase</p>
      <h2 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Projects</h2>
      <motion.p className='text-[#dfd9ff] mt-4 text-[17px] max-w-3xl leading-[30px]'>This section highlights a selection of projects that demonstrate my skills and experience through real-world applications. Each project includes a brief description, along with links to the code repositories and live demos. These showcases reflect my capability to tackle complex challenges, work with diverse technologies, and effectively manage project lifecycles. Dive in to see how I transform ideas into functional, impactful solutions!</motion.p>
      <div className="stack-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5 p-8 w-full justify-center"></div>
      <motion.div variants={variants} initial='hidden' whileInView='show' transition={{ duration: 1 }} className='flex flex-wrap shrink-0 grow-0 gap-y-16 gap-4 justify-center items-center'>
        {projects.map((project, index) => (
          <Project project={project} />
        ))}
      </motion.div>
    </div>
  )
}

export default SectionWrapper(MyProjects, 'projects')