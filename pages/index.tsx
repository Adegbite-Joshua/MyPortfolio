'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/landingPage/HeroSection'
import TechnologyStacksOverview from '@/components/landingPage/TechnologyStacksOverview'
import TechnologyStacks from '@/components/landingPage/TechnologyStacks'
import MyProjects from '@/components/landingPage/MyProjects'
import GetInTouch from '@/components/landingPage/GetInTouch'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <TechnologyStacksOverview/>
      <TechnologyStacks/>
      <MyProjects/>
      <GetInTouch/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}
