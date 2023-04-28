import React from "react"; 
import offerIMG from "../../assets/off_promo.jpg";
import './Offers&Promo.css';

function OfferPromo() {
  return (
    <div className="offer-promo">
      <div className="offer-image" style={{ backgroundImage: `url(${offerIMG})` }}>
        <div className="offer-text">
          GET TO KNOW OUR PARTNERS
        </div>
      </div>
      <div className="partners-container">
        <i className="fa fa-icon-1"></i>
        <i className="fa fa-icon-2"></i>
        <i className="fa fa-icon-3"></i>
        <i className="fa fa-icon-4"></i>
      </div>
    </div>
  );
}

export default OfferPromo;


