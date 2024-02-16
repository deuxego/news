import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import './styles/index.css';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
};

export default App;
