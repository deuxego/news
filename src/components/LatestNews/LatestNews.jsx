import BannersList from '../BannersList/BannersList';
import style from './LatestNews.module.css';

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={style.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
