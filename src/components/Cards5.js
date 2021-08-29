import React from 'react'
import './Cards5.css'

function Cards5() {
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
                           <input 
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
                    <input 
                    type='date' 
                    className='' 
                    placeholder='DD/MM/YYYY' 
                    onfocus="(this.type='date')"
                    name='check-in' 
                     />
                 </div>
                 </div>

                 <div className='col-6 check-out-1'>
                 <div className='check-out'>
                <label className='check-out-form'>Check Out</label><br />
                <input 
                type='date' 
                className='' 
                placeholder='DD/MM/YYYY' 
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
                    <input 
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
                <input 
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
                    <button className='ticket-book'>Book Ticket</button>
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
