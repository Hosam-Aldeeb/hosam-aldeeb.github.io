import React from 'react'
import'./contact.css'
import {MdEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qjv19rf', 'template_v49rfy7', form.current, 'K8Xaq-p8Wseogtc3Y')
    e.target.reset()
  };
  return (
  
    <section id='contact'>
    <div className="container contact__container">
    <div className='contacttitle'>
      <h1> Contact Me!</h1>
      </div>
      <div className='contactsentence'>
      <h3> Thank you for your interest in getting in touch with me. Please send your message here, and I will reply as soon as possible!</h3>
      </div>
      <div className='contact__container2'>
      <div className='contactemail'>
      <ol>
        <MdEmail className='emailicon'/>
       <h4>Email</h4>
       <h5>Haaldeeb@uwaterloo.ca</h5> 
       <a href='mailto:haaldeeb@uwaterloo.ca'target='_blank'> Send an email</a>
       </ol>
      </div>
    <div className='contactform'>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder=' Your Name' required />
      <input type='email' name='email' placeholder=' Your Email' required/>
      <textarea name='message' rows='7'placeholder='Your Message' required></textarea>
      <button type='submit' className='btnmessage'> Send Message</button>
    </form>
      </div>

      </div>
      </div>
      </section>
  )
}

export default Contact