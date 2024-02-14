'use client'

import AboutMe from '@/components/about/AboutMe'
import HeroSection from '@/components/about/HeroSection'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import ScrollToTop from '@/components/ScrollToTop'
import React, {useEffect} from 'react'

const index = () => {
  useEffect(() => {
    document.title = 'About | Joshua Adegbite';
  }, [])
  return (
    <div>
      <NavBar />
      <HeroSection/>
      <AboutMe/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default index