'use client'

import React from 'react'
import NavButton from './NavButton'
import Link from 'next/link';
import ToggleButton from './ToggleButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';


const NavBar = () => {
  const router = useRouter();

  const toggleSubNav = () => {
    const subNav = document.getElementById('subNav') as HTMLDivElement;
    subNav.classList.toggle('responsive-navbar')
  }

  const variants = {
    hidden: { 
      opacity: 0,
      x: -100
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const children = {
    hidden: {
      opacity: 0,
      x: -20
    },
    show: {
      opacity: 1.5,
      x: 0,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  return (
    <>
    <AnimatePresence>
      <div className='flex justify-center'>
        <motion.div initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='relative w-full md:w-auto my-2'>
          <div className='w-auto flex justify-between md:justify-center h-auto md:h-24 text-white bg-white bg-opacity-10 p-3 rounded-lg shadow-lg'>
            <ul className='flex my-auto md:px-0'>
              <li><Link href='/'><NavButton name='Home' /></Link></li>
            </ul>
            <ToggleButton toggleSubNav={toggleSubNav} />
            <motion.ul variants={variants} initial='hidden' whileInView='show' transition={{duration: 1}} id='subNav' className='hidden mx-auto ms-12 w-52 md:w-auto md:mx-3 top-28 z-50 md:flex md:my-auto px-3 py-auto bg-gray-500 rounded-lg bg-opacity-80 md:bg-transparent md:bg-opacity-0 gap-x-5 md:gap-x-7 lg:gap-y-10'>
              <div className='flex justify-end items-center'>
              <label className='md:hidden ms-auto inline my-2' htmlFor="navbarToggle"><img src="/close.svg" className='h-5 w-5' alt="Close" /></label>
              </div>
              <motion.li variants={children} initial='hidden' animate='show' className='mx-5 md:mx-0 my-3 md:my-auto'><Link href='/projects'><NavButton name='Projects' /></Link></motion.li>
              <motion.li variants={children} initial='hidden' animate='show' className='mx-5 md:mx-0 my-3 md:my-auto'><a href='/generalCV.docx' download><NavButton name='Resume' /></a></motion.li>
              <motion.li variants={children} initial='hidden' animate='show' className='mx-5 md:mx-0 my-3 md:my-auto'><Link href='/contact'><NavButton name='Contact' /></Link></motion.li>
              <motion.li variants={children} initial='hidden' animate='show' className='mx-5 md:mx-0 my-3 md:my-auto'><Link href='/about'><NavButton name='About' /></Link></motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
      </AnimatePresence>
    </>
  )
}

export default NavBar