import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import style from './NewsFilters.module.css';

const NewsFilters = ({ filters, changeFilters }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={style.filters}>
      <Slider>
        <Categories
          categories={dataCategories?.categories ?? []}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilters('category', category)}
        />
      </Slider>

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters('keywords', keywords)}
      />
    </div>
  );
};

export default NewsFilters;
