import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './shared/store/hooks';
import { lightTheme, darkTheme } from './shared/styles/theme';
import { GlobalStyles } from './shared/styles/GlobalStyles';
import AppRoutes from './routes/AppRoutes';
import ThemeToggle from './shared/components/ThemeToggle';

function App() {
  const themeMode = useAppSelector((state) => state.theme.mode);
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeToggle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;