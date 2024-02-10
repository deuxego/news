import { getLatestNews } from '../../api/apiNews';
import { useFetch } from '../../hooks/useFetch';
import BannersList from '../BannersList/BannersList';
import style from './LatestNews.module.css';

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);
  return (
    <section className={style.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
