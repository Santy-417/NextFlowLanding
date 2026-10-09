import type {
  PricingPlan,
  PricingComparisonRow,
  PricingRule,
  PricingNeed,
  ProjectSize,
} from '@/types/pricing.types';

/**
 * Planes de cotización de NextFlow.
 * Cuatro niveles según cuánto quiera ver el cliente antes de decidir.
 * Lo que paga por la cotización se descuenta del proyecto si firma en 30 días.
 *
 * IMPORTANTE: precios en COP. Actualizar acá, nunca en el componente.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: 'gratis',
    name: 'Gratis',
    tagline: 'Bot cotizador de NextFlow',
    price: 0,
    priceNote: 'sin costo',
    creditPercent: 0,
    features: [
      'Conversación con el bot: unos 10 a 15 mensajes',
      'Resumen de tu proyecto',
      'Rango estimado de precio y solución recomendada',
      'Una cotización por empresa',
    ],
    idealFor: 'Explorar la idea antes de invertir.',
    deliveryTime: 'Inmediato',
    need: 'none',
    sizes: ['small', 'medium', 'large'],
    highlighted: false,
    order: 1,
  },
  {
    id: 'esencial',
    name: 'Esencial',
    tagline: 'Documento de alcance',
    price: 100000,
    priceNote: 'pago único',
    creditPercent: 100,
    features: [
      'Brief asíncrono, sin reunión larga',
      'Levantamiento de requerimientos',
      'Módulos, stack, tiempos y precio',
      'Entrega en 3 a 5 días',
    ],
    idealFor: 'Proyectos pequeños o presupuesto justo.',
    deliveryTime: '3 a 5 días',
    need: 'none',
    sizes: ['small', 'medium'],
    highlighted: false,
    order: 2,
  },
  {
    id: 'estrategica',
    name: 'Estratégica',
    tagline: 'Reunión y opciones',
    price: 180000,
    priceNote: 'pago único',
    creditPercent: 100,
    features: [
      'Reunión de descubrimiento de 60 a 90 min',
      'Documento estructurado con ideas y sugerencias',
      '2 opciones de ejecución con pros, contras y costo',
      'Roadmap por fases',
      'Entrega en 5 a 7 días',
    ],
    idealFor: 'Proyectos medianos con dudas.',
    deliveryTime: '5 a 7 días',
    need: 'meeting',
    sizes: ['medium', 'large'],
    highlighted: true,
    order: 3,
  },
  {
    id: 'demo',
    name: 'Demo',
    tagline: 'Prototipo navegable',
    price: 300000,
    priceNote: 'pago único',
    creditPercent: 100,
    features: [
      'Todo lo del plan Estratégica',
      'Prototipo real: paneles, flujos y funcionalidades',
      'Reunión de presentación: el porqué y el paso a paso',
      'Cotización detallada',
      'Entrega en 7 a 10 días',
    ],
    idealFor: 'Proyectos grandes o clientes que necesitan verlo para decidir.',
    deliveryTime: '7 a 10 días',
    need: 'prototype',
    sizes: ['large'],
    highlighted: false,
    order: 4,
  },
];

/** Filas de la tabla comparativa, en el mismo orden que `pricingPlans` */
export const pricingComparison: PricingComparisonRow[] = [
  {
    label: 'Precio',
    values: ['Gratis', '$100.000', '$180.000', '$300.000'],
  },
  {
    label: 'Levantamiento de requerimientos',
    values: [
      'Resumen del bot',
      'Documento de alcance',
      'Documento estructurado',
      'Documento estructurado',
    ],
  },
  {
    label: 'Reunión con el cliente',
    values: [
      'No incluye',
      'No incluye',
      'Descubrimiento (60 a 90 min)',
      'Descubrimiento y presentación',
    ],
  },
  {
    label: 'Ideas y sugerencias de NextFlow',
    values: ['No incluye', 'No incluye', 'Incluido', 'Incluido'],
  },
  {
    label: '2 opciones de ejecución',
    values: ['No incluye', 'No incluye', 'Incluido', 'Incluido'],
  },
  {
    label: 'Roadmap por fases',
    values: ['No incluye', 'No incluye', 'Incluido', 'Incluido'],
  },
  {
    label: 'Prototipo navegable',
    values: ['No incluye', 'No incluye', 'No incluye', 'Incluido'],
  },
  {
    label: 'Explicación del porqué, paso a paso',
    values: ['No incluye', 'No incluye', 'No incluye', 'Incluido'],
  },
  {
    label: 'Precio que recibes',
    values: [
      'Rango orientativo',
      'Precio del proyecto',
      'Precio por opción',
      'Cotización detallada',
    ],
  },
  {
    label: 'Tiempo de entrega',
    values: ['Inmediato', '3 a 5 días', '5 a 7 días', '7 a 10 días'],
  },
  {
    label: 'Crédito al proyecto',
    values: ['No incluye', '100%', '100%', '100%'],
  },
];

