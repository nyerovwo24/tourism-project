
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards4 from '../components/Cards4';
import Cards5 from '../components/Cards5';
import Navbar2 from '../components/Navbar/Navbar2';
import React, { useEffect, useState } from 'react'
import {
    useParams
  } from "react-router-dom";  
  import axios from 'axios';


const About = () => {
    
  const [locations, setLocations] = useState('');
  let { id } = useParams();
  const getLocations = async () => {
    let { data } = await axios.post(
      `https://deltour.herokuapp.com/api/v1/destinations/one/${id}`          
    );
    console.log(data.data);
    setLocations(data.data);
  };

  useEffect(() => {
    console.log('call');
    getLocations();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

    return (

      <React.Fragment>
      <Navbar2 />   
      <Cards5 locations={locations}/>
        <Cards4 />
      
     </React.Fragment>


       
    )
}

export default About


