import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {
    faTwitter,
    faInstagram,
    faFacebook
 } from '@fortawesome/free-brands-svg-icons'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import '../components/SocialFollow2.css'
 

const Contact = () => {
    return (
        <div>
        <Navbar />
        <h1 style={{marginBottom: '20px'}}>Contact Us</h1>

        <div className='social-icon-container social-cost'>
        <ul>

        <li>
        <a href='twitter.com' className="twitter-handle">
          <FontAwesomeIcon icon={faTwitter} size='2x' />
        </a>
        </li>
         
        <li>
        <a href='instagram.com' className="instagram-handle">
          <FontAwesomeIcon icon={faInstagram} size='2x' />
        </a>
        </li>
          
        <li>
        <a href='www.facebook.com' className="facebook-handle">
          <FontAwesomeIcon icon={faFacebook} size='2x' />
        </a>
        </li>

        </ul>

        </div>
        
        </div>
    )
}

export default Contact