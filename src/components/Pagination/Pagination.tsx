import { IPaginationProps } from '../../interfaces';
import style from './Pagination.module.css';
import { useTheme } from '../../hooks/useTheme';

const Pagination = ({
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();

  return (
    <div className={`${style.pagination} ${isDark ? style.dark : style.light}`}>
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
