import React from 'react';

import '../styles/Pagination.css';

const Pagination = ({ page, setPage }) => {
  const handlePagination = (e) => {
    if (e.target.name === 'decrement') {
      if (page === 1) return;
      return setPage(page - 1);
    }
    return setPage(page + 1);
  };

  return (
    <div className="pagination_container">
      <button
        className="pagination_button"
        name="decrement"
        onClick={handlePagination}
        type="button"
      >
        {'<'}
      </button>
      <span className="pag_num">{page}</span>
      <button
        className="pagination_button"
        name="increment"
        onClick={handlePagination}
        type="button"
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
