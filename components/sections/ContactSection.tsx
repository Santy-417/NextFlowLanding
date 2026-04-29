'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import { WhatsApp, Email, Instagram, Send, ContentCopy, Check } from '@mui/icons-material';
import { useContactForm } from '@/hooks/useContactForm';

const EMAIL = 'ainextflow@gmail.com';

const inputSx = {
  '& .MuiOutlinedInput-root': {
    color: '#FFFFFF',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
    '&:hover fieldset': { borderColor: 'rgba(139,92,246,0.6)' },
    '&.Mui-focused fieldset': { borderColor: '#A855F7' },
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: '10px',
  },
  '& .MuiInputLabel-root': { color: '#9CA3AF' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#A855F7' },
};

const linkContacts = [
  {
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? '573159138270'}`,
    icon: WhatsApp,
    iconColor: '#25D366',
    hoverBorder: '#25D366',
    hoverGlow: 'rgba(37,211,102,0.15)',
    label: 'WhatsApp',
    detail: '+57 315 913 8270',
  },
  {
    href: process.env.NEXT_PUBLIC_INSTAGRAM ?? 'https://instagram.com/nextflowai_',
    icon: Instagram,
    iconColor: '#E879F9',
    hoverBorder: '#E879F9',
    hoverGlow: 'rgba(232,121,249,0.15)',
    label: 'Instagram',
    detail: '@nextflowai_',
  },
];

export default function ContactSection() {
  const { register, handleSubmit, errors, formState } = useContactForm();
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    const copy = () => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL).then(copy).catch(() => {
        // fallback para navegadores sin permisos de clipboard
        const el = document.createElement('textarea');
        el.value = EMAIL;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        copy();
      });
    } else {
      const el = document.createElement('textarea');
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      copy();
    }
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#09090f',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Fondo radial sutil */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(192,38,211,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            {/* Eyebrow */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Box sx={{ width: '24px', height: '1px', bgcolor: 'rgba(139,92,246,0.4)' }} />
              <Typography
                sx={{
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  color: 'rgba(139,92,246,0.8)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                CONTÁCTANOS
              </Typography>
              <Box sx={{ width: '24px', height: '1px', bgcolor: 'rgba(139,92,246,0.4)' }} />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.65) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Hablemos de tu proyecto
            </Typography>

            <Typography
              sx={{
                color: 'rgba(209,213,219,0.65)',
                fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                maxWidth: '520px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Cuéntanos qué necesitas y te responderemos en menos de 24 horas.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          {/* Formulario */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register('name')}
                      label="Nombre *"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      sx={inputSx}
                      inputProps={{ 'data-lpignore': 'true' }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register('email')}
                      label="Email *"
                      type="email"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={inputSx}
                      inputProps={{ 'data-lpignore': 'true' }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register('phone')}
                      label="Teléfono"
                      fullWidth
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      sx={inputSx}
                      inputProps={{ 'data-lpignore': 'true' }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register('company')}
                      label="Empresa"
                      fullWidth
                      error={!!errors.company}
                      helperText={errors.company?.message}
                      sx={inputSx}
                      inputProps={{ 'data-lpignore': 'true' }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      {...register('message')}
                      label="Mensaje *"
                      multiline
                      rows={5}
                      fullWidth
                      error={!!errors.message}
                      helperText={errors.message?.message}
                      sx={inputSx}
                      inputProps={{ 'data-lpignore': 'true' }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={formState.isSubmitting}
                      startIcon={<Send />}
                      sx={{
                        background: 'linear-gradient(135deg, #A855F7 0%, #E879F9 100%)',
                        color: '#FFFFFF',
                        py: 1.75,
                        fontSize: '1rem',
                        fontWeight: 600,
                        borderRadius: '12px',
                        textTransform: 'none',
                        boxShadow: '0 8px 24px rgba(168,85,247,0.3)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #C026D3 0%, #A855F7 100%)',
                          boxShadow: '0 12px 32px rgba(168,85,247,0.45)',
                          transform: 'translateY(-2px)',
                        },
                        '&:disabled': {
                          background: 'rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.3)',
                        },
                      }}
                    >
                      {formState.isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </Button>
                  </Grid>

                  {formState.isSuccess && (
                    <Grid item xs={12}>
                      <Alert severity="success">¡Mensaje enviado! Te responderemos pronto.</Alert>
                    </Grid>
                  )}

                  {formState.isError && (
                    <Grid item xs={12}>
                      <Alert severity="error">
                        {formState.errorMessage || 'Error al enviar. Intenta de nuevo.'}
                      </Alert>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </motion.div>
          </Grid>

          {/* Información de contacto */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.25 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 600,
                  mb: 4,
                  fontSize: '1.25rem',
                }}
              >
                Otras formas de contacto
              </Typography>

              {/* Email — copia al portapapeles */}
              <Box
                component="button"
                onClick={handleCopyEmail}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  p: 2.5,
                  mb: 2,
                  background: 'rgba(255,255,255,0.04)',
                  border: emailCopied ? '1px solid #A855F7' : '1px solid rgba(255,255,255,0.09)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: emailCopied ? '0 8px 24px rgba(168,85,247,0.15)' : 'none',
                  '&:hover': {
                    borderColor: '#A855F7',
                    boxShadow: '0 8px 24px rgba(168,85,247,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    flexShrink: 0,
                  }}
                >
                  <Email sx={{ color: '#A855F7', fontSize: '22px' }} />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem', mb: 0.25 }}>
                    Email
                  </Typography>
                  <Typography sx={{ color: emailCopied ? '#A855F7' : '#9CA3AF', fontSize: '0.825rem', transition: 'color 0.2s' }}>
                    {emailCopied ? '¡Correo copiado!' : EMAIL}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                  {emailCopied
                    ? <Check sx={{ fontSize: '18px', color: '#A855F7' }} />
                    : <ContentCopy sx={{ fontSize: '16px', color: 'rgba(156,163,175,0.5)' }} />
                  }
                </Box>
              </Box>

              {/* WhatsApp e Instagram — links externos */}
              {linkContacts.map(({ href, icon: Icon, iconColor, hoverBorder, hoverGlow, label, detail }) => (
                <Box
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 2.5,
                    mb: 2,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      borderColor: hoverBorder,
                      boxShadow: `0 8px 24px ${hoverGlow}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ color: iconColor, fontSize: '22px' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem', mb: 0.25 }}>
                      {label}
                    </Typography>
                    <Typography sx={{ color: '#9CA3AF', fontSize: '0.825rem' }}>
                      {detail}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
