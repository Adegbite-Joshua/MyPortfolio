import React from 'react'
import { TypeAnimation } from "react-type-animation";

const TypewriterC = () => {
  return (
    <>
      <h1 className='text-[#dfd9ff] text-7xl lg:leading-[60px] my-5'>Joshua Adegbite</h1>
      <h1 className='text-3xl'>
        <TypeAnimation
          sequence={[
            'Building web applications that transform complex requirements into seamless, user-friendly experiences.', 2000,
            'Translating complex ideas into elegant, functional code.', 2000,
            'Developing scalable backend systems that drive dynamic, data-driven web platforms.', 2000,
            'Creating interactive, responsive interfaces that enhance user engagement and streamline functionality.', 2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />

      </h1>
    </>
  )
}

export default TypewriterC