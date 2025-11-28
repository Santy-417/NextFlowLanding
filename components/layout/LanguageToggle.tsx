'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

const languages = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
];

export default function LanguageToggle() {
  const params = useParams();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const currentLocale = params.locale || 'es';

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (locale: string) => {
    const fromLocale = Array.isArray(currentLocale) ? currentLocale[0] : currentLocale;
    trackEvent('language_change', { from: fromLocale, to: locale });
    handleClose();
  };

  // Obtener path sin el locale
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';

  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        sx={{
          color: 'white',
          fontSize: '14px',
          fontWeight: 500,
          textTransform: 'uppercase',
          minWidth: '80px',
        }}
      >
        {languages.find((lang) => lang.code === currentLocale)?.label || 'ES'}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            component={Link}
            href={`/${lang.code}${pathWithoutLocale}`}
            onClick={() => handleLanguageChange(lang.code)}
            selected={lang.code === currentLocale}
          >
            {lang.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
