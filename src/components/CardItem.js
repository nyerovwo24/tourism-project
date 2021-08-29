import React from 'react';
import { Link } from 'react-router-dom';
import MapMarker from './MapMarker';
import './CardItem.css'


function CardItem(props) {
    return (
        <>
           <li className="cards_item">
             <Link className="cards_item_link" to={props.path}>
                <figure className="cards_item_pic_wrap" data-category={props.label}>
                   <img src={props.src} alt="River Ethiope"
                   className="cards_item_img" />
                </figure>
                  <div className="cards_item_info">
                    <h3 className="cards_item_text">{props.text}</h3>
                         <p className="cards_item_location"><MapMarker /> {props.location}</p>
                        
                       

                  </div>
              </Link>
           </li>
            
        </>
    )
}

export default CardItem
