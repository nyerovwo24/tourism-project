import React from 'react'
import Cards3 from '../components/Cards3'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards4 from '../components/Cards4';
import Navbar2 from '../components/Navbar/Navbar2';
//import SearchBar2 from '../components/Searchbar2';
//import NameData from '../MOCK_DATA.json'
//import '../components/Search.css'


const Destinations = () => {
    return (
       <React.Fragment>
            <Navbar2 />   
           <Cards3 />
           <Cards4 />
    </React.Fragment>
    )
}

export default Destinations



// display: grid;
//      align-items: center;
//      justify-content: flex-end;
//      padding-left: -15px;
//      padding-right: -15px;
//      margin-right: -50px;