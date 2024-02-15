import withSkeleton from '../../helpers/hocs/withSkeleton';
import { INews } from '../../interfaces';
import NewsItem from '../NewsItem/NewsItem';
import style from './NewsList.module.css';

interface Props {
  news?: INews[] | null 
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={style.list}>
      {news?.map((item) => {
        return <NewsItem item={item} key={item.id}/>;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);


export default NewsListWithSkeleton;
