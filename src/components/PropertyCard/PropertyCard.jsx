import React from "react";
import "./PropertyCard.css"

const PropertyCard = ({ listing }) => {

    const {id, picture_url, name, description, latitude, longitude, price_in_eur, amenities, room_type, host_id, 
        bathrooms_text, cancellation_policy, review_scores_rating, for_students, host_identity_verified, priority, number_of_reviews,
        review_scores_value, distance_1, distance_2, distance_3, distance_4, distance_5
      } = listing
      
    
      return (
        
          listing ? (
            <>
              <div className="card-listing-all">
                <img className='card-listing-image' src={picture_url} alt='Pop1' />
                <div className="card-listing-title-text">
                  <h2 className='card-listing-title'>{name}</h2>
                  <p className="card-listing-description">{description.substr(0, 200).replace(/<br\s*\/?>/gi, '').replace(/<(\/)?b>/gi, '')}...</p>
                <div className="extras-images">
                  <h1>Extras Imagens</h1>
                </div>
                <div className="card-universities">
                  <p className="card-universities-distance">Instituto Superior Técnico is {distance_1} km's away</p>
                  <p className="card-universities-distance">Universidade Lusófona is {distance_2} km's away</p>
                  <p className="card-universities-distance">Universidade de Lisboa is {distance_1} km's away</p>
                  <p className="card-universities-distance">Universidade Católica is {distance_1} km's away</p>
                  <p className="card-universities-distance">ISCTE - Instituto Universitário de Lisboa is {distance_1} km's away</p>
                  </div>
                </div>
                <div className="card-listing-price-rating">
                  <p className='card-listing-text-price'>From <span className='card-listing-price'>{price_in_eur}</span> / Month</p>
                  <p className="card-review">Number of reviews: <span className="review-score-number">{number_of_reviews}</span></p>
                  <p className="card-review">Review Score:<span className="review-score-number">{review_scores_rating}</span></p>
                  <button type="submit" className='uselessButton'>View more</button>
                </div>
              </div>
            </>
          ) : null
        );
    };
    
    export default PropertyCard;