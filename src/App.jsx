import React from 'react';
import './app.css';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <div>
    
<NavBar />
  <Home />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
    </div>
  );
}

export default App;
