'use client'

import HeroSection from '@/components/contact/HeroSection'
import Footer from '@/components/Footer'
import ContactForm from '@/components/landingPage/ContactForm'
import NavBar from '@/components/NavBar'
import ScrollToTop from '@/components/ScrollToTop'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'


const index = () => {
  const variants = {
    hidden: { 
      opacity: 0,
      x: -100
    },
    show: {
      opacity: 1,
      x: 0,
    }
  }
  return (
    <div>
        <NavBar/>
        <motion.div variants={variants} initial='hidden' whileInView='show' transition={{duration: 1}} className="container my-5 mx-auto flex p-5 justify-center items-center">
          <img src="/404.gif" className=' h-96 rounded-3xl mx-auto' alt="404 Image" />
        </motion.div>
        <motion.div variants={variants} initial='hidden' whileInView='show' transition={{duration: 2}} className='flex justify-center my-3'>
          <Link href='/' className='button'>Go Home</Link>
        </motion.div>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default index