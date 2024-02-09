import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import withSkeleton from '../../helpers/hocs/withSkeleton';
import Image from '../Image/Image';
import style from './NewsBanner.module.css';

const NewsBanner = ({ item }) => {
  const { image, title, published, author } = item ?? {};

  return (
    <div className={style.banner}>
      <Image image={image} />
      <h3 className={style.title}>{title}</h3>
      <p className={style.extra}>
        {formatTimeAgo(published)} by {author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;
