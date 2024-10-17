import React from 'react'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import EarthCanvas from '../canvas/Earth';
import SectionWrapper from '../hoc/SectionWrapper';
// import EarthCanvas from '../canvas/Canvas';


const GetInTouch = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 2
      }
    }
  }

  return (
    <>
      <motion.div variants={variants} initial='hidden' whileInView='show' transition={{ duration: 1 }} className="container justify-center mx-auto grid grid-cols-1 md:grid-cols-2">
        <h2 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Get in Touch</h2>
        <motion.p className='text-[#dfd9ff] mt-4 text-[17px] max-w-3xl leading-[30px]'>I’d love to hear from you! Whether you have a project in mind, questions about my work, or just want to connect, feel free to reach out. Collaboration and communication are key to creating exceptional solutions, and I'm always eager to explore new opportunities. Let’s discuss how we can turn your ideas into reality!</motion.p>
        <ContactForm />
        <EarthCanvas />
      </motion.div>
      <ToastContainer position="top-right" className='p-2 h-12' autoClose={3000} hideProgressBar={false} />
    </>
  )
}

export default SectionWrapper(GetInTouch, 'contact')


