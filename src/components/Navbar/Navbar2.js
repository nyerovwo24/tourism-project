import React from 'react';
import { Nav, NavLink, NavMenu, } from './NavbarElements';
import './navbar2.css'

function Navbar2() {
    return (
            <Nav className='navbar--2'>
               <NavLink to='/' exact>
                  <img src="/images/TourDelta.png" alt="TourDelta" style={{marginLeft: '-65px'}} />
                  <h1 style={{fontFamily: 'Poppins', fontSize: '40px', fontWeight: '900'}}><strong style={{color: 'rgba(45, 53, 65, 1', fontWeight: '700'}}>Tour</strong>Delta</h1>
               </NavLink>
               <NavMenu>
                   
                   <NavLink to="/about" activeStyle>
                    Destination
                   </NavLink>
                   <NavLink to="/blog" activeStyle>
                    About
                   </NavLink>
                   <NavLink to="/contact" activeStyle>
                    Contact
                   </NavLink>
               </NavMenu>
                    <div className="form-outline" style={{display: 'flex', alignItems: 'center', marginLeft: '0px' }}>
                    <button type="button" className="btn btn-primary" style={{height: '34px', width: '40px'}}>
                        <i class="fas fa-search"></i>
                    </button>
                        <input id="search-focus" type="search" className="form-control" placeholder='Find Destination' style={{paddingRight: '90px', paddingLeft: '10px'}} />
                    </div>
</Nav>
    );
};

export default Navbar2;


