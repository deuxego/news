import style from './Skeleton.module.css';

const Skeleton = ({ count = 1, type }) => {
  return (
    <>
      {count > 1 ? (
        <ul className={style.list}>
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
