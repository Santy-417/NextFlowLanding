import { z } from 'zod';

/**
 * Schema de validación para el formulario de contacto
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras'),

  email: z
    .string()
    .email('Debe ser un correo electrónico válido')
    .toLowerCase(),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      'Debe ser un número de teléfono válido'
    ),

  company: z
    .string()
    .max(100, 'El nombre de la empresa no puede exceder 100 caracteres')
    .optional(),

  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres'),
});

/**
 * Tipo inferido del schema de contacto
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Validar email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validar teléfono (formato internacional)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{7,20}$/;
  return phoneRegex.test(phone);
};

/**
 * Sanitizar string (prevenir XSS)
 */
export const sanitizeString = (str: string): string => {
  return str
    .replace(/[<>]/g, '') // Remover < y >
    .trim();
};

/**
 * Validar longitud de string
 */
export const isValidLength = (
  str: string,
  min: number,
  max: number
): boolean => {
  const length = str.trim().length;
  return length >= min && length <= max;
};
