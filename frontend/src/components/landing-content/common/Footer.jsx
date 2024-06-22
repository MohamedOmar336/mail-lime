import React from 'react'
import '../../../styles/components/landing-content/common/Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import MainLogo from '../../../assets/common/main-logo.png'
const Footer = () => {
  return (
    <footer className='bs-container-fluid bs-py-4'>
      <div className='bs-container'>
        <div className='bs-row bs-justify-content-between'>
          <div className='bs-col-md-4 bs-col-xl-3  bs-d-flex bs-flex-column'>
            <img src={MainLogo} alt="" width={'75%'} />
            <p className='footer-text bs-mt-4'>In the new era of technology we look in the future with certainty and pride to and for our company</p>
          </div>
          <div className='bs-col-md-3 bs-col-lg-2'>
            <p className='footer-list-name'>Pages</p>
            <ul className='footer-list'>
              <li><a className='footer-link' href="">About Us</a></li>
              <li><a className='footer-link' href="">Company Values</a></li>
              <li><a className='footer-link' href="">Become A Partner</a></li>
              <li><a className='footer-link' href="">Contact Us</a></li>
            </ul>
          </div>
          <div className='bs-col-md-3 bs-col-lg-2'>
            <p className='footer-list-name'>Utilities</p>
            <ul className='footer-list'>
              <li><a className='footer-link' href="">Support</a></li>
              <li><a className='footer-link' href="">The Studio</a></li>
              <li><a className='footer-link' href="">Enterprise</a></li>
              <li><a className='footer-link' href="">Our Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyrights bs-mt-5'>
        <div className='bs-container'>
          <div className='bs-row bs-justify-content-between bs-align-items-center'>
            <p className='bs-col-md-8'>Copyright © 2023 Mail Lime is registered brand by Dijital Bloks Ltd. All Rights Reserved</p>
            <ul className='footer-social-links bs-col-md-3 bs-col-xl-2'>
              <li><a className='footer-social-link' href=""><FontAwesomeIcon className='footer-social-icon' icon={faFacebookF} /></a></li>
              <li><a className='footer-social-link' href=""><FontAwesomeIcon className='footer-social-icon' icon={faTwitter} /></a></li>
              <li><a className='footer-social-link' href=""><FontAwesomeIcon className='footer-social-icon' icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer