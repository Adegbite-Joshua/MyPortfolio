import React from 'react'
import Project from './Project'
import Link from 'next/link';
import { motion } from 'framer-motion';


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
      <h2 className='text-3xl text-bold text-white'>MY PROJECTS</h2>
      <motion.div variants={variants} initial='hidden' whileInView='show' transition={{ duration: 1 }} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center'>
        <Project siteLink='http://localhost:3000' gitHubLink="kjjiwuwiui" />
        <Project siteLink='http://localhost:3000' gitHubLink="kjjiwuwiui" />
        <Project siteLink='http://localhost:3000' gitHubLink="kjjiwuwiui" />
      </motion.div>
      <Link href='/projects'>Load More</Link>
    </div>
  )
}

export default MyProjects