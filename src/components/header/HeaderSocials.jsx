import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/andres-soibelzon-06b14b191/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/andressoibelzon' target="_blank"><GoMarkGithub /></a>
    </div>
  )
}

export default HeaderSocials