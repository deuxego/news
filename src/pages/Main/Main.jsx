import { useEffect, useState } from 'react';
import { getNews } from '../../api/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import style from './Main.module.css';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const res = await getNews();
        setNews(res?.news);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={style.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}
      {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} />}
    </main>
  );
};

export default Main;
