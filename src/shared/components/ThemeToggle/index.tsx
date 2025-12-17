import styled, { keyframes } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleTheme } from '../../store/slices/themeSlice';

const iconRotate = keyframes`
  0% {
    transform: rotate(0deg) scale(0);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.themeBtnBg};
  color: ${({ theme }) => theme.colors.themeBtnColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.3s ease;
  z-index: 999;

  &:hover {
    transform: scale(1.1) rotate(15deg);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
  }
`;

const ThemeIcon = styled.span`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${iconRotate} 0.5s ease;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

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
