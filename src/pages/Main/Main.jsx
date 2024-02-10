import style from './Main.module.css';
import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

const Main = () => {
  return (
    <main className={style.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default Main;
