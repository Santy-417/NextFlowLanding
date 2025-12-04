'use client';

import { getAllClients } from '@/data/clients';

/**
 * Clients Section - Sección de clientes y casos de éxito
 * Muestra logos de clientes y testimonios
 */

export default function ClientsSection() {
  const clients = getAllClients();

  return (
    <section id="clients" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
            <span className="text-sm font-semibold text-purple-400">Casos de Éxito</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resultados que Hablan
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Transformamos negocios con automatización inteligente
          </p>
        </div>

        {/* Casos de éxito - Solo mostrar los casos destacados */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20">
                      {client.companyName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {client.companyName}
                      </h3>
                      <p className="text-sm text-gray-400">{client.industry}</p>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                  <span className="text-xs font-semibold text-green-400">✓ Completado</span>
                </div>
              </div>

              {/* Contenido en 3 columnas */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Desafío */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-red-400 text-sm">⚠️</span>
                    </div>
                    <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider">
                      Desafío
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {client.problem}
                  </p>
                </div>

                {/* Solución */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-purple-400 text-sm">⚡</span>
                    </div>
                    <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">
                      Solución
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {client.solution}
                  </p>
                </div>

                {/* Beneficios */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 text-sm">📈</span>
                    </div>
                    <h4 className="text-sm font-bold text-green-400 uppercase tracking-wider">
                      Resultados
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {client.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Testimonial */}
              {client.testimonial && (
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <div className="flex items-start gap-4">
                    <div className="text-purple-400/20 text-4xl leading-none">"</div>
                    <div className="flex-1">
                      <p className="text-gray-300 italic mb-3">
                        {client.testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/20">
                          {client.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">
                            {client.testimonial.author}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {client.testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
