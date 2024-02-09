import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import style from './NewsFilters.module.css';

const NewsFilters = ({ filters, changeFilters }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={style.filters}>
      <Categories
        categories={dataCategories?.categories ?? []}
        selectedCategory={filters.category}
        setSelectedCategory={(category) => changeFilters('category', category)}
      />

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters('keywords', keywords)}
      />
    </div>
  );
};

export default NewsFilters;
