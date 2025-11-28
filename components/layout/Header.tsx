'use client';

import { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isScrolled
          ? '1px solid transparent'
          : '1px solid transparent',
        borderImage: isScrolled
          ? 'linear-gradient(90deg, #C026D3, #E879F9, #06B6D4) 1'
          : 'none',
        boxShadow: isScrolled
          ? '0 4px 30px rgba(168, 85, 247, 0.1)'
          : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            py: isScrolled ? 1 : 1.5,
            transition: 'padding 0.3s ease',
          }}
        >
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
              position: 'relative',
              transition: 'all 0.3s ease',
              '& img': {
                height: 'auto',
                maxHeight: isScrolled ? '35px' : '40px',
                transition: 'all 0.3s ease',
              },
              '&:hover': {
                transform: 'scale(1.05)',
                filter: 'drop-shadow(0 0 12px rgba(192, 38, 211, 0.5))',
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
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              flexGrow: 1,
              justifyContent: 'center',
              mx: 4,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.key}
                href={item.href}
                component={Link}
                sx={{
                  color: '#FFFFFF',
                  opacity: 0.9,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  letterSpacing: '0.3px',
                  px: 3,
                  py: 1,
                  textTransform: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, rgba(192, 38, 211, 0.1), rgba(6, 182, 212, 0.1))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #C026D3, #E879F9, #06B6D4)',
                    transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    opacity: 1,
                    background: 'linear-gradient(90deg, #C026D3, #E879F9, #06B6D4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transform: 'translateY(-2px)',
                    '&::before': {
                      opacity: 1,
                    },
                    '&::after': {
                      width: '70%',
                    },
                  },
                }}
              >
                {t(item.key)}
              </Button>
            ))}
          </Box>

          {/* Right side controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            {/* Theme Toggle */}
            <IconButton
              onClick={onToggleTheme}
              size="small"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#FFFFFF',
                  transform: 'scale(1.1)',
                  filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))',
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                },
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            {/* Language Toggle */}
            <Box
              sx={{
                '& button': {
                  color: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#FFFFFF',
                    transform: 'scale(1.1)',
                    filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))',
                    backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  },
                },
              }}
            >
              <LanguageToggle />
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenMobileMenu}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: 'rgba(255, 255, 255, 0.8)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#FFFFFF',
                  transform: 'scale(1.1)',
                  filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))',
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu */}
          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleCloseMobileMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiPaper-root': {
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(192, 38, 211, 0.2)',
                borderRadius: '12px',
                mt: 1,
              },
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.key}
                onClick={handleCloseMobileMenu}
                component={Link}
                href={item.href}
                sx={{
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  py: 1.5,
                  px: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(90deg, rgba(192, 38, 211, 0.2), rgba(6, 182, 212, 0.2))',
                    transform: 'translateX(8px)',
                  },
                }}
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
