import React, { useState, useEffect } from 'react'
import './Review.css'
import axios from 'axios';
// import {
//    useParams
//  } from "react-router-dom";  



function Review() {
   const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      let { data } = await axios.get(
        "https://deltour.herokuapp.com/api/v1/destinations/reviews/all/"
      );
      console.log(data.data);
      setReviews(data.data);
    };
    getReviews();
  }, []);
    return (
        <div className="container reviews">
        <section className='row review-rating'>
        {reviews.map((reviews) => (
        <div className='col-4 review-rate'>
        <img src={reviews.avatar[0]} alt='' />
         <h5>{reviews.date}</h5>
         <h3>{reviews.name}</h3>
         <p>{reviews.review}</p>
         <p>{reviews.star}</p>
         
          
         
           
           
           
        </div>
        ))}
      </section>

        </div>
    )
}

export default Review
