import { useEffect, useState } from 'react';
import { getNews } from '../../api/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import style from './Main.module.css';
import NewsList from '../../components/NewsList/NewsList';

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews()
        setNews(res?.news);
      } catch (e) {
        console.log(e);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={style.main}>
      {news.length > 0 ? <NewsBanner item={news[0]}/> : 'Loading...'}
      <NewsList news={news}/>
    </main>
  );
};

export default Main;
