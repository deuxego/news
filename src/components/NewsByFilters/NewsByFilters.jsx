import { getNews } from '../../api/apiNews';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetch } from '../../hooks/useFetch';
import { useFilters } from '../../hooks/useFilters';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import style from './NewsByFilters.module.css';

const NewsByFilters = () => {
  const [filters, changeFilters] = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: ''
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data: data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) changeFilters('page_number', filters.page_number + 1);
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) changeFilters('page_number', filters.page_number - 1);
  };

  const handlePageClick = (pageNumber) => {
    changeFilters('page_number', pageNumber);
  };

  return (
    <section className={style.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />

      <PaginationWrapper
        top
        bottom
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}>
          
        <NewsList isLoading={isLoading} news={data && data.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