/** Reglas comerciales del modelo de cotización */
export const pricingRules: PricingRule[] = [
  {
    title: 'Crédito de 30 días',
    description:
      'Lo pagado se descuenta del proyecto si firman dentro de los 30 días siguientes a la entrega.',
    icon: 'EventAvailable',
  },
  {
    title: 'Sube de plan cuando quieras',
    description: 'Si empiezas en Esencial y luego quieres más, pagas solo la diferencia.',
    icon: 'TrendingUp',
  },
  {
    title: 'El bot orienta, no compromete',
    description:
      'El rango del plan Gratis es una estimación. El precio se cierra con el documento de alcance.',
    icon: 'SmartToy',
  },
  {
    title: 'Uso de los entregables',
    description:
      'Los documentos son para uso interno del cliente. El prototipo es solo una demostración.',
    icon: 'Description',
  },
];

/** Etiquetas de los filtros de necesidad */
export const NEED_FILTERS: { label: string; value: PricingNeed | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Sin reunión', value: 'none' },
  { label: 'Con reunión', value: 'meeting' },
  { label: 'Con prototipo', value: 'prototype' },
];

/** Etiquetas de los filtros de tamaño */
export const SIZE_FILTERS: { label: string; value: ProjectSize | 'all' }[] = [
  { label: 'Sin filtrar', value: 'all' },
  { label: 'Pequeño', value: 'small' },
  { label: 'Mediano', value: 'medium' },
  { label: 'Grande', value: 'large' },
];

export const getAllPlans = (): PricingPlan[] =>
  [...pricingPlans].sort((a, b) => a.order - b.order);

/**
 * Filtra planes por lo que necesita ver el cliente y por tamaño de proyecto.
 * 'meeting' incluye también los planes con prototipo, porque esos traen reunión.
 */
export const getFilteredPlans = (
  need: PricingNeed | 'all',
  size: ProjectSize | 'all'
): PricingPlan[] =>
  getAllPlans().filter((plan) => {
    const matchesNeed =
      need === 'all' ||
      (need === 'meeting'
        ? plan.need === 'meeting' || plan.need === 'prototype'
        : plan.need === need);

    const matchesSize = size === 'all' || plan.sizes.includes(size);

    return matchesNeed && matchesSize;
  });

/** Formatea un valor en COP con separador de miles. Determinista (evita hydration mismatch). */
export const formatCOP = (value: number): string =>
  '$' + Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

/**
 * Crédito que aplica un plan sobre un proyecto.
 * Si el proyecto vale menos que el crédito, el descuento se limita al valor del proyecto.
 */
export const getPlanCredit = (plan: PricingPlan, projectValue: number): number => {
  const credit = (plan.price * plan.creditPercent) / 100;
  return Math.min(credit, Math.max(projectValue, 0));
};
