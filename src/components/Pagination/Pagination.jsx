import React, { useContext, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import ListingContext from "../../context/listingContext";
import "./Pagination.css"
const Pagination = ({ setPageNumber, listingPerPage }) => {
  const { listings, listingsFilter } = useContext(ListingContext);
// const [pageCount, setPageCount] = useState(Math.ceil(listings.length / listingPerPage))
  const pageCount = Math.ceil(listings && listingsFilter.length === 0 ? listings.length / listingPerPage: listingsFilter.length / listingPerPage);
  
  const pageChange = ({ selected }) => {
    console.log(selected)
    setPageNumber(selected);
  };

  // useEffect(()=>{
  //   Math.ceil(listingsFilter.length / listingPerPage);
  // },[listingsFilter, listingPerPage])

  return (
    <div>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={pageChange}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName="pagination-buttons"
        pageLinkClassName="pages-buttons"
        previousLinkClassName="previous-button"
        nextLinkClassName="next-button"
        breakLinkClassName="break-pagination"
        disabledLinkClassName="disabled-button"
        activeLinkClassName="active-link"
      />
    </div>
  );
};

export default Pagination;
