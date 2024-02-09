import { useFetch } from '../../hooks/useFetch';
import { useDebounce } from '../../hooks/useDebounce';
import { getNews } from '../../api/apiNews';
import { PAGE_SIZE } from '../../constants/constants';
import style from './Main.module.css';
import { useFilters } from '../../hooks/useFilters';
import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

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

  return (
    <main className={style.main}>
      <LatestNews banners={data && data.news} isLoading={isLoading} />
      <NewsByFilters
        filters={filters}
        changeFilters={changeFilters}
        isLoading={isLoading}
        news={data?.news}
      />
    </main>
  );
};

export default Main;
