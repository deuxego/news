import style from './Pagination.module.css';

const Pagination = ({
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage
}) => {

  return (
    <div className={style.pagination}>
      <button onClick={handlePreviousPage} className={style.arrow} disabled={currentPage <= 1}>
        {'<'}
      </button>

      <div>
        {[...Array(totalPages)].map((_, idx) => {
          return (
            <button
              onClick={() => handlePageClick(idx + 1)}
              className={style.pageNumber}
              disabled={idx + 1 === currentPage}
              key={idx}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      <button onClick={handleNextPage} className={style.arrow} disabled={currentPage >= totalPages}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
