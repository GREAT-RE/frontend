import React, { useContext, useEffect, useState } from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import ListingContext from "../../context/listingContext";
import Pagination from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";
import "./Properties.css";

import imageConnectGoogleMaps from "../../assets/map-sidebar-image.png";

const Properties = () => {
  const { listings, listingsFilter } = useContext(ListingContext);

  const [displayListings, setDisplayListings] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);

  const listingPerPage = 6;

  const pagesVisited = pageNumber * listingPerPage;

  useEffect(() => {
    setDisplayListings(
      listings && listingsFilter.length === 0
        ? listings.slice(pagesVisited, pagesVisited + listingPerPage)
        : listingsFilter.slice(pagesVisited, pagesVisited + listingPerPage)
    );
  }, [listings, listingsFilter, pagesVisited]);

  return (
    <div className="listings-map-main-container">
      <div className="cards-map-container">
        <div className="listings-cards-container">
          {listings && displayListings
            ? displayListings.map((listing) => {
                let tempArray = [
                  listing.distance_1,
                  listing.distance_2,
                  listing.distance_3,
                  listing.distance_4,
                  listing.distance_5,
                ];
                let minNumber = tempArray.reduce(
                  (accumulatedValue, currentValue, index) =>
                    Math.min(accumulatedValue, currentValue)
                );

                return (
                  <PropertyCard
                    key={listing.listing_id}
                    listing={listing}
                    minNumber={minNumber}
                  />
                );
              })
            : null}
        </div>
        <div className="map-listings-container">
          {/* <h1>MAP TEST</h1> */}
          <Link className="transparent-layer-map" to="/properties/map-list">
            <div>View Map</div>
          </Link>
          <div className="image-container-maps">
            <img
              className="image-connect-google-maps"
              src={imageConnectGoogleMaps}
              alt="connect-google-maps"
            />
          </div>
        </div>
      </div>

      <div className="pagination-all">
        <Pagination
          listingPerPage={listingPerPage}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};

export default Properties;
