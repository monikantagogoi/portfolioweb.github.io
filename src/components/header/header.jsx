import React from 'react'
import './header.css';
import CTA from './cta'
import Me from '../../assets/me-111.jpg';
import HeaderSocials from './headerSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>MKG</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={Me} alt='me'></img>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header