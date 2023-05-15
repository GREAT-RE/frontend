import React, { useEffect, useState } from "react";
import "./PropertyCard.css";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import AC from "../../assets/amenity-icons/air-conditioner.svg";
import wifi from "../../assets/amenity-icons/wifi.svg";
import cableTv from "../../assets/amenity-icons/cable-tv.svg";
import heating from "../../assets/amenity-icons/heating.svg";
import kitchen from "../../assets/amenity-icons/kitchen.svg";
import microwave from "../../assets/amenity-icons/microwave.svg";
import oven from "../../assets/amenity-icons/oven.svg";
import refrigerator from "../../assets/amenity-icons/refrigerator.svg";
import stove from "../../assets/amenity-icons/stove.svg";
import washer from "../../assets/amenity-icons/washer.svg";
import imagePlaceholder from "../../assets/placeholder-image.png";

const PropertyCard = ({ listing, minNumber }) => {
  const amenitiesToDisplay = [
    "Wifi",
    "Air conditioning",
    "Cable TV",
    "Heating",
    "Kitchen",
    "Microwave",
    "Oven",
    "Refrigerator",
    "Stove",
    "Washer",
  ];
  const extraImages = {
    Wifi: wifi,
    "Air conditioning": AC,
    "Cable TV": cableTv,
    Heating: heating,
    Kitchen: kitchen,
    Microwave: microwave,
    Oven: oven,
    Refrigerator: refrigerator,
    Stove: stove,
    Washer: washer,
  };
  const extraImage = Object.fromEntries(
    Object.entries(extraImages).filter(([key]) =>
      amenitiesToDisplay.includes(key)
    )
  );

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

  const [src, setSrc] = useState(picture_url);

  // console.log(minNumber);
  const asArray = Object.entries(listing).filter(
    ([key, value]) => value === minNumber
  );
  // console.log(asArray[0][0]);
  return listing ? (
    <div className="card-listing-all">
      <div>
        <img
          className="card-listing-image"
          src={src}
          onError={() => setSrc(imagePlaceholder)}
          alt={name}
        />
        <div className="extras-images">
          {Array.isArray(amenities) && amenities.length > 0
            ? amenities.map((amenity) => {
                return amenitiesToDisplay.includes(amenity.trim()) ? (
                  <img
                    key={amenity}
                    className="amenity-image"
                    src={extraImage[amenity.trim()]}
                    alt={amenity.trim()}
                  />
                ) : null;
              })
            : null}
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
