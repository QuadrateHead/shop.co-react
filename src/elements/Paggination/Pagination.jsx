import React from 'react'
import { useState, useEffect } from 'react';
import "./Pagination.scss"
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [showAround, setShowAround] = useState(
    typeof window !== "undefined" && window.innerWidth <= 400 ? 0 : 1
  );

  useEffect(() => {
    const updateShowAround = () => {
      setShowAround(window.innerWidth <= 400 ? 0 : 1);
    };

    updateShowAround(); // run once on mount
    window.addEventListener("resize", updateShowAround);
    return () => window.removeEventListener("resize", updateShowAround);
  }, []);
  const getPageNumbers = () => {
    // shows: 1 2 3 ... last-2 last-1 last, collapsing the middle
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - showAround && i <= currentPage + showAround)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button
        className="pagination__nav"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8332 9.99996H4.1665M9.99984 4.16663L4.1665 9.99996L9.99984 15.8333" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg> 
        <p>Previous</p>
      </button>

      <div className="pagination__pages">
        {getPageNumbers().map((page, i) =>
          page === "..." ? (
            <span key={`dots-${i}`} className="pagination__dots">...</span>
          ) : (
            <button
              key={page}
              className={`pagination__page ${page === currentPage ? "active" : ""}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className="pagination__nav"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <p>Next</p> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.1665 9.99996H15.8332M9.99984 15.8333L15.8332 9.99996L9.99984 4.16663" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination