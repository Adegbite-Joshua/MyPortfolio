import { motion } from 'framer-motion';
import React from 'react';

const AboutMe = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const children = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  return (
    <div className='my-5 bg-white bg-opacity-30 container mx-auto p-2 md:p-5'>
      <motion.div variants={variants} initial='hidden' animate='show' id='subNav' transition={{ duration: 2 }} className='w-full md:w-5/6 mx-auto'>
        <motion.h3 variants={children} className='text-3xl font-semibold text-center underline cursor-pointer'>
          About Me
        </motion.h3>
        <motion.p variants={children} className='font-semibold'>
          <p className='my-2'>
            Hello! I am <strong>Joshua Adegbite</strong>, a dedicated full-stack developer with a rich blend of experience in web development.

            In my journey of over a year in the tech industry, I have honed my skills across a spectrum of programming languages and technologies, making me proficient in crafting robust and scalable solutions tailored to unique project requirements.

            My professional repertoire includes expertise in JavaScript, Python, and Java. On the frontend, I specialize in crafting dynamic user interfaces with React.js, while my backend proficiency extends to Node.js, Express.js, Flask, and Spring Boot. I am well-versed in managing databases, having worked extensively with MongoDB and Firebase.
          </p>
          <p className='my-2'>
            The pursuit of knowledge is a cornerstone of my career. The dynamic nature of technology motivates me to stay ahead of the curve, ensuring that I am well-equipped to adopt emerging technologies swiftly and contribute to innovative solutions. This commitment to continuous learning is fundamental to my approach to problem-solving.
          
            I thrive on solving complex challenges with creativity and efficiency. Each project becomes an opportunity for growth and innovation, and my problem-solving mindset ensures that I approach tasks with a meticulous and strategic outlook.
          
            My collaborative approach in diverse teams has further underscored the importance of effective communication and cooperation, enriching the creative process and contributing to superior outcomes.
          
            In my journey, I have worked on a range of projects that showcase my dedication to practicing and refining my skills. Notable achievements include [mention specific projects or accomplishments]. These experiences have not only polished my technical skills but also provided me with a holistic understanding of the software development lifecycle.
          
            I am enthusiastic about leveraging my technical expertise and professional approach to contribute to the success of future projects. Let's connect and explore how we can create meaningful solutions together. I look forward to the opportunity to collaborate and innovate in the ever-evolving world of technology.
          </p>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
