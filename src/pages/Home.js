import React, { useEffect, useState } from "react";
import "../AppApp.css";
import Cards from "../components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../HeroSection";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";

const Home = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const getLocations = async () => {
      let { data } = await axios.get(
        "https://deltour.herokuapp.com/api/v1/destinations/all"
      );
      console.log(data.data);
      setLocations(data.data);
    };
    getLocations();
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards locations={locations} />
      <br />
      <br />

    
    </div>
  );
};

export default Home;
