import { useFetch } from '../../hooks/useFetch';
import { useDebounce } from '../../hooks/useDebounce';
import { getCategories, getNews } from '../../api/apiNews';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import style from './Main.module.css';
import { useFilters } from '../../hooks/useFilters';

const Main = () => {
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

  const { data: dataCategories } = useFetch(getCategories);

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
    <main className={style.main}>
      <Categories
        categories={dataCategories?.categories ?? []}
        selectedCategory={filters.category}
        setSelectedCategory={(category) => changeFilters('category', category)}
      />

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters('keywords', keywords)}
      />

      <NewsBanner isLoading={isLoading} item={data && data.news.length > 0 && data.news[0]} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={data && data.news} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />
    </main>
  );
};

export default Main;
