import React from 'react'
import "./HeroSection.css";
import SearchBar from './components/SearchBar';
import FirstName from './MOCK_DATA.json'





function HeroSection() {
    return (

        <div className='hero-container'>
          <div class='hero-text'>
          
             <h1 className="explore">Explore Places in Delta</h1>
             <p>Tour Delta is a State own tour operator offering tourists amazing African safari vacation trips and one-on-one experience in Delta state with Resort locations and historic mountain, as well as African most appreciated sites.
             - We specialize in Great Historic sites and Resort tours in Delta State that can be custom designed to suit your desire and requirement for an unequaled experience in The Big Heart of Nigeria, Delta State.
             </p>
               
            <div className="App">
            <SearchBar placeholder="Find Destination" data={FirstName} />
          </div>
  
        </div>
           
   </div>



        
    )
}

export default HeroSection
