/**
 * Datos del formulario de contacto
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

/**
 * Respuesta de la API de contacto
 */
export interface ContactApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Estado del formulario de contacto
 */
export interface ContactFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}
