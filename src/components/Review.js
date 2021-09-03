import React from 'react'
import  { useEffect, useState } from 'react'
import {
 useParams
 } from "react-router-dom";  
import './Review.css'
import axios from 'axios';

function Review() {
   
    const [locations, setLocations] = useState('');
    let { id } = useParams();
    const getLocations = async () => {
      let { data } = await axios.get(
        `https://deltour.herokuapp.com/api/v1/destinations/reviews/create/${id}`          
      );
      console.log(data.data);
      setLocations(data.data);
    };

    useEffect(() => {
      console.log('call');
      getLocations();
    }, [id]);

    return (
        <div className="container reviews">
        <section className='row review-rating'>
        <div className='col-4 review-rate'>
           <h1>Reviews</h1>
           <h1>4.0</h1>
           <img className="star-img" src='images/starstar.png' alt='star' />
           <h3>Based on 23 reviews</h3>
           
        </div>

        <div className='col-4 review-grade'>
           <p>Excellent</p>
           <p>Very Good</p>
           <p>Average</p>
           <p>Below Average</p>
           <p>Poor</p>
        </div>

        <div className='col-4 review-img'>
           <img className='excel-img' src='images/Excellent.png' alt='Excellent' />
           <img className='good-img' src='images/Good.png' alt='Good' />
           <img className='average-img' src='images/Average.png' alt='Average' />
           <img className='belAve-img' src='images/BelowAverage.png' alt='Below Average' />
           <img className='poor-img' src='images/Poor.png' alt='poor' />
        </div>
      </section>

        </div>
    )
}

export default Review
