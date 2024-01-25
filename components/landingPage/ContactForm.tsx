import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';



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

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values) => {
      try {
        const templateId = 'template_hq5013g'
        const serviceId = 'service_1kutxo3'
        const publicKey = 'cOM-bZ8-SyZERmUqo'

        const responseTemplateId = 'template_wwp12vd'
        const responseServiceId = 'service_7xmouhq'
        const responsePublicKey = 'cOM-bZ8-SyZERmUqo'



        const templateParams = {
          senderName: values.name,
          senderEmail: values.email,
          toName: 'Josha Adegbite',
          message: values.message
        }

        const responseTemplateParams = {
          senderName: values.name,
          senderEmail: values.email,
          toName: 'Josha Adegbite',
          message: values.message
        }

        // emailjs.send(serviceId, templateId, templateParams, publicKey)
        // emailjs.send(responseServiceId, responseTemplateId, responseTemplateParams, responsePublicKey)

        toast.success('Form submitted successfully!');
        // formik.resetForm();
      } catch (error) {
        toast.error('Error submitting form!');
        console.error('Error submitting form:', error);
      }
    },
  });
  return (
    <>
      <motion.div variants={children} className="order-2 md:order-none form-container bg-white bg-opacity-10">
        <form onSubmit={formik.handleSubmit} className="form">
          <span className="heading">Get in touch</span>
          <input
            placeholder="Name"
            id='name'
            name='name'
            type="text"
            className="input my-2"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.name && formik.errors.name && <p className='text-red-500 my-0'>{formik.errors.name}</p>}
          <input
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            className="input my-2"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email && <p className='text-red-500 my-0'>{formik.errors.email}</p>}
          <textarea
            placeholder="Your message..."
            rows={10}
            cols={30}
            id="message"
            name="message"
            className="textarea my-2"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></textarea>
          {formik.touched.message && formik.errors.message && <p className='text-red-500 my-0'>{formik.errors.message}</p>}
          <div className="button-container">
            <button type='submit' className="send-button">Send</button>
            <div className="reset-button-container">
              <button id="reset-btn" type='button' onClick={() => formik.resetForm()} className="reset-button">Reset</button>
            </div>
          </div>
        </form>
      </motion.div>
      <ToastContainer position="top-right" className='p-2 h-12' autoClose={3000} hideProgressBar={false} />
    </>
  )
}

export default ContactForm


