'use client';

import { getAllClients } from '@/data/clients';

/**
 * Clients Section - Sección de clientes y casos de éxito
 * Muestra logos de clientes y testimonios
 */

export default function ClientsSection() {
  const clients = getAllClients();

  return (
    <section id="clients" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Clientes Satisfechos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Empresas de todo el mundo confían en nosotros para impulsar su crecimiento
          </p>
        </div>

        {/* Grid de logos de clientes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-gray-400 dark:text-gray-600">
                  {client.companyName}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Casos de éxito destacados */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.slice(0, 3).map((client) => (
            <div
              key={`case-${client.id}`}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {client.companyName}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {client.industry}
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Desafío
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {client.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Solución
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {client.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Beneficios
                  </h4>
                  <ul className="space-y-1">
                    {client.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-blue-600 dark:text-blue-400 flex items-start">
                        <span className="mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
