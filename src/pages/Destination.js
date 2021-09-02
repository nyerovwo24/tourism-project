import React, { useEffect, useState } from 'react'
import {
    useParams
  } from "react-router-dom";  
import Cards3 from '../components/Cards3'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards4 from '../components/Cards4';
import Navbar2 from '../components/Navbar/Navbar2';
import axios from 'axios';
//import SearchBar2 from '../components/Searchbar2';
//import NameData from '../MOCK_DATA.json'
//import '../components/Search.css'


const Destinations = () => {
    const [locations, setLocations] = useState('');
    let { id } = useParams();
    const getLocations = async () => {
      let { data } = await axios.get(
        `https://deltour.herokuapp.com/api/v1/destinations/one/${id}`          
      );
      console.log(data.data);
      setLocations(data.data);
    };

    useEffect(() => {
      console.log('call');
      getLocations();
    }, [id]);


    return (
       <React.Fragment>
            <Navbar2 locations={locations}/>   
           <Cards3 locations={locations}/>
           <Cards4 locations={locations}/>
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