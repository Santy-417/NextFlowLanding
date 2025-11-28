import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

/**
 * Configuración base de Axios
 */
const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  timeout: 10000, // 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Instancia de Axios configurada
 */
const axiosInstance: AxiosInstance = axios.create(axiosConfig);

/**
 * Request Interceptor
 * Se ejecuta antes de cada petición
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // Agregar token de autenticación si existe
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Logging en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    }

    return config;
  },
  (error: AxiosError) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * Se ejecuta después de cada respuesta
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Logging en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API Response] ${response.status} ${response.config.url}`);
    }

    return response;
  },
  (error: AxiosError) => {
    // Manejo de errores común
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error('[API Response Error]', {
        status: error.response.status,
        data: error.response.data,
        url: error.config?.url,
      });

      // Manejo específico de errores
      switch (error.response.status) {
        case 401:
          // No autorizado - limpiar token y redirigir
          if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
          }
          break;
        case 403:
          console.error('Acceso prohibido');
          break;
        case 404:
          console.error('Recurso no encontrado');
          break;
        case 500:
          console.error('Error interno del servidor');
          break;
        default:
          console.error('Error en la petición');
      }
    } else if (error.request) {
      // La petición se realizó pero no hubo respuesta
      console.error('[API No Response]', error.request);
    } else {
      // Algo sucedió al configurar la petición
      console.error('[API Setup Error]', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

/**
 * Helper functions para peticiones comunes
 */

export const apiClient = {
  get: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(url, config),

  post: <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.post<T>(url, data, config),

  put: <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.put<T>(url, data, config),

  patch: <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.patch<T>(url, data, config),

  delete: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<T>(url, config),
};
