import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 70) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const variants = {
    hidden: {
      opacity: 0,
      y: -30
    },
    show: {
      opacity: 1,
      y: 0,
    },
  }
  return (

    <>
      {isVisible && (<motion.div variants={variants} initial='hidden' animate='show' transition={{ duration: 2 }}
        className={`fixed bottom-6 right-6 bg-gray-400 bg-opacity-70 hover:bg-opacity-100 text-white p-2 rounded-md cursor-pointer ${isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 text-3xl h-14 w-8 flex justify-center`}
        onClick={scrollToTop}
        id='NavButton'
      >
        {/* &#8593; */}
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" height="19" width="12" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="19" width="12" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
        </i>
      </motion.div>)}
    </>
  );
};

export default ScrollToTop;
