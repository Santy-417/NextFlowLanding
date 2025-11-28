'use client';

import { ReactNode, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lightTheme, darkTheme } from '@/lib/theme';
import { initAnalytics } from '@/lib/analytics';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Componente principal de Providers
 * Incluye ThemeProvider, QueryClientProvider y layout general
 */
export default function Providers({ children }: ProvidersProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minuto
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  // Inicializar analytics al montar el componente
  useEffect(() => {
    initAnalytics();
  }, []);

  // Cargar preferencia de tema desde localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle de tema
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');

      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      return newValue;
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
        {children}
        <Footer />
        <WhatsAppButton />
      </MuiThemeProvider>
    </QueryClientProvider>
  );
}
