import React from 'react'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion';


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
        <motion.div variants={variants} initial='hidden' whileInView='show' transition={{ duration: 1 }} className="container justify-center mx-auto grid grid-cols-1 md:grid-cols-2">
            <ContactForm />
            <div className='order-1 md:order-none flex justify-center items-center'>
              <motion.img variants={children} src='contact-image.png' />
            </div>
        </motion.div>
    )
}

export default GetInTouch


