import style from './Image.module.css';

interface Props {
  image: string;
}

const Image = ({ image }: Props) => {
  return (
    <div className={style.wrapper}>
      {image ? <img src={image} alt="news" className={style.image}/>: null}
    </div>
  );
};

export default Image;
