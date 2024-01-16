import React from 'react'
import { motion } from 'framer-motion';


const ContactForm = () => {
    const children = {
        hidden: {
          opacity: 0,
          x: -200
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 2
          }
        }
      }
    return (
        <motion.div variants={children} className="form-container bg-white bg-opacity-10">
            <div className="form">
                <span className="heading">Get in touch</span>
                <input placeholder="Name" type="text" className="input" />
                <input placeholder="Email" id="mail" type="email" className="input" />
                <textarea placeholder="Your message..." rows={10} cols={30} id="message" name="message" className="textarea"></textarea>
                <div className="button-container">
                    <div className="send-button">Send</div>
                    <div className="reset-button-container">
                        <div id="reset-btn" className="reset-button">Reset</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactForm


