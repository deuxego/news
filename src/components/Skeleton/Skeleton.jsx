import style from './Skeleton.module.css';

const Skeleton = ({ count = 1, type, direction = 'column' }) => {
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
