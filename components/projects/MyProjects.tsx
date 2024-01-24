import React from 'react'
import Project from './Project'
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';



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
      <motion.p variants={variants} initial='hidden' whileInView='show' transition={{ duration: 1 }} className='text-white my-3' >Welcome to the showcase of my passion and creativity! Below are some of the projects I've worked on, each representing a unique journey of learning and problem-solving. From web development to creative experiments, these projects reflect my commitment to craftsmanship and innovation. Feel free to explore and get a glimpse of the skills and ideas that drive my work.</motion.p>
      <motion.div variants={variants} initial='hidden' whileInView='show' transition={{ duration: 1 }} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center'>
        {projects.map((project) => (
          <Project title={project.title} siteUrl={project.webUrl} imageUrl={project.imageUrl} gitHubUrl={project.githubUrl} />
        ))}
      </motion.div>
    </div>
  )
}

export default MyProjects