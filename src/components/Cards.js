import React from "react";
// import CardItem from "./CardItem";
import "./Cards.css";
import Btn from "./Btn";
import Cards2 from "./Cards2";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import MapMarker from "./MapMarker";

export default function Cards({ locations }) {
  return (
    <div>
    <h3 className="heading_trend-1">Trending Locations</h3>
      <section className="cards">
        {locations.map((location) => (
          <div className=" card-wrap">
            <div className="row card-card">
              <div>
                <li className="cards_item">
                  <Link className="cards_item_link">
                    <figure
                      className="cards_item_pic_wrap"
                      data-category={location.name}
                    >
                      <img
                        src={location.photos[0].url}
                        alt="River Ethiope"
                        className="cards_item_img"
                      />
                    </figure>
                    <div className="cards_item_info">
                      <h3 className="cards_item_text">{location.location}</h3>
                      <p className="cards_item_location">
                        <MapMarker /> {location.name}
                      </p>
                    </div>
                  </Link>
                </li>
                <StarRating />
              </div>
            </div>
          </div>
        ))}

        </section>
        <div>
          <Btn />
        </div>

      <section>
        <Cards2 />
      </section>
    </div>
  );
}
