import React from 'react'
import "./HeroSection.css";
import SearchBar from './components/SearchBar';
import FirstName from './MOCK_DATA.json'





function HeroSection() {
    return (

        <div className='hero-container'>
          <div class='hero-text'>
          
             <h1 className="explore">Explore Places in Delta</h1>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ipsa maxime debitis quam possimus quaerat rem, dolorum voluptate minus quod ex veniam maiores? Nemo non consequatur expedita aspernatur ullam magni ipsam ratione officia quod numquam ex, aliquam accusantium consequuntur odio animi eveniet nesciunt voluptatibus possimus totam culpa dolor laboriosam voluptate.</p>
               
            <div className="App">
            <SearchBar placeholder="Find Destination" data={FirstName} />
          </div>
  
        </div>
           
   </div>



        
    )
}

export default HeroSection
