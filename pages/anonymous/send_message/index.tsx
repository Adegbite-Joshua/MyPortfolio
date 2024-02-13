'use client'

import NavBar from '@/components/NavBar'
import { motion } from 'framer-motion'
import React, { useState } from 'react'


const index = () => {
  const [message, setMessage] = useState<string>('');
  const variants = {
    hidden: {
      opacity: 0,
      x: -200
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: .4
      }
    }
  }

  const children = {
    hidden: {
      opacity: 0,
      x: -200
    },
    show: {
      opacity: 1.5,
      x: 0,
    }
  }

  const sendMessage = (e:any) => {
    e.preventDefault();

  }

  return (
    <>
      <NavBar />
      <motion.div variants={variants} initial='hidden' whileInView='show' className='h-full container mx-auto my-10'>
        <form onSubmit={sendMessage} className='w-5/6 md:w-3/6 mx-auto text-white bg-white bg-opacity-10 p-7 md:p-10 rounded-lg'>
          <h4 className='text-3xl text-center underline underline-offset-8 my-2'>Anonymous Chat</h4>
          <ol className=' list-disc'>
            <motion.li variants={children} className='font-bold'>Let's play and have fun!</motion.li>
            <motion.li variants={children} className='font-bold'>Send me a message, I won't know who sent</motion.li>
            <motion.li variants={children} className='font-bold'>Send me a message, I won't know who sent</motion.li>
          </ol>
          <motion.div variants={children}>
            <label htmlFor="">Message</label>
            <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} name="message" id="message" autoFocus className=' w-full h-48 bg-transparent border-2 border-white p-2 outline-0' placeholder='Enter your message...'></textarea>
          </motion.div>
          <motion.div variants={children} className="flex gap-2">
            <button type='submit' disabled={message.trim() == ''} className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-md text-center  basis-full md:basis-4/6">Send</button>
            <div className="basis-full md:basis-2/6">
              <button id="reset-btn" disabled={message == ''} type='button' onClick={()=>setMessage('')} className="bg-red-500 hover:bg-red-600 p-3 rounded-md text-center w-full">Reset</button>
            </div>
          </motion.div>
        </form>
      </motion.div>
    </>
  )
}

export default index