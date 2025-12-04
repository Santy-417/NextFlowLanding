'use client';

import { ReactNode, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { darkTheme } from '@/lib/theme';
import { initAnalytics } from '@/lib/analytics';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PageLoader from '@/components/ui/PageLoader';

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Componente principal de Providers
 * Incluye ThemeProvider, QueryClientProvider y layout general
 * Tema oscuro configurado por defecto
 */
export default function Providers({ children }: ProvidersProps) {
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

  // Inicializar analytics y tema oscuro al montar el componente
  useEffect(() => {
    initAnalytics();
    // Siempre usar tema oscuro
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        <PageLoader />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </MuiThemeProvider>
    </QueryClientProvider>
  );
}
