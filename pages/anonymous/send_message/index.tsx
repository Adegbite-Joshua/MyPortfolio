'use client'

import NavBar from '@/components/NavBar'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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

  const formatDateTime = (): string => {
    const currentDate: Date = new Date();

    const months: string[] = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];

    const day: number = currentDate.getDate();
    const monthIndex: number = currentDate.getMonth();
    const year: number = currentDate.getFullYear();
    const hour: number = currentDate.getHours();
    const minute: number = currentDate.getMinutes();

    const ampm: string = hour >= 12 ? 'pm' : 'am';
    const formattedHour: number = hour % 12 || 12;

    const daySuffix: string = getDaySuffix(day);

    const formattedDateTime: string = `${day}${daySuffix} of ${months[monthIndex]}, ${year} at ${formattedHour}:${padZero(minute)}${ampm}`;

    return formattedDateTime;
  };

  const getDaySuffix = (day: number): string => {
    if (day >= 11 && day <= 13) {
      return "th";
    }

    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const padZero = (number: number): string => (number < 10 ? `0${number}` : number.toString());


  const sendMessage = (e: any) => {
    e.preventDefault();
    try {
      const templateId = 'template_mhxy3pa'
      const serviceId = 'service_obropgn'
      const publicKey = '2P0O5etrdKlxjl8Zz'

      const templateParams = {
        message,
        date: formatDateTime()
      }
      console.log(templateParams);

      emailjs.send(serviceId, templateId, templateParams, publicKey)
      setMessage('');
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Error sending your message!');
      console.error('Error submitting form:', error);
    }
  }

  return (
    <>
      <NavBar />
      <ToastContainer position="top-right" className='p-2 h-12' autoClose={3000} hideProgressBar={false} />
      <motion.div variants={variants} initial='hidden' whileInView='show' className='h-full container mx-auto my-10'>
        <form onSubmit={sendMessage} className='w-5/6 md:w-3/6 mx-auto text-white bg-white bg-opacity-10 p-7 md:p-10 rounded-lg'>
          <h4 className='text-3xl text-center underline underline-offset-8 my-2'>Anonymous Chat</h4>
          <ol className=' list-disc'>
            <motion.li variants={children} className='font-bold'>Let's play and have fun!</motion.li>
            <motion.li variants={children} className='font-bold'>Send me a message, I won't know who sent</motion.li>
            <motion.li variants={children} className='font-bold'>Share your thoughts, and I'll keep it a secret if it's personal or confidential</motion.li>
          </ol>
          <motion.div variants={children}>
            <label htmlFor="">Message</label>
            <textarea required value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" autoFocus className=' w-full h-48 bg-transparent border-2 border-white p-2 outline-0 rounded-lg' placeholder='Enter your message...'></textarea>
          </motion.div>
          <motion.div variants={children} className="flex gap-2">
            <button type='submit' disabled={message.trim() == ''} className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-md text-center  basis-full md:basis-4/6">Send</button>
            <div className="basis-full md:basis-2/6">
              <button id="reset-btn" disabled={message == ''} type='button' onClick={() => setMessage('')} className="bg-red-500 hover:bg-red-600 p-3 rounded-md text-center w-full">Reset</button>
            </div>
          </motion.div>
        </form>
      </motion.div>
    </>
  )
}

export default index