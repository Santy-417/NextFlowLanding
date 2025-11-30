'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import { WhatsApp, Email, Instagram, Send } from '@mui/icons-material';
import { useContactForm } from '@/hooks/useContactForm';

/**
 * Contact Section - Sección de contacto
 * Formulario de contacto e información
 */

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, errors, formState } = useContactForm();

  useEffect(() => {
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
  }, []);

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
      <Container maxWidth="lg">
        {/* Título */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
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
              component="form"
              onSubmit={handleSubmit}
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
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
                    startIcon={<Send />}
                    sx={{
                      background: 'linear-gradient(135deg, #A855F7 0%, #E879F9 100%)',
                      color: '#FFFFFF',
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: '12px',
                      textTransform: 'none',
                      boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #C026D3 0%, #A855F7 100%)',
                        boxShadow: '0 15px 40px rgba(168, 85, 247, 0.5)',
                      },
                      '&:disabled': {
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'rgba(255, 255, 255, 0.3)',
                      },
                    }}
                  >
                    {formState.isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                </Grid>

                {/* Alertas */}
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
          </Grid>

          {/* Información de contacto */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
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
    </section>
  );
}
