import style from './Search.module.css';

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  return (
    <div className={style.search}>
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
