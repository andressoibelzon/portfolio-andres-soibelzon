import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portf/Portfolio'
import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';



function App() {
  return (
    <>
          <Fade bottom>
      <Header />
      </Fade>
      <Nav />
      <Fade bottom>
      <About />
      </Fade>
      {/*<Experience />*/}
      {/*<Services />*/}
      <Fade bottom>
      <Portfolio />
      </Fade>
      {/*<Testimonials />*/}
      <Fade bottom>
      <Contact />
      </Fade>
      <Footer />
    </>
  )
}

export default App;
