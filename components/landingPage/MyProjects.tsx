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
      <Link href='/projects' className="button w-32 mx-auto my-3">
        More
        <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
          <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
        </svg>
      </Link>
    </div>
  )
}

export default MyProjects