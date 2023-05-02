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
        <FaAndroid size={50}/>
        <FaYoutube size={50}/>
        <FaAirbnb size={50}/>
        <FaCircle size={50}/>
      </div>
    </div>
  );
}

export default OfferPromo;
