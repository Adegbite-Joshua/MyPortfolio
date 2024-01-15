'use client'

import Footer from '@/components/Footer'
import HeroSection from '@/components/landingPage/HeroSection'
import NavBar from '@/components/NavBar'
import ScrollToTop from '@/components/ScrollToTop'
import React from 'react'

const index = () => {
  return (
    <div>
      <NavBar />
      <HeroSection/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default index