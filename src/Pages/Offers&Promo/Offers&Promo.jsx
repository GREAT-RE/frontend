import React from "react"; 
import offerIMG from "../../assets/off_promo.jpg"
import './Offers&Promo.css'

function OfferPromo() {
  return (
    <div className="offer-promo">
        <div className="image-container" style={{ backgroundImage: `url(${offerIMG})` }}>
          <div className="text">
            GET TO KNOW OUR PARTNERS
          </div>
        </div>
    </div>
  );
}

export default OfferPromo;

