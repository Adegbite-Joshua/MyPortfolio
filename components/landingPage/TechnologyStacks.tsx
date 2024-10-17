'use client'
import { motion } from 'framer-motion';
import React from 'react';
import StackIcon from "./StackIcon"
import SectionWrapper from '../hoc/SectionWrapper';




const TechnologyStacks = () => {
    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1
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
                duration: 1
            }
        }
    }
    return (
        <>
            <motion.div variants={variants} initial='hidden' whileInView='show' transition={{ duration: 1 }} className='md:p-5'>
                <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>Technologies I've Worked With</p>
                <h2 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Technology Stacks</h2>
                {/* <p className="text-white">I am a proficient full-stack developer with expertise in front-end, back-end, and DevOps, ensuring end-to-end excellence in web development projects.</p> */}
                <motion.p variants={children} className='text-[#dfd9ff] mt-4 text-[17px] max-w-3xl leading-[30px]'>Welcome to Joshua's Full Stack Development Hub! I'm a seasoned full-stack developer with a passion for crafting seamless web experiences. I specialize in building responsive front-end interfaces using React, while also architecting robust back-end solutions with Node.js and Python. My expertise extends across a versatile tech stack, including TypeScript, JavaScript, and frameworks like Next.js and Three.js. Committed to staying ahead in the tech landscape, I leverage top-notch tools like Git for version control and efficient collaboration. By creatively solving challenges and fostering effective teamwork, I'm here to turn your ideas into exceptional digital solutions. Let's build something extraordinary together!</motion.p>
                <div className="stack-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5 p-8 w-full justify-center">
                    <motion.div variants={children} whileHover={{ scale: 1.2 }} className="mx-auto p-2 my-4 stack-card h-60 bg-white bg-opacity-30 relative">
                        <img className='h-12 w-12 rounded-circle absolute -top-5 bg-white bg-opacity-20 p-2 rounded-full mx-auto scaling' src='/front-end.png'></img>
                        <div className="grid grid-cols-4 gap-3">
                            <StackIcon image="html.png" />
                            <StackIcon image="css.png" />
                            <StackIcon image="Sasss.png" />
                            <StackIcon image="tailwind.png" />
                            <StackIcon image="bootstrap5.svg" />
                            <StackIcon image="figma.png" />
                            <StackIcon image="javascript.png" />
                            <StackIcon image="framerMotion.jpg" />
                            <StackIcon image="react.png" />
                            <StackIcon image="next.svg" />
                            <StackIcon image="angular.png" />
                        </div>
                    </motion.div>
                    <motion.div variants={children} whileHover={{ scale: 1.2 }} className="mx-auto p-2 my-4 stack-card bg-white bg-opacity-30 relative">
                        <img className='h-12 w-12 rounded-circle absolute -top-5 bg-white bg-opacity-20 p-2 rounded-full mx-auto scaling' src='/backend.png'></img>
                        <div className="grid grid-cols-4 gap-3">
                            <StackIcon image="firebase.webp" />
                            <StackIcon image="expressjs.png" />
                            <StackIcon image="javascript.png" />
                            <StackIcon image="nodejs.png" />
                            <StackIcon image="flask.png" />
                            <StackIcon image="python.png" />
                            <StackIcon image="laravel.png" />
                            <StackIcon image="php.png" />
                            <StackIcon image="mongoDB.png" />
                            <StackIcon image="mysql.png" />
                        </div>
                    </motion.div>
                    <motion.div variants={children} whileHover={{ scale: 1.2 }} className="mx-auto p-2 my-4 stack-card bg-white bg-opacity-30 relative">
                        <img className='h-12 w-12 rounded-circle absolute -top-5 bg-white bg-opacity-20 p-2 rounded-full mx-auto scaling' src='/native.jpg'></img>
                        <div className="grid grid-cols-4 gap-3">
                            <StackIcon image="react.png" />
                            <StackIcon image="flutter.png" />
                            <StackIcon image="dart.png" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}


export default SectionWrapper(TechnologyStacks, 'skills');