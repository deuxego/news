import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import './styles/index.css';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  );
};

export default App;
