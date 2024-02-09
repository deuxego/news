import withSkeleton from '../../helpers/hocs/withSkeleton';
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

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);


export default NewsListWithSkeleton;
