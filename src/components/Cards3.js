import React from "react";
import "./Cards2.css";
import StarRating from "./StarRating";
import MapMarker from "./MapMarker";
import Review from "./Review";
import { NavBtn, NavBtnLink } from "./Navbar/NavbarElements";
//import '../components/Search.css'

function Cards3({ locations }) {

  return (
    <div className="container">
      {locations?.photos && (
        <section className="row">
          <div className="col-12 mongopark-wrapper">
            <img src={locations?.photos[0].url} alt="" />
          </div>
        </section>
      )}
      {locations && (
        <section className="row">
          <div className="col-2">
            <img src={locations?.photos[0].url} alt="" />
          </div>
          <div className="col-2">
            <img src={locations?.photos[1].url} alt="" />
          </div>
          <div className="col-2">
            <img src={locations?.photos[2].url} alt="" />
          </div>
          <div className="col-2">
            <img src={locations?.photos[3].url} alt="" />
          </div>
          <div className="col-2">
            <img src={locations?.photos[4].url} alt="" />
          </div>
          <div className="col-2">
            <img src={locations?.photos[5].url} alt="" />
          </div>
        </section>
      )}
      {locations && (
        <section>
          <div className="mongo-house">
            <section className="container nav-mongo">
              <div className="row row-nav-mongo">
                <div className="col-6">
                  <h1>{locations.name} (#4000) </h1>
                  <StarRating />
                </div>

                <div className="col-6">
                  <NavBtn
                    style={{
                      marginTop: "30px",
                      borderRadius: "16px",
                      color: "rgba(47, 128, 237, 1)",
                      marginLeft: "300px",
                    }}
                  >
                    <NavBtnLink
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        fontStyle: "normal",
                        fontFamily: "Poppins",
                        lineHeight: "24px",
                        color: "rgba(255, 255, 255, 1)",
                        paddingLeft: "80px",
                        paddingRight: "80px",
                      }}
                      to="book-ticket"
                    >
                      Book Ticket
                    </NavBtnLink>
                  </NavBtn>
                </div>
              </div>
            </section>

            <h4 className="location">Location:</h4>
            <p className="location-d">
              <MapMarker /> {locations.location}
            </p>
            <h4 className="detail">Detail:</h4>
            <p className="detail-d">{locations.details}</p>
            <h4 className="info-h4">Other info:</h4>
            <p className="info-p">{locations.otherInfo}</p>
          </div>
        </section>
      )}
      <section>
        <div>
          <Review />
        </div>
      </section>

      <section>
       {locations && locations.reviews.map(review => (
        <span>
          <h3 className="ese">
            <img src={review?.avatar[0]} alt="" className="ese-1" />
           {review.name}
          </h3>
          <div className="rate-left">
            <StarRating />
            <p className="ese-p">
             {review.review}
            </p>
          </div>
        </span>
       )) }
      </section>
    </div>
  );
}

export default Cards3;
