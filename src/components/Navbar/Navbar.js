import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

function Navbar() {
    return (
        <>
            <Nav>
               <NavLink to='/' exact>
                  <img src="/images/TourDelta.png" alt="TourDelta" style={{marginLeft: '-65px'}} />
                  <h1 style={{fontFamily: 'sans-serif', fontSize: '40px'}}><strong style={{color: 'rgba(45, 53, 65, 1'}}>Tour</strong>Delta</h1>
               </NavLink>
               <Bars />
               <NavMenu>
                   <NavLink to="/destinations" activeStyle>
                   Destinations
                   </NavLink>
                   <NavLink to="/about" activeStyle>
                    About
                   </NavLink>
                   <NavLink to="/blog" activeStyle>
                    Blog
                   </NavLink>
                   <NavLink to="/contact" activeStyle>
                    Contact
                   </NavLink>
               </NavMenu>
               <NavBtn  style={{marginTop: '5px', borderRadius: '16px', color: 'rgba(47, 128, 237, 1)', marginLeft: '60px'}}>
               <NavBtnLink style={{fontSize: '16px', fontWeight: '700', fontStyle: 'normal', fontFamily: 'Poppins', lineHeight: '20px', color: 'rgba(255, 255, 255, 1)', paddingLeft: '70px', paddingRight: '70px'}} to='book-ticket'>Book Ticket</NavBtnLink>
             </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar


