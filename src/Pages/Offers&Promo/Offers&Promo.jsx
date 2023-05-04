import React from "react"; 
import offerIMG from "../../assets/off_promo.jpg";
import './Offers&Promo.css';
import { FaAndroid, FaYoutube, FaAirbnb } from 'react-icons/fa';
import StarIcon from "../../assets/star.png";

function OfferPromo() {
  return (
    <div className="offer-promo">
      <div className="offer-image" style={{ backgroundImage: `url(${offerIMG})` }}>
        <div className="offer-text">
          GET TO KNOW OUR PARTNERS
        </div>
      </div>
      <div className="partners-container">
        <a href="https://www.android.com"><FaAndroid size={80} className="android-icon"/></a>
        <a href="https://www.youtube.com"><FaYoutube size={80} className="youtube-icon"/></a>
        <a href="https://www.airbnb.com"><FaAirbnb size={80} className="airbnb-icon"/></a>
        <a href="https://example.com"><StarIcon size={80} className="circle-icon"/></a>
      </div>
    </div>
  );
}

export default OfferPromo;
