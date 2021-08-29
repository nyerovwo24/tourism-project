import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Btn from './Btn'
import StarRating from './StarRating';


function Cards2() {
    return (
       <>
        <section className="cards">
           <h3 className="heading_trend-2">Places To Explore</h3>
              <div className="container card-wrap">
                 <div className="row card-card">
                     <div className="col-4">
                        <CardItem 
                        src="images/AbrakaTurfCountry.png" 
                        text="Abraka Turf & Country Club" 
                        label="Abraka Turf & Country Club"
                        location="Sapele-Agbor Road Oria Abraka"
                        path="/home"
                        />
                        <StarRating />
                     </div>
                     <div className="col-4">
                           <CardItem 
                           src="images/ParkVegaWaterpark.png" 
                           text="Park Vega Waterpark" 
                           label="Park Vega Waterpark" 
                           location="Ewuru Road Off Benin-Asaba Expressway"
                           path="/home"
                           />
                           <StarRating />
                     </div>
                     <div className="col-4">
                        <CardItem 
                        src="images/TheNanaPalace.png" 
                        text="The Nana’s Palace" 
                        label="The Nana’s Palace" 
                        location="Koko Warri-North Local Government"
                        path="/home"
                        />
                        <StarRating />
                     </div>
                    
                 </div>


                 <div className="row card-card">
                     <div className="col-4">
                        <CardItem 
                        src="images/RoyalPlaceIdumuje.png" 
                        text="Royal Palace Idumuje-Ugboko" 
                        label="Royal Palace Idumuje-Ugboko" 
                        location="Idumuje-Ugboko Aniocha North LGA"
                        path="/home"
                        />
                        <StarRating />
                     </div>
                     <div className="col-4">
                           <CardItem 
                           src="images/OlonaRanchHolidayResort.png" 
                           text="Olona Ranch & Holiday Resort" 
                           label="Olona Ranch & Holiday Resort" 
                           location="Onicha-Olona Vertinary St Asaba"
                           path="/home"
                           />
                           <StarRating />
                     </div>
                     
                     <div className="col-4">
                        <CardItem 
                        src="images/BomadiBeachPartyResort.png" 
                        text="Bomadi Beach Party Resort" 
                        label="Bomadi Beach Party Resort" 
                        location="Bomadi Bayelsa Niger Delta"
                        path="/home"
                        />
                        <StarRating />
                     </div>
                  
                 </div>
              </div>   

              <div>
           <Btn />
             </div>
              </section>
             
          </>    
    )
}

export default Cards2
