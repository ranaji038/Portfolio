import React from 'react'
import '../styles/about.css'
import profilepic from '../assets/dp3.png'
import edulogo from '../assets/education.png'
import arrowlogo from '../assets/arrow.png'
const About = () => {

   
  return (
    <div >
  <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={profilepic}
            alt="Profilepicture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
                      <div className="details-container">
              <img
                src={edulogo}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p id='heading'>Bachelor of Technology in Computer Engineering<br />IIIT Bhubaneswar(2020 - 2024)</p>
            </div>
          </div>
          <div className="text-container">
            <p>
            I am a passionate Computer Engineering graduate from the International Institute of Information Technology, Bhubaneswar, driven by a love for technology and innovation. With a keen interest in crafting seamless user experiences, I specialize in full-stack development, leveraging the MERN stack to create efficient and secure web applications.My dedication to problem-solving and competitive programming has earned me accolades in coding competitions and active contributions to the tech community. Equipped with a diverse skill set encompassing languages, frameworks, and tools, I aim to continue my journey of creating impactful solutions and pushing the boundaries of technology.
            </p>
          </div>
        </div>
      </div>
      <a href="/#skills">
        <img
          src={arrowlogo}
          alt="Arrow icon"
          className="icon arrow"
        />
      </a>
    </section>

    </div>
  )
}

export default About