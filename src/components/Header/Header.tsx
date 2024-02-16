import style from './Header.module.css';
import { formatDate } from '../../helpers/formatDate';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className={`${style.header} ${isDark ? style.dark : style.light}`}>
      <div className={`styles.info`}>
        <h1 className={style.title}>NEWS</h1>
        <p className={style.date}>{formatDate(new Date())}</p>
      </div>
      <img
        width={50}
        src="./themes.png"
        alt="theme icon"
        onClick={() => setIsDark((prev) => !prev)}
      />
    </div>
  );
};

export default Header;
