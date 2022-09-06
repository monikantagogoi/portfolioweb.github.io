import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';
import {ImFacebook2} from 'react-icons/im';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com' target="_blank"><FaGithub /></a>
        <a href='https://dribbble.com' target="_blank"><FiDribbble /></a>
        <a href='https://facebook.com' target="_blank"><ImFacebook2 /></a>
    </div>
  )
}

export default HeaderSocials;