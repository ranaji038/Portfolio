import React from 'react'
import '../styles/projects.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import arrowlogo from '../assets/arrow.png'



const Projects = () => {
    
const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.opener = null;
    }
};
  return (
    <div>
         <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Gkart :Ecommerce Website</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => openInNewTab('https://github.com/ranaji038/Gkart-Ecommerce-Store')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => openInNewTab('https://gkart-ecommerce-store.onrender.com/')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                 src={project2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Chattifying : ChatApp</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => openInNewTab('https://github.com/ranaji038/Chat-App')}
               
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => openInNewTab('https://serene-kelpie-02d2a4.netlify.app/')}

              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project3}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Crypto Tracker</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => openInNewTab('https://github.com/ranaji038/Crypto-App')}
                
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => openInNewTab('https://crypto-app-p7te.onrender.com/')}

              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <a href="/#contact">
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

export default Projects