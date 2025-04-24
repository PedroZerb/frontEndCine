import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => onPageChange(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  return <ul className="pagination">{renderPages()}</ul>;
}

export default Pagination;
