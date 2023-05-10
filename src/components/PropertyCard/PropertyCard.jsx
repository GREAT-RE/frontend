import React from "react";

const PropertyCard = ({ listing }) => {

    const {id, picture_url, name, description, latitude, longitude, price_in_eur, amenities, room_type, host_id, 
        bathrooms_text, cancellation_policy, review_scores_rating, for_students, host_identity_verified, priority, number_of_reviews,
        review_scores_value, distance_1, distance_2, distance_3, distance_4, distance_5
      } = listing
      
    
      return (
        listing ? (
            <div>
            <img className='popular-card-image' src={picture_url} alt='Pop1' />
            <h2 className='card-title'>{name}</h2>
            <p>{description}</p>
            <p className='card-text'>From <span className='card-price'>{price_in_eur}</span> / Month</p>
            <p>{number_of_reviews}</p>
            <p>{review_scores_rating}</p>
          </div>
        ) : null
      );
    };
    
    export default PropertyCard;