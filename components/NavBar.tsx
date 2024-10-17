'use client'

import React, { useEffect, useState } from 'react';
import NavButton from './NavButton';
import ToggleButton from './ToggleButton';
import { AnimatePresence, motion } from 'framer-motion';

const NavBar = () => {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  // Function to toggle sub-navigation visibility
  const toggleSubNav = () => {
    setIsSubNavVisible((prev) => !prev);
  };

  // Scroll to a specific section
  const scrollToSection = (e: React.MouseEvent, sectionId: string, offset: number = 100) => {
    e.preventDefault();
    if (isSubNavVisible) {
      toggleSubNav();
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  

  const navVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const [isNavbarOnScroll, setIsNavbarOnScroll] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 70) {
      setIsNavbarOnScroll(true);
    } else {
      setIsNavbarOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        <div className="flex justify-center fixed top-0 left-1/2 right-1/2 z-50 px-3">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative md:w-auto my-2"
          >
            <div className={`${isNavbarOnScroll ? ' bg-black bg-opacity-70' : 'bg-white'} duration-500 bg-opacity-10 w-auto flex justify-between md:justify-center h-auto md:h-24 text-white p-3 rounded-lg shadow-lg`}>
              <ul className="flex my-auto md:px-0">
                <li>
                  <a href="#home"  onClick={(e) => scrollToSection(e, 'home')}>
                    <NavButton name="Home" />
                  </a>
                </li>
              </ul>
              <ToggleButton toggleSubNav={toggleSubNav} isSubNavVisible={isSubNavVisible} />

              <motion.ul
                variants={navVariants}
                initial="hidden"
                animate="show"
                transition={{ duration: 1 }}
                id="subNav"
                className={`${isSubNavVisible ? 'responsive-navbar': ''} hidden mx-auto ms-12 w-52 md:w-auto md:mx-3 top-28 z-50 md:flex md:my-auto px-3 py-auto bg-gray-500 rounded-lg bg-opacity-80 md:bg-transparent md:bg-opacity-0 gap-x-5 md:gap-x-7 lg:gap-y-10`}
              >
                <div className="flex justify-end items-center">
                  <label className="md:hidden ms-auto inline my-2" id='navbarToggle' htmlFor="navbarToggle">
                    <img src="/close.svg" className="h-5 w-5" alt="Close" />
                  </label>
                </div>
         
                <motion.li variants={childVariants} className="mx-5 md:mx-0 my-3 md:my-auto">
                  <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                    <NavButton name="About" />
                  </a>
                </motion.li>
                <motion.li variants={childVariants} className="mx-5 md:mx-0 my-3 md:my-auto">
                  <a href="/Joshua Adegbite Resume.pdf" download>
                    <NavButton name="Resume" />
                  </a>
                </motion.li>
                <motion.li variants={childVariants} className="mx-5 md:mx-0 my-3 md:my-auto">
                  <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
                    <NavButton name="Skills" />
                  </a>
                </motion.li>
                <motion.li variants={childVariants} className="mx-5 md:mx-0 my-3 md:my-auto">
                  <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
                    <NavButton name="Projects" />
                  </a>
                </motion.li>


                <motion.li variants={childVariants} className="mx-5 md:mx-0 my-3 md:my-auto">
                  <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                    <NavButton name="Contact" />
                  </a>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default NavBar;
