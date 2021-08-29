import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
   background: #ffffff;
   height: 80px;
   display: flex;
   justify-content: space-between;
   padding: 0.5rem calc((100vw - 1000px) / 2);
   z-index: 10;
`

export const NavLink = styled(Link)`
color: skyblue;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
   color: rgba(47, 128, 237, 1);
}
`

export const Bars = styled(FaBars)`
display: none;
color: black;

@media screen and (max-width: 768px) {
   display: block;
   position: absolute;
   top: 0;
   right: 0;
   transform: translated(-100%, 75%);
   font-size: 1.8rem;
   cursor: pointer;
}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
font-size: 15px;

@media screen and (max-width: 768px) {
   display: none;
}
`

export const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 0px;
color: skyblue;

@media screen and (max-width: 768px) {
   display: none;
}
`
  
export const NavBtnLink = styled(Link)`
border-radius: 12px;
background: #6495ED;
padding: 10px 22px;
padding-right: 60px;
padding-left: 60px;
color: skyblue;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;



`


