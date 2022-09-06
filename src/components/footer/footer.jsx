import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FiTwitter} from 'react-icons/fi'
const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>MKG</a>
        <ul className='permalinks'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#testimonials'>Testimonials</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div className='footer__socials'>
          <a href='https://facebook.com'><FaFacebookF /></a>
          <a href='https://instagram.com'><GrInstagram /></a>
          <a href='https://twitter.com'><FiTwitter /></a>

        </div>
        <div className='footer__copyright'>
          <small>&copy; MKG Tutorials. All rights reserved.</small>
        </div>

    </footer>
  )
}

export default footer