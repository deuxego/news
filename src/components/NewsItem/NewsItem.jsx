import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import style from './NewsItem.module.css';

const NewsItem = ({ item }) => {
  const { image, title, published, author } = item ?? {};
  
  return (
    <li className={style.item}>
      <div className={style.wrapper} style={{backgroundImage: `url(${image})`}}></div>
      <div className={style.info}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.extra}>
          {formatTimeAgo(published)} by {author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
