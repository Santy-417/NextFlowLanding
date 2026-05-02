'use client';

import { ReactNode, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from '@/lib/theme';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    // Next.js puede restaurar scroll después de hidratación — forzamos top aquí
    // y de nuevo en el siguiente tick por si algún efecto lo mueve después.
    window.scrollTo({ top: 0, behavior: 'instant' });
    const t = setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </MuiThemeProvider>
  );
}
