import React from 'react'
import './Review.css'

function Review() {
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
