import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialFollow.css'

import {
   faTwitter,
   faInstagram,
   faFacebook
} from '@fortawesome/free-brands-svg-icons'

export default function SocialFollow() {
    return (
        <div className='social-icon-container'>

        <a href='twitter.com' className="twitter-handle">
          <FontAwesomeIcon icon={faTwitter} size='2x' />
        </a>

        <a href='instagram.com' className="instagram-handle">
          <FontAwesomeIcon icon={faInstagram} size='2x' />
        </a>

        <a href='www.facebook.com' className="facebook-handle">
          <FontAwesomeIcon icon={faFacebook} size='2x' />
        </a>

        
            
        </div>
    )
}

