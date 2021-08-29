import React from 'react'
import { Link } from 'react-router-dom';


function CardItem2(props) {
    return (
        <div>
        <li className="cards_item">
        <Link className="cards_item_link" to={props.path}>
           <figure className="cards_item_pic_wrap card2-wrap" data-category={props.label}>
              <img src={props.src} alt="River Ethiope"
              className="cards_item_img card2_page"  />
           </figure>
         </Link>
      </li>
        </div>
    )
}

export default CardItem2
