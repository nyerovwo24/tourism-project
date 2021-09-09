import React from 'react'
import './Footer.css';
import styled from 'styled-components';
import SocialFollow from './SocialFollow';



function Footer() {
    const playStore = 'https://play.google.com/store/apps';
    return (
        <FooterContainer className='main-footer'>
         <div className='footer-middle'> 
               <div className='container-fluid footer-wrapper'>
                 <div className='row footer-row'>
                     <div className='col-sm-4 footer-header-text'>
                        <h4 style={{marginLeft: '18px'}}>About TourDelta</h4>
                          <ul className='list-unstyled'>
                             <li>Tour Delta is a State own tour operator offering tourists amazing African safari vacation trips and one-on-one experience in Delta state with Resort locations and historic mountain, as well as African most appreciated sites.
                             - We specialize in Great Historic sites and Resort tours in Delta State that can be custom designed to suit your desire and requirement for an unequaled experience in The Big Heart of Nigeria, Delta State.
                             </li>
                          </ul>
                     </div>

                     <div className='col-sm-2 offset-2 footer-header-text'>
                     <h4 style={{marginLeft: '10px'}}>Quick Links</h4>
                       <ul className='list-unstyled'>
                          <li><a href='/destinations'>Destinations</a></li>
                          <li><a href='/about'>About</a></li>
                          <li><a href='/blog'>Blog</a></li>
                          <li><a href='/contact'>Contact</a></li>
                       </ul>
                  </div>

                  <div className='col-sm-3 offset-1 footer-header-text'>
                        <h4 style={{marginLeft: '18px'}}>Our Social Handles</h4>
                          <ul className='list-unstyled footer-socials'>
                             <li>Follow us on social handles for live update on our activities</li>
                            <SocialFollow />
                             
                             
                          </ul>
                     </div>
                 </div>
                       
                     <div className='footer-bottom'>
                        <div className='download-text'>
                           <h1 style={{color: 'rgba(255, 255, 255, 1)', fontFamily: 'Poppins', fontWeight: '600', fontStyle: 'normal', fontSize: '32px', marginBottom: '10px' }}>Download TourDelta App</h1>
                       </div>
                       <div className='download-btn'>
                            <img onClick={playStore} src='images/playstore.png' alt='' />
                            <img src='images/applestore.png' alt='' />
                       </div>
                         <p style={{fontFamily: "Poppins", fontWeight: '400', fontStyle: 'normal', fontSize: '14px'}} className='text-xs-center' >
                         Delta state Tourism  &copy;{new Date().getFullYear()} All Rights Reserved
                         </p>
                     </div>
               </div>
            </div>
            </FooterContainer>
        
    )
}

export default Footer


const FooterContainer = styled.footer`
 .footer-middle {
     background: var(--mainBlue);
     padding-top: 100px;
     color: var(--mainWhite);
 }

 .footer-bottom {
     padding-top: 80px;
     padding-bottom: 10px;

 }

 ul li a {
     color: var(--mainWhite);
      font-size: 12px;
 }

 .col-sm-4 h4 {
    font-size: 15px;
    font-weight: bolder;
    
 }

 .col-sm-4 ul p {
     width: 280px;
     font-size: 12px;
     font-weight: lighter;
     font-family: Arial, Helvetica, sans-serif;;
 }

 .col-sm-4 {
     padding-left: 50px;
     
     
     .row {
         
     }

     
     
     
 }

`;
