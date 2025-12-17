import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgPrimary: string;
      bgSecondary: string;
      bgTertiary: string;
      bgHover: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
      borderColor: string;
      borderHover: string;
      accentPrimary: string;
      accentSecondary: string;
      accentHover: string;
      navbarBg: string;
      navbarHover: string;
      navbarActive: string;
      cardBg: string;
      modalOverlay: string;
      errorBg: string;
      errorBorder: string;
      errorText: string;
      inputBg: string;
      inputBorder: string;
      inputFocus: string;
      themeBtnBg: string;
      themeBtnColor: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
