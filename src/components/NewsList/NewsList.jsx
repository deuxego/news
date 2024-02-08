import NewsItem from '../NewsItem/NewsItem';
import style from './NewsList.module.css';

const NewsList = ({ news }) => {
  return (
    <ul className={style.list}>
      {news.map((item) => {
        return <NewsItem item={item} key={item.id}/>;
      })}
    </ul>
  );
};

export default NewsList;
