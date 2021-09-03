
import React from 'react'
import './Cards5.css'
import axios from 'axios'
import  { useState } from 'react'






function Cards5() {
  const [ destination, setDestination] = useState();
  const [ checkIn, setCheckIn] = useState();
  const [ checkOut, setCheckOut] = useState();
  const [ people, setPeople] = useState();
  const [ email, setEmail] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
  const bookTicket = {destination, checkIn, checkOut, people, email}
  console.log(bookTicket);
  }
  
    axios.post('https://deltour.herokuapp.com/api/v1/destinations/book',{
      destination,
      checkIn,
      checkOut,
      people,
      email,
    })
    .then((res) => {
      console.log('bookTicket')
    })
    .catch(err=> {
      console.log(err)
    });
  



    return (
     <div className='container'>
        <section className="row ">
           <div className="col-6">
             <div className='wrapper'>
               <div className='form-wrapper'>
                   <form>
                     <div className='col-12'>
                       <div className='destination'>
                         <label className='Destination'>Destination</label><br />
                           <input onChange={e => setDestination(e.target.value)}
                            type='text' 
                            className='' 
                             placeholder='The Mongo Park House' 
                            name='destination'
                            />
                          
                          
                       </div>
                      </div>
 
              <section>
                   <div className="row check-check">
                   <div className='col-6 check-in-1'>
                     <div className='check-in-form'>
                    <label className='check-in'>Check In</label><br />
                    <input onChange={e => setCheckIn(e.target.value)}
                    type='date' 
                    className='' 
                    placeholder='date' 
                    onfocus="(this.type='date')"
                    name='check-in' 
                     />
                 </div>
                 </div>

                 <div className='col-6 check-out-1'>
                 <div className='check-out-form'>
                <label className='check-out'>Check Out</label><br />
                <input onChange={e => setCheckOut(e.target.value)}
                type='date' 
                className='' 
                placeholder='date' 
                onfocus="(this.type='date')"
                name='check-out' 
                 />
             </div>
             </div>
                 </div>
                 </section>

                 <section>
                   <div className="row resident-email">
                   <div className='col-6 resident-1'>
                     <div className='resident'>
                    <label className='resident-form'>Resident</label><br />
                    <input onChange={e => setPeople(e.target.value)}
                    type='people' 
                    className='' 
                    placeholder='_Adult_Children' 
                    name='destination' 
                     />
                 </div>
                 </div>

                 <div className='col-6 email-1'>
                 <div className='e-mail'>
                <label className='e-mail-form'>E-Mail</label><br />
                <input onChange={e => setEmail(e.target.value)} 
                type='email' 
                className='' 
                placeholder='email address' 
                name='e-mail' 
                 />
             </div>
             </div>
                 </div>
                 </section>

                 <section className='row ticket-row'>
                  <div className='col-12 ticket-book-1'>
                    <button onClick={handleSubmit} className='ticket-book' type='submit'>Book Ticket</button>
                  </div>
                  </section>
              </form>

              <section className='row atm-receipt-phone'>
                <div className='col-3 we-accept'>
                   <h3>We Accept</h3>
                </div>

                <div className='col-3 atm-card'>
                   <img src='images/Atm2.png' alt='Atm' />
                </div>

                <div className='col-3 atm-receipt'>
                   <img src='images/Atm-receipt.png' alt='Atm-receipt' />
                </div>

                <div className='col-3 atm-phone'>
                   <img src='images/Atm-phone.png' alt='Atm-phone' />
                </div>
              </section>


              </div>
           </div>
        </div>

        <div className="col-6 ">
              <img src='images/MongoPark4.png' alt='Mongo park House' />
        </div>
        
    </section>

    
        


        </div>
    )
}

export default Cards5
