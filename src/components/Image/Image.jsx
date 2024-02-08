import style from './Image.module.css';

const Image = ({ image }) => {
  return (
    <div className={style.wrapper}>
      {image ? <img src={image} alt="news" className={style.image}/>: null}
    </div>
  );
};

export default Image;
