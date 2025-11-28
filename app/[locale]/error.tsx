'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log del error en consola
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Algo salió mal</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Ocurrió un error inesperado. Por favor intenta nuevamente.
        </p>
        <button
          onClick={() => reset()}
          className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
