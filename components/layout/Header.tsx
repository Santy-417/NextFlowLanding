'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { AppBar, Toolbar, Container, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const navItems = [
  { key: 'home', href: '#' },
  { key: 'services', href: '#services' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

export default function Header({ isDarkMode, onToggleTheme }: HeaderProps) {
  const t = useTranslations('nav');
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const handleOpenMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Logo */}
          <Box
            component={Link}
            href="#"
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 0,
              cursor: 'pointer',
              textDecoration: 'none',
              '& img': {
                height: 'auto',
                maxHeight: '40px',
                transition: 'opacity 0.3s ease',
              },
              '&:hover img': {
                opacity: 0.8,
              },
            }}
          >
            <Image
              src="/logoNextFlowMenu.png"
              alt="NextFlow Logo"
              width={120}
              height={40}
              priority
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, flexGrow: 1, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.key}
                href={item.href}
                component={Link}
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  px: 2.5,
                  py: 1,
                  textTransform: 'none',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #8B5CF6, #3B82F6)',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'white',
                    '&::after': {
                      width: '80%',
                    },
                  },
                }}
              >
                {t(item.key)}
              </Button>
            ))}
          </Box>

          {/* Right side controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Theme Toggle */}
            <IconButton onClick={onToggleTheme} color="inherit" size="small">
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            {/* Language Toggle */}
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenMobileMenu}
              color="inherit"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu */}
          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleCloseMobileMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.key}
                onClick={handleCloseMobileMenu}
                component={Link}
                href={item.href}
              >
                {t(item.key)}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
