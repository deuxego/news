import style from './Search.module.css';
import { useTheme } from '../../hooks/useTheme';

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme();

  return (
    <div className={`${style.search} ${isDark ? style.dark : style.light}`}>
      <input
        className={style.input}
        type="text"
        value={keywords}
        placeholder='search...'
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  );
};

export default Search;
