'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

// Colores de NextFlow basados en el logo
const nextFlowColors = {
  primary: {
    main: '#8B5CF6',      // Morado
    light: '#A78BFA',
    dark: '#7C3AED',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#3B82F6',      // Azul
    light: '#60A5FA',
    dark: '#2563EB',
    contrastText: '#FFFFFF',
  },
  accent: {
    main: '#D946EF',      // Magenta/Fucsia para CTAs
    light: '#E879F9',
    dark: '#C026D3',
    contrastText: '#FFFFFF',
  },
};

// Configuración común para ambos temas
const getCommonTheme = (): ThemeOptions => ({
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
        sizeLarge: {
          padding: '14px 32px',
          fontSize: '1.125rem',
        },
        sizeSmall: {
          padding: '6px 16px',
          fontSize: '0.875rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

// Tema claro
export const lightTheme = createTheme({
  ...getCommonTheme(),
  palette: {
    mode: 'light',
    primary: nextFlowColors.primary,
    secondary: nextFlowColors.secondary,
    background: {
      default: '#FFFFFF',
      paper: '#F9FAFB',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
    },
    divider: '#E5E7EB',
  },
});

// Tema oscuro
export const darkTheme = createTheme({
  ...getCommonTheme(),
  palette: {
    mode: 'dark',
    primary: nextFlowColors.primary,
    secondary: nextFlowColors.secondary,
    background: {
      default: '#09090f',
      paper: '#0f0f1a',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
    divider: '#334155',
  },
});

// Exportar colores de acento para uso directo
export const accentColor = nextFlowColors.accent;
