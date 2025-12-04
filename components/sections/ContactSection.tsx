'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Alert, CircularProgress, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { WhatsApp, Email, Instagram, Send, CheckCircle, Close } from '@mui/icons-material';
import { useContactForm } from '@/hooks/useContactForm';

/**
 * Contact Section - Sección de contacto
 * Formulario de contacto e información
 */

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, errors, formState } = useContactForm();

  // Evitar error de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [mounted]);

  // Mostrar modal de éxito cuando el formulario se envíe correctamente
  useEffect(() => {
    if (formState.isSuccess) {
      setShowSuccessModal(true);
    }
  }, [formState.isSuccess]);

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        background: '#000000',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Difuminado inferior para transición suave al footer */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 1) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg">
        {/* Título */}
        <Box
          suppressHydrationWarning
          sx={{
            textAlign: 'center',
            mb: 8,
            opacity: mounted && isVisible ? 1 : 0,
            transform: mounted && isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              background: 'linear-gradient(90deg, #C026D3 0%, #E879F9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Hablemos de tu proyecto
          </Typography>
          <Typography
            sx={{
              color: '#D1D5DB',
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Cuéntanos qué necesitas y te responderemos en menos de 24 horas.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Formulario */}
          <Grid item xs={12} md={7}>
            <Box
              suppressHydrationWarning
              component="form"
              onSubmit={handleSubmit}
              sx={{
                opacity: mounted && isVisible ? 1 : 0,
                transform: mounted && isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              }}
            >
              <Grid container spacing={3}>
                {/* Nombre */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('name')}
                    label="Nombre *"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    inputProps={{ 'data-lpignore': 'true' }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#A855F7',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#A855F7',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#9CA3AF',
                      },
                    }}
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('email')}
                    label="Email *"
                    type="email"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    inputProps={{ 'data-lpignore': 'true' }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#A855F7',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#A855F7',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#9CA3AF',
                      },
                    }}
                  />
                </Grid>

                {/* Teléfono */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('phone')}
                    label="Teléfono"
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    inputProps={{ 'data-lpignore': 'true' }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#A855F7',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#A855F7',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#9CA3AF',
                      },
                    }}
                  />
                </Grid>

                {/* Empresa */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('company')}
                    label="Empresa"
                    fullWidth
                    error={!!errors.company}
                    helperText={errors.company?.message}
                    inputProps={{ 'data-lpignore': 'true' }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#A855F7',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#A855F7',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#9CA3AF',
                      },
                    }}
                  />
                </Grid>

                {/* Mensaje */}
                <Grid item xs={12}>
                  <TextField
                    {...register('message')}
                    label="Mensaje *"
                    multiline
                    rows={5}
                    fullWidth
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    inputProps={{ 'data-lpignore': 'true' }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#A855F7',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#A855F7',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#9CA3AF',
                      },
                    }}
                  />
                </Grid>

                {/* Botón */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={formState.isSubmitting}
                    startIcon={formState.isSubmitting ? <CircularProgress size={20} sx={{ color: '#FFFFFF' }} /> : <Send />}
                    sx={{
                      background: formState.isSubmitting
                        ? 'rgba(168, 85, 247, 0.6)'
                        : 'linear-gradient(135deg, #A855F7 0%, #E879F9 100%)',
                      color: '#FFFFFF',
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: '12px',
                      textTransform: 'none',
                      boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        background: formState.isSubmitting
                          ? 'rgba(168, 85, 247, 0.6)'
                          : 'linear-gradient(135deg, #C026D3 0%, #A855F7 100%)',
                        boxShadow: '0 15px 40px rgba(168, 85, 247, 0.5)',
                      },
                      '&:disabled': {
                        background: 'rgba(168, 85, 247, 0.6)',
                        color: '#FFFFFF',
                      },
                      '&::before': formState.isSubmitting ? {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                        animation: 'shimmer 2s infinite',
                      } : {},
                      '@keyframes shimmer': {
                        '0%': { left: '-100%' },
                        '100%': { left: '100%' },
                      },
                    }}
                  >
                    {formState.isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje'}
                  </Button>
                </Grid>

                {/* Alert de error */}
                {formState.isError && (
                  <Grid item xs={12}>
                    <Alert
                      severity="error"
                      sx={{
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        borderLeft: '4px solid #EF4444',
                        color: '#FEE2E2',
                        '& .MuiAlert-icon': {
                          color: '#EF4444',
                        },
                      }}
                    >
                      {formState.errorMessage || 'Error al enviar. Intenta de nuevo.'}
                    </Alert>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Grid>

          {/* Información de contacto */}
          <Grid item xs={12} md={5}>
            <Box
              suppressHydrationWarning
              sx={{
                opacity: mounted && isVisible ? 1 : 0,
                transform: mounted && isVisible ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 600,
                  mb: 4,
                  fontSize: '1.5rem',
                }}
              >
                Otras formas de contacto
              </Typography>

              {/* WhatsApp */}
              <Box
                component="a"
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 3,
                  mb: 2,
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#25D366',
                    boxShadow: '0 10px 30px rgba(37, 211, 102, 0.2)',
                  },
                }}
              >
                <WhatsApp sx={{ color: '#25D366', fontSize: '32px', mr: 2 }} />
                <Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 600, mb: 0.5 }}>WhatsApp</Typography>
                  <Typography sx={{ color: '#9CA3AF', fontSize: '0.9rem' }}>
                    {process.env.NEXT_PUBLIC_WHATSAPP}
                  </Typography>
                </Box>
              </Box>

              {/* Email */}
              <Box
                component="a"
                href="mailto:contacto@nextflow.com"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 3,
                  mb: 2,
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#A855F7',
                    boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2)',
                  },
                }}
              >
                <Email sx={{ color: '#A855F7', fontSize: '32px', mr: 2 }} />
                <Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 600, mb: 0.5 }}>Email</Typography>
                  <Typography sx={{ color: '#9CA3AF', fontSize: '0.9rem' }}>
                    contacto@nextflow.com
                  </Typography>
                </Box>
              </Box>

              {/* Instagram */}
              <Box
                component="a"
                href={process.env.NEXT_PUBLIC_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 3,
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#E879F9',
                    boxShadow: '0 10px 30px rgba(232, 121, 249, 0.2)',
                  },
                }}
              >
                <Instagram sx={{ color: '#E879F9', fontSize: '32px', mr: 2 }} />
                <Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 600, mb: 0.5 }}>Instagram</Typography>
                  <Typography sx={{ color: '#9CA3AF', fontSize: '0.9rem' }}>@nextflowai_</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Modal de éxito */}
      <Dialog
        open={showSuccessModal}
        onClose={handleCloseSuccessModal}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #1a0033 0%, #0a0014 100%)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(168, 85, 247, 0.4)',
          },
        }}
      >
        <DialogTitle sx={{ position: 'relative', pb: 0 }}>
          <IconButton
            onClick={handleCloseSuccessModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#9CA3AF',
              '&:hover': {
                color: '#FFFFFF',
                background: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center', py: 6, px: 4 }}>
          {/* Ícono de éxito animado */}
          <Box
            sx={{
              display: 'inline-flex',
              mb: 3,
              animation: 'scaleIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              '@keyframes scaleIn': {
                '0%': { transform: 'scale(0)', opacity: 0 },
                '100%': { transform: 'scale(1)', opacity: 1 },
              },
            }}
          >
            <CheckCircle
              sx={{
                fontSize: '80px',
                color: '#10B981',
                filter: 'drop-shadow(0 4px 20px rgba(16, 185, 129, 0.5))',
              }}
            />
          </Box>

          {/* Título */}
          <Typography
            variant="h4"
            sx={{
              color: '#FFFFFF',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.75rem', sm: '2rem' },
            }}
          >
            ¡Mensaje Enviado!
          </Typography>

          {/* Descripción */}
          <Typography
            sx={{
              color: '#D1D5DB',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Gracias por contactarnos. Hemos recibido tu mensaje correctamente.
            <br />
            <strong style={{ color: '#E879F9' }}>
              Nuestro equipo te responderá en menos de 24 horas.
            </strong>
          </Typography>

          {/* Botón de cerrar */}
          <Button
            onClick={handleCloseSuccessModal}
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #A855F7 0%, #E879F9 100%)',
              color: '#FFFFFF',
              py: 1.5,
              px: 6,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '12px',
              textTransform: 'none',
              boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #C026D3 0%, #A855F7 100%)',
                boxShadow: '0 15px 40px rgba(168, 85, 247, 0.5)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Entendido
          </Button>

          {/* Información adicional */}
          <Box
            sx={{
              mt: 4,
              pt: 3,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography
              sx={{
                color: '#9CA3AF',
                fontSize: '0.875rem',
                mb: 2,
              }}
            >
              También puedes contactarnos directamente por:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Box
                component="a"
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: '#25D366',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: '#20BA5A',
                  },
                }}
              >
                <WhatsApp sx={{ fontSize: '20px' }} />
                WhatsApp
              </Box>
              <Box
                component="a"
                href="mailto:contacto@nextflow.com"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: '#A855F7',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: '#E879F9',
                  },
                }}
              >
                <Email sx={{ fontSize: '20px' }} />
                Email
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </section>
  );
}
