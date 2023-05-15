import React, { useEffect } from "react";
import "./PropertyCard.css";
import { HiLocationMarker } from "react-icons/hi";
import {Link} from "react-router-dom"

const PropertyCard = ({ listing, minNumber }) => {
  const {
    id,
    picture_url,
    name,
    description,
    latitude,
    longitude,
    price_in_eur,
    amenities,
    room_type,
    host_id,
    bathrooms_text,
    cancellation_policy,
    review_scores_rating,
    for_students,
    host_identity_verified,
    priority,
    number_of_reviews,
    review_scores_value,
    distance_1,
    distance_2,
    distance_3,
    distance_4,
    distance_5,
  } = listing;

  // console.log(minNumber);
  const asArray = Object.entries(listing).filter(
    ([key, value]) => value === minNumber
  );
  // console.log(asArray[0][0]);
  return listing ? (
    <div className="card-listing-all">
      <div >
        <img className="card-listing-image" src={picture_url} alt="Pop1" />
        <div className="extras-images">
          <h1>Extra Images</h1>
        </div>
      </div>
      <div className="card-listing-title-text">
        <h2 className="card-listing-title">{name}</h2>
        <p className="card-listing-description">
          {description
            .substr(0, 200)
            .replace(/<br\s*\/?>/gi, "")
            .replace(/<(\/)?b>/gi, "")}
          ...
        </p>
        <div className="card-universities">
          {asArray[0][0] === "distance_1" && (
            <p className="card-universities-distance">
              <HiLocationMarker />
              Instituto Superior Técnico is {distance_1.toFixed(2)} km's away
            </p>
          )}
          {asArray[0][0] === "distance_2" && (
            <p className="card-universities-distance">
              <HiLocationMarker />
              Universidade de Lisboa is {distance_2.toFixed(2)} km's away
            </p>
          )}
          {asArray[0][0] === "distance_3" && (
            <p className="card-universities-distance">
              <HiLocationMarker />
              Universidade Lusófona is {distance_3.toFixed(2)} km's away
            </p>
          )}
          {asArray[0][0] === "distance_4" && (
            <p className="card-universities-distance">
              <HiLocationMarker />
              Universidade Católica is {distance_4.toFixed(2)} km's away
            </p>
          )}
          {asArray[0][0] === "distance_5" && (
            <p className="card-universities-distance">
              <HiLocationMarker />
              ISCTE - Instituto Universitário de Lisboa is{" "}
              {distance_5.toFixed(2)} km's away
            </p>
          )}
        </div>
      </div>
      <div className="card-listing-price-rating">
        <p className="card-listing-text-price">
          From <span className="card-listing-price">€ {price_in_eur}</span> /
          Month
        </p>
        <p className="card-review">
          Number of reviews:{" "}
          <span className="review-score-number">{number_of_reviews}</span>
        </p>
        <p className="card-review">
          Review Score:
          <span className="review-score-number">{review_scores_rating}</span>
        </p>
        <Link
                  className="card-listing-link"
                  key={listing.listing_id}
                  to={`/listing/${listing.listing_id}`}
                >
        <button type="submit" className="uselessButton">
          View more
        </button>
        </Link>
      </div>
    </div>
  ) : null;
};

export default PropertyCard;
