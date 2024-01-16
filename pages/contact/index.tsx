'use client'

import HeroSection from '@/components/contact/HeroSection'
import Footer from '@/components/Footer'
import ContactForm from '@/components/landingPage/ContactForm'
import NavBar from '@/components/NavBar'
import ScrollToTop from '@/components/ScrollToTop'
import { motion } from 'framer-motion'
import React from 'react'


const index = () => {
  return (
    <div>
        <NavBar/>
        <motion.div className='grid grid-cols-1 md:grid-cols-2'>
            <HeroSection/>
            <ContactForm/>
        </motion.div>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default index