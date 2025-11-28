'use client';

import Image from 'next/image';

/**
 * About Section - Sección del equipo
 * Diseño full-screen con dos columnas
 */

export default function AboutSection() {
  return (
    <section id="about" className="relative w-screen">
      {/* Desktop: Dos columnas lado a lado */}
      <div className="hidden md:flex w-full h-screen">
        {/* Columna Izquierda - Santiago */}
        <div className="w-1/2 h-full flex items-center justify-start px-8 lg:px-16 relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Imagen Santiago (70% del ancho de la columna) */}
          <div className="relative w-[70%] h-[70%] rounded-lg overflow-hidden shadow-2xl [&_img]:object-cover">
            <Image
              src="/images/FotoSantiago.jpg"
              alt="Santiago Chavarro"
              fill
              priority
            />
          </div>

          {/* Descripción a la derecha de la imagen */}
          <div className="absolute right-8 lg:right-16 max-w-sm">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
              Santiago Chavarro
            </h2>
            <p className="text-purple-400 font-medium text-lg mb-4">
              Co-fundador & CEO
            </p>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              Santiago es un desarrollador que piensa primero en la arquitectura y después en el código, lo cual ya lo pone por encima del promedio de &quot;programadores&quot; que solo saben copiar soluciones de internet. Su enfoque está en crear aplicaciones web y móviles que funcionen bien bajo presión: limpias, mantenibles y escalables.
            </p>
          </div>
        </div>

        {/* Columna Derecha - Samuel */}
        <div className="w-1/2 h-full flex items-center justify-end px-8 lg:px-16 relative bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900">
          {/* Descripción a la izquierda de la imagen */}
          <div className="absolute left-8 lg:left-16 max-w-sm">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
              Samuel Aristizabal
            </h2>
            <p className="text-blue-400 font-medium text-lg mb-4">
              Co-fundador & CTO
            </p>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              Samuel es un ingeniero de software orientado a resultados, alguien que no pierde tiempo en features innecesarias y prioriza lo que mueve la aguja. Destaca por su capacidad para integrar tecnologías modernas y convertir requerimientos difusos en sistemas estables y bien diseñados.
            </p>
          </div>

          {/* Imagen Samuel (70% del ancho de la columna) */}
          <div className="relative w-[70%] h-[70%] rounded-lg overflow-hidden shadow-2xl [&_img]:object-cover">
            <Image
              src="/images/FotoSamuFull.png"
              alt="Samuel Aristizabal"
              fill
              priority
            />
          </div>
        </div>
      </div>

      {/* Mobile: Apiladas verticalmente */}
      <div className="md:hidden">
        {/* Santiago - Mobile */}
        <div className="relative w-screen h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Imagen arriba */}
          <div className="relative w-full max-w-sm h-[60%] rounded-lg overflow-hidden shadow-2xl mb-8 [&_img]:object-cover">
            <Image
              src="/images/FotoSantiago.jpg"
              alt="Santiago Chavarro"
              fill
              priority
            />
          </div>

          {/* Texto abajo */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Santiago Chavarro
            </h2>
            <p className="text-purple-400 font-medium text-base mb-4">
              Co-fundador & CEO
            </p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
              Santiago es un desarrollador que piensa primero en la arquitectura y después en el código, lo cual ya lo pone por encima del promedio de &quot;programadores&quot; que solo saben copiar soluciones de internet. Su enfoque está en crear aplicaciones web y móviles que funcionen bien bajo presión: limpias, mantenibles y escalables.
            </p>
          </div>
        </div>

        {/* Samuel - Mobile */}
        <div className="relative w-screen h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900">
          {/* Imagen arriba */}
          <div className="relative w-full max-w-sm h-[60%] rounded-lg overflow-hidden shadow-2xl mb-8 [&_img]:object-cover">
            <Image
              src="/images/FotoSamuFull.png"
              alt="Samuel Aristizabal"
              fill
              priority
            />
          </div>

          {/* Texto abajo */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Samuel Aristizabal
            </h2>
            <p className="text-blue-400 font-medium text-base mb-4">
              Co-fundador & CTO
            </p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
              Samuel es un ingeniero de software orientado a resultados, alguien que no pierde tiempo en features innecesarias y prioriza lo que mueve la aguja. Destaca por su capacidad para integrar tecnologías modernas y convertir requerimientos difusos en sistemas estables y bien diseñados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
