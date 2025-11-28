'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '@/lib/validations';
import type { ContactFormData, ContactFormState, ContactApiResponse } from '@/types/contact.types';
import { apiClient } from '@/lib/axios';
import { trackEvent } from '@/lib/analytics';

/**
 * Hook para manejar el formulario de contacto
 */
export const useContactForm = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
    });

    try {
      const response = await apiClient.post<ContactApiResponse>('/api/contact', data);

      if (response.data.success) {
        setFormState({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
        });

        // Trackear evento de envío de formulario
        trackEvent('contact_form_submit', {
          company: data.company || 'N/A',
        });

        // Resetear formulario después de 3 segundos
        setTimeout(() => {
          reset();
          setFormState({
            isSubmitting: false,
            isSuccess: false,
            isError: false,
          });
        }, 3000);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);

      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: error instanceof Error ? error.message : 'Error desconocido',
      });

      // Resetear estado de error después de 5 segundos
      setTimeout(() => {
        setFormState({
          isSubmitting: false,
          isSuccess: false,
          isError: false,
        });
      }, 5000);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    formState,
  };
};
