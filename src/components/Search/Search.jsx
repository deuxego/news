import style from './Search.module.css';

const Search = ({ keywords, setKeywords }) => {
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
