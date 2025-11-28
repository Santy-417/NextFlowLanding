'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { AppBar, Toolbar, Container, Box, IconButton, Menu, MenuItem } from '@mui/material';
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
  { key: 'about', href: '#about' },
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
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#8B5CF6';
                  e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {t(item.key)}
              </Link>
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
