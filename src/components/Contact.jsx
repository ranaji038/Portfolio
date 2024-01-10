import React from 'react'
import '../styles/contact.css'
import linkedinlogo from '../assets/linkedin.png'
import emaillogo from '../assets/email.png'
const Contact = () => {
  return (
    <div>
 <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emaillogo}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:pranawat2002@gmail.com">pranawat2002@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedinlogo}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/prashant-ranawat">LinkedIn</a></p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact