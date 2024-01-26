import React from 'react'
import { TypeAnimation } from "react-type-animation";

const TypewriterC = () => {
  return (
    <>
      <h1 className='text-5xl m-3 text-clip'>Joshua Adegbite</h1>
      <h1 className='text-4xl'>
        <TypeAnimation sequence={['Passionate full stack web developer creating user-centered experiences.',1000,'Translating complex ideas into elegant, functional code.',2000, 'Building innovative, impactful websites through continuous learning.', 2000]} wrapper="span" speed={50} repeat={Infinity}/>
      </h1>    
    </>
  )
}

export default TypewriterC