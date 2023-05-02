import React from "react"; 
import offerIMG from "../../assets/off_promo.jpg";
import './Offers&Promo.css';
import { FaAndroid, FaYoutube, FaAirbnb, FaCircle} from 'react-icons/fa';

function OfferPromo() {
  return (
    <div className="offer-promo">
      <div className="offer-image" style={{ backgroundImage: `url(${offerIMG})` }}>
        <div className="offer-text">
          GET TO KNOW OUR PARTNERS
        </div>
      </div>
      <div className="partners-container">
        <FaAndroid size={80}/>
        <FaYoutube size={80}/>
        <FaAirbnb size={80}/>
        <FaCircle size={80}/>
      </div>
    </div>
  );
}

export default OfferPromo;
