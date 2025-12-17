import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleTheme } from '../../store/slices/themeSlice';
import { ToggleButton, ThemeIcon } from './styles';

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ToggleButton 
      onClick={handleToggle}
      aria-label="Alternar tema"
      title={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
    >
      <ThemeIcon>
        {theme === 'light' ? '🌙' : '☀️'}
      </ThemeIcon>
    </ToggleButton>
  );
}
