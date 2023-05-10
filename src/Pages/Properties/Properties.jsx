import React, { useContext, useState } from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import ListingContext from "../../context/listingContext";
import Pagination from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";

const Properties = () => {
  const { listings } = useContext(ListingContext);

  const [pageNumber, setPageNumber] = useState(0);

  const listingPerPage = 6;

  const pagesVisited = pageNumber * listingPerPage;

  const displayListings = listings && listings.slice(
    pagesVisited,
    pagesVisited + listingPerPage
  );

  return (
    <div>
      {listings && displayListings
        ? displayListings.map((listing) => (
            <Link key={listing.listing_id} to={`/listing/${listing.listing_id}`}>
              <PropertyCard listing={listing} />
            </Link>
          ))
        : null}

      <Pagination
        listingPerPage={listingPerPage}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default Properties;
