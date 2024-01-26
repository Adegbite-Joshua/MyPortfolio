'use client'
import { motion } from 'framer-motion';
import React from 'react';
import StackIcon from "./StackIcon"




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
            <motion.div variants={variants} initial='hidden' whileInView='show' transition={{ duration: 1 }} className='p-5'>
                <h3 className="text-3xl text-white text-bold">Tecnology Stacks</h3>
                <motion.p variants={children} className='text-white my-3'>Welcome to Joshua's Full Stack Development Hub! I'm a seasoned full-stack developer with a passion for crafting seamless web experiences. From building responsive front-end interfaces with technologies like React to architecting robust back-end solutions using Node.js and Python, I bring a versatile skill set to the table. With a commitment to staying ahead in the tech landscape, I leverage top-notch tools like Git pipelines. Solving challenges creatively and fostering effective collaboration, I'm here to turn your ideas into exceptional digital solutions. Let's build something extraordinary together!</motion.p>
                <div className="stack-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5 w-full justify-center">
                    <motion.div variants={children} whileHover={{ scale: 1.2 }} className="mx-auto p-2 stack-card h-60 bg-white bg-opacity-10 relative">
                        <img className='h-12 w-12 rounded-circle absolute -top-5 bg-white bg-opacity-30 p-2 rounded-full mx-auto scaling' src='/front-end.png'></img>
                        <div className="grid grid-cols-4 gap-3">
                            <StackIcon image="html.png" />
                            <StackIcon image="css.png" />
                            <StackIcon image="bootstrap5.svg" />
                            <StackIcon image="framerMotion.jpg" />
                            <StackIcon image="javascript.png" />
                            <StackIcon image="react.png" />
                            <StackIcon image="Sasss.png" />
                            <StackIcon image="tailwind.png" />
                            <StackIcon image="next.svg" />
                            <StackIcon image="html.png" />
                            <StackIcon image="html.png" />
                        </div>
                    </motion.div>
                    <motion.div variants={children} whileHover={{ scale: 1.2 }} className="mx-auto p-2 stack-card bg-white bg-opacity-10 relative">
                        <img className='h-12 w-12 rounded-circle absolute -top-5 bg-white bg-opacity-30 p-2 rounded-full mx-auto scaling' src='/backend.png'></img>
                        <div className="grid grid-cols-4 gap-3">
                            <StackIcon image="expressjs.png" />
                            <StackIcon image="firebase.webp" />
                            <StackIcon image="flask.png" />
                            <StackIcon image="java.png" />
                            <StackIcon image="javascript.png" />
                            <StackIcon image="mongoDB.png" />
                            <StackIcon image="nodejs.png" />
                            <StackIcon image="python.png" />
                            <StackIcon image="springboot.png" />
                        </div>
                    </motion.div>
                    <motion.div variants={children} whileHover={{ scale: 1.2 }} className="mx-auto p-2 stack-card bg-white bg-opacity-10 relative">
                        <img className='h-12 w-12 rounded-circle absolute -top-5 bg-white bg-opacity-30 p-2 rounded-full mx-auto scaling' src='/dev-ops.png'></img>
                        <div className="grid grid-cols-4 gap-3">
                            <StackIcon image="git.png" />
                            <StackIcon image="github.png" />
                            <StackIcon image="netlify.png" />
                            <StackIcon image="vercel.svg" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}


export default TechnologyStacks;