'use client'
import { motion } from 'framer-motion';
import React from 'react';



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
            <motion.div variants={variants} initial='hidden' animate='show' transition={{ duration: 1 }} className="p-5">
                <h3 className="text-3xl text-white text-bold">OVERVIEW</h3>
                <p className="text-white">I am a proficient full-stack developer with expertise in front-end, back-end, and DevOps, ensuring end-to-end excellence in web development projects.</p>
                <motion.div className="stack-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5 w-full justify-center">
                    <motion.div whileHover={{scale: 1.2}} variants={children} className="mx-auto stack-card bg-white bg-opacity-10">
                        <img className='h-12 w-12 rounded-circle animate-bounce' src='/front-end.png'></img>
                        <p className="second-text">Front End</p>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2}} variants={children} className="mx-auto stack-card bg-white bg-opacity-10">
                        <img className='h-12 w-12 rounded-circle' src='/backend.png'></img>
                        <p className="second-text">Back End</p>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2}} variants={children} className="mx-auto stack-card bg-white bg-opacity-10">
                        <img className='h-12 w-12 rounded-circle' src='/dev-ops.png'></img>
                        <p className="second-text">Dev Ops</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}


export default TechnologyStacksOverview