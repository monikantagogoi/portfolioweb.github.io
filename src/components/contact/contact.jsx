import React from 'react'
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dhi6j2f', 'template_h7sqyu8', form.current, 'u90uUWro8J4NDjl7l')
    e.target.reset()
      
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>monikant88@gmail.com</h5>
            <a href="mailto:monikant88@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>mkgtutorials</h5>
            <a href='https://m.me/monikt.gogoi' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Click below the Link</h5>
            <a href='https://api.whatsapp.com/send?phone+916000286316' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Enter your full name' required />
          <input type='email' name='email' placeholder='Enter your email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required> </textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact