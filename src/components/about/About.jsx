import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FiAward } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { FiFolderPlus } from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
          </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year of Experience</small>
            </article>

            <article className='about__card'>
              <FiFolderPlus className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
            </div>

            <p>
            Team working, optimism and proactivity are necessary behaviours to optimize and succed in daily challenges. I have a constant search to improve in my personal and working life, with goals to reach. My working experience strengthen to become a person who is totally comitted in daily work and attemp to give the best. 
            </p>

            <a href='#contact' className='btn btn-primary'>Let's talk</a>

        </div>
      </div>
    </section>
  )
}

export default About