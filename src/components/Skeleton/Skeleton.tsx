import { DirectionType, SkeletonType } from '../../interfaces';
import style from './Skeleton.module.css';

interface Props {
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
}

const Skeleton = ({ count = 1, type = 'banner', direction = 'column' }: Props) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction === 'column' ? style.columnList : style.rowList}>
          {[...Array(count).fill(0)].map((_, idx) => (
            <li key={idx} className={type === 'banner' ? style.banner : style.item}></li>
          ))}
        </ul>
      ) : (
        <div className={type === 'banner' ? style.banner : style.item}></div>
      )}
    </>
  );
};

export default Skeleton;
