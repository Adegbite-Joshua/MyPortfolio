'use client'

import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/landingPage/HeroSection'
import TechnologyStacksOverview from '@/components/landingPage/TechnologyStacksOverview'
import TechnologyStacks from '@/components/landingPage/TechnologyStacks'
import MyProjects from '@/components/landingPage/MyProjects'
import GetInTouch from '@/components/landingPage/GetInTouch'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    document.title = 'Full Stack Software Engineer | Joshua Adegbite';
  }, [])
  return (
    <div id='home' className='relative'>
      <NavBar />
      <HeroSection />
      <TechnologyStacksOverview />
      <TechnologyStacks />
      <MyProjects />
      <GetInTouch />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
