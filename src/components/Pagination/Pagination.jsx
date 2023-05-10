import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import ListingContext from "../../context/listingContext";
import "./Pagination.css"
const Pagination = ({ setPageNumber, listingPerPage }) => {
  const { listings } = useContext(ListingContext);

  const pageCount = Math.ceil(listings.length / listingPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

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
