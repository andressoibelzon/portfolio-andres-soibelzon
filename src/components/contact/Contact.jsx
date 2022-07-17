import React from 'react'
import './contact.css'
import {MdOutlineMail} from  'react-icons/md'
import {ImLinkedin2} from 'react-icons/im'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v78td88', 'template_i04jon5', form.current, 'OAbclEWlZOzpIGYf-') 
      .then((result) => {
          alert("Email Sent 😃 ");
          document.getElementById("message").value = "";
          document.getElementById("text").value = "";
          document.getElementById("name").value = "";

      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    <section id='contact'>
      {/*<h5>Get In Touch</h5>*/}
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a href='mailto:a.soibelzon@gmail.com' target="_blank" className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>a.soibelzon@gmail.com</h5>
          </a>
          <a href='https://www.linkedin.com/in/andres-soibelzon-06b14b191/' target="_blank" className="contact__option">
            <ImLinkedin2 className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>andres-soibelzon-06b14b191</h5>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5491165708981" target="_blank" className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+5491165708981</h5>
            </a>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" id='text' name='name' placeholder='Your Full Name' required />
          <input type="email" id='name' name='email' placeholder='Your Email' required />
          <textarea name="message" id="message" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
      </div>
    </section>
  )
}

export default Contact