import React from 'react';

const Pagination = ({ page, setPage }) => {
  const handlePagination = (e) => {
    if (e.target.name === 'decrement') {
      if (page === 1) return;
      return setPage(page - 1);
    }
    return setPage(page + 1);
  };

  return (
    <div>
      <button name="decrement" onClick={handlePagination} type="button">
        {'<'}
      </button>
      <span>{page}</span>
      <button name="increment" onClick={handlePagination} type="button">
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
