import React from 'react'
import '../styles/skills.css'
import checkmark from "../assets/checkmark.png";
import arrowlogo from '../assets/arrow.png'

const skills = () => {
  return (
    <div>
<section id="skills">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">skills</h1>
      <div className="skills-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="skills-sub-title">Technical Skills</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>NodeJs</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>ExpressJs</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>MongoDB</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>MySQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>C/C++</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>Redux</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>Git/GitHub</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="skills icon"
                  className="icon"
                />
                <div>
                  <h3>VSCode</h3>
                  <p>Intermediate</p>
                </div>
              </article>

            </div>
          </div>
       </div>
      </div>
      <a href="/#projects">
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

export default skills