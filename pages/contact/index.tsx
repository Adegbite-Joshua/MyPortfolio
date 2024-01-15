import HeroSection from '@/components/contact/HeroSection'
import ContactForm from '@/components/landingPage/ContactForm'
import NavBar from '@/components/NavBar'
import React from 'react'

const index = () => {
  return (
    <div>
        <NavBar/>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <HeroSection/>
            <ContactForm/>
        </div>
    </div>
  )
}

export default index