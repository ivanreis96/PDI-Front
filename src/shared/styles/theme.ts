export const lightTheme = {
  colors: {
    bgPrimary: '#f5f5f5',
    bgSecondary: '#ffffff',
    bgTertiary: '#f8f9fa',
    bgHover: '#ecf0f1',
    
    textPrimary: '#2c3e50',
    textSecondary: '#7f8c8d',
    textTertiary: '#555',
    
    borderColor: '#e9ecef',
    borderHover: '#dee2e6',
    
    accentPrimary: '#667eea',
    accentSecondary: '#764ba2',
    accentHover: '#5568d3',
    
    navbarBg: '#2c3e50',
    navbarHover: '#34495e',
    navbarActive: '#3498db',
    
    cardBg: '#ffffff',
    modalOverlay: 'rgba(0, 0, 0, 0.7)',
    
    errorBg: '#fff5f5',
    errorBorder: '#ff6b6b',
    errorText: '#c92a2a',
    
    inputBg: '#ffffff',
    inputBorder: '#e9ecef',
    inputFocus: '#667eea',
    
    themeBtnBg: '#fff',
    themeBtnColor: '#2c3e50',
  },
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
    md: '0 4px 16px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
};

export const darkTheme = {
  colors: {
    bgPrimary: '#1a1a1a',
    bgSecondary: '#2d2d2d',
    bgTertiary: '#242424',
    bgHover: '#3a3a3a',
    
    textPrimary: '#e9ecef',
    textSecondary: '#adb5bd',
    textTertiary: '#ced4da',
    
    borderColor: '#404040',
    borderHover: '#4a4a4a',
    
    accentPrimary: '#7c8eef',
    accentSecondary: '#8b5fc7',
    accentHover: '#8a9ef5',
    
    navbarBg: '#1a1a1a',
    navbarHover: '#2d2d2d',
    navbarActive: '#4a90e2',
    
    cardBg: '#2d2d2d',
    modalOverlay: 'rgba(0, 0, 0, 0.85)',
    
    errorBg: '#2d1f1f',
    errorBorder: '#d65d5d',
    errorText: '#ff8787',
    
    inputBg: '#2d2d2d',
    inputBorder: '#404040',
    inputFocus: '#7c8eef',
    
    themeBtnBg: '#2c3e50',
    themeBtnColor: '#fff',
  },
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
    md: '0 4px 16px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.5)',
  },
};

export type Theme = typeof lightTheme;
