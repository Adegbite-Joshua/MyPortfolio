import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const totalScroll = (scrollTop / (docHeight - winHeight)) * 100;
    setScrollPercent(totalScroll);

    if (scrollTop > 70) {
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
      y: -30,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
{isVisible && (
  <motion.div
    variants={variants}
    initial='hidden'
    animate='show'
    transition={{ duration: 2 }}
    className={`scale-effect fixed bottom-6 right-6 hover:bg-opacity-100 p-2 rounded-md cursor-pointer ${
      isVisible ? 'opacity-100' : 'opacity-0'
    } transition-opacity duration-300 flex justify-center items-center`}
    onClick={scrollToTop}
  >
    {/* Circular Progress */}
    <svg className="button-circular-progress" width="60" height="60" viewBox="0 0 36 36">
      <path
        className="button-circle-bg"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className="button-circle"
        strokeDasharray={`${scrollPercent}, 100`}
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className='absolute text-center h-10 w-10' fill="white" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
  </motion.div>
)}

    </>
  );
};

export default ScrollToTop;
