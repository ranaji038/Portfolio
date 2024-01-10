import React from 'react'
import "../styles/home.css"
import profilePicture from "../assets/profile-pic.png"
import LinkedInIcon from "../assets/linkedin.png"
import githubIcon from "../assets/github.png"
import LeetcodeIcon from "../assets/leetcode.png"
import gfgIcon from "../assets/gfg.png"

const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank');
        if (newWindow) {
          newWindow.opener = null;
        }
    }
const Home = () => {

  return (
    <div className='home'>
          <section id="home">
      <div className="section__pic-container">
        <img src={profilePicture} alt="Profilepicture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Prashant Singh Ranawat</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => openInNewTab('https://drive.google.com/file/d/1t6uRcId8Aw4V_69i-vBgLjqwgBAzRM44/view?usp=sharing')}
          >
            Download CV
          </button>
          <button className="btn btn-color-1" href="#contact">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
       

          <img
            src={LinkedInIcon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => openInNewTab('https://www.linkedin.com/in/prashant-ranawat')}
          />

      <img
            src={LeetcodeIcon}
            alt="My Leetcode profile"
            className="icon"
            onClick={() => openInNewTab('https://leetcode.com/prashant_38/')}

          />
           <img
            src={gfgIcon}
            alt="My gfg profile"
            className="icon"
            onClick={() => openInNewTab('https://auth.geeksforgeeks.org/user/mailforranaji')}

          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={() => openInNewTab('https://github.com/ranaji038')}

          />


        </div>
      </div>
    </section>
    </div>
  )
}

export default Home