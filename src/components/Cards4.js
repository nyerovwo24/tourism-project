import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
//import StarRating from './StarRating';

function Cards4() {
    return (
        <>
        
        <section className="cards">
           <h3 className="heading_trend">More Places to Explore</h3>
              <div className="container card-wrap">
                 <div className="row card-card">
                     <div className="col-4">
                        <CardItem 
                        src="images/River-Ethiope.png" 
                        text="Ethiope River" 
                        label="Ethiope River" 
                        location="Umuaja Ukwuani Local Government Area"
                        path="/home"
                        />
                        <img className="star-img-card2" src='images/FullStar.png' alt='star' />
                     </div>
                     <div className="col-4">
                           <CardItem 
                           src="images/LanderBrother.png" 
                           text=" Umuonaje Nnebisi Road Asaba" 
                           label="Mongo Park House" 
                           location=" Nnebisi Road Asaba"
                           path="/home"
                           />
                           <img className="star-img-card2" src='images/Star-1.png' alt='star' />
                     </div>
                     <div className="col-4">
                        <CardItem 
                        src="images/NelsonMandela.png" 
                        text="Nelson Mandela Garden" 
                        label="Nelson Mandela Garden" 
                        location=" Asaba International Airport"
                        path="/home"

                        />
                        <img className="star-img-card2" src='images/FullStar.png' alt='star' />
                     </div>
                 </div>
              </div>   
         </section>
         
                  
              
          </>    
    )
}

export default Cards4
