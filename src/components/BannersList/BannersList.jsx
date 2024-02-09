import withSkeleton from '../../helpers/hocs/withSkeleton';
import NewsBanner from '../NewsBanner/NewsBanner';
import style from './BannersList.module.css';

const BannersList = ({ banners, isLoading }) => {
  return (
    <ul className={style.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} isLoading={isLoading} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');

export default BannersListWithSkeleton;
