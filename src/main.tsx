import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './contexts/ThemeContext';

const root = createRoot(document.getElementById('root')!);
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
