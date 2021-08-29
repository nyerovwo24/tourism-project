import React from 'react'
import './Cards2.css'
import StarRating from './StarRating';
import MapMarker from './MapMarker';
import Review from './Review';
import { NavBtn, NavBtnLink } from './Navbar/NavbarElements';
import '../components/Search.css'




function Cards3() {

    const imgPath = process.env.PUBLIC_URL;

  return (
    <div className='container'>
    <section className="row">
        <div className="col-12 mongopark-wrapper">
              <img src={`${imgPath}./images/mongopark.png`} alt="" />
        </div>
    </section>
    <section className="row">
        <div className="col-2">
            <img src={`${imgPath}./images/card6-1.png`} alt="" />
        </div>
        <div className="col-2">
          <img src={`${imgPath}./images/card6-2.png`} alt="" />
        </div>
        <div className="col-2">
           <img src={`${imgPath}./images/card6-3.png`} alt="" />
        </div>
        <div className="col-2">
          <img src={`${imgPath}./images/card6-4.png`} alt="" />
        </div>
        <div className="col-2">
            <img src={`${imgPath}./images/card6-5.png`} alt="" />
        </div>
        <div className="col-2">
        <img src={`${imgPath}./images/card6-6.png`} alt="" />
        </div>
    </section>

    <section>
         <div className="mongo-house">

         <section className="container nav-mongo">
           <div className="row row-nav-mongo">

              <div className="col-6">
               <h1>The Mongo Park House (#4000) </h1>
               <StarRating />
              </div>

             <div className="col-6">
               <NavBtn  style={{marginTop: '30px', borderRadius: '16px', color: 'rgba(47, 128, 237, 1)', marginLeft: '300px'}}>
                  <NavBtnLink style={{fontSize: '16px', fontWeight: '700', fontStyle: 'normal', fontFamily: 'Poppins', lineHeight: '24px', color: 'rgba(255, 255, 255, 1)', paddingLeft: '80px', paddingRight: '80px'}} to='book-ticket'>Book Ticket</NavBtnLink>
                </NavBtn>
             </div>

           </div>
         </section>
            
            
            
            <h4 className="location">Location:</h4>
            <p className="location-d"><MapMarker /> Grand Hotel Drive, Nnebisi Road, Asaba</p>
            <h4 className="detail">Detail:</h4>
            <p className="detail-d">Mungo Park House is a national monument that happened to be the first headquarters of the Royal Niger Company and Nigeria’s first political headquarters in 1900. With its elegant pose, the house tells the story of the inter play between Western influences and African culture, including the multiple tales of the numerous conflicts, particularly that of trade and investment in pre-colonial era.
            Though located in a short alley behind the Grand Hotel, Asaba, it still looks formidable many years after its construction. It appears at first sight to be a repository of age long secrets of a glorious past, reminiscent of the dramatic foray of the colonial overlords over the continent bringing culture, trade and a conflict into the African continent, with Asaba as one of the veritable meeting points of the foreigners and the continent.</p>
            <h4 className="info-h4">Other info:</h4>
            <p className="info-p">Mungo Park House was erected by the Royal Niger Company (RNC) in 1886. It was built to keep alive the memory of Mungo Park, a Briton who ‘discovered the source of the River Niger’. But sadly enough, he died in 1806 where his boat somersaulted somewhere in new Bussa, Niger State.</p>
         </div>
         </section>

         <section>
           <div>
             <Review />  
           </div>
         </section>

         <section>
             <span>
               <h3 className="ese"><img src="images/ese.png" alt="" className="ese-1" />Eseoghene Nakpodia</h3>
                  <div className="rate-left">
               <StarRating />
               <p className='ese-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla adipiscing nibh sapien ultrices venenatis eget neque vel semper. Tortor egestas massa duis semper. Felis, morbi id condimentum velit fringilla quis fermentum arcu.</p>
               </div>
             </span>

             <span>
               <h3 className="ese"><img src="images/ozioma.png" alt="" className="ese-1" />Ozioma Akuabia</h3>
                  <div className="rate-left">
               <StarRating />
               <p className='ese-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla adipiscing nibh sapien ultrices venenatis eget neque vel semper. Tortor egestas massa duis semper. Felis, morbi id condimentum velit fringilla quis fermentum arcu.</p>
               </div>
             </span>

             <span>
               <h3 className="ese"><img src="images/tare.png" alt="" className="ese-1" />Tare Karetimi</h3>
                  <div className="rate-left">
               <StarRating />
               <p className='ese-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla adipiscing nibh sapien ultrices venenatis eget neque vel semper. Tortor egestas massa duis semper. Felis, morbi id condimentum velit fringilla quis fermentum arcu.</p>
               </div>
             </span>
         </section>
               
    </div>
    
  )
}

export default Cards3
