import style from './Header.module.css';
import { formatDate } from '../../helpers/formatDate';

const Header = () => {
  return (
    <div className={style.header}>
      <h1 className={style.title}>NEWS</h1>
      <p className={style.date}>{formatDate(new Date())}</p>
    </div>
  );
};

export default Header;
