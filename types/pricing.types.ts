/**
 * Tipos de los planes de cotización de NextFlow.
 * Los precios se manejan en COP (pesos colombianos).
 */

/** Qué necesita ver el cliente antes de decidir */
export type PricingNeed = 'none' | 'meeting' | 'prototype';

/** Tamaño de proyecto al que apunta cada plan */
export type ProjectSize = 'small' | 'medium' | 'large';

export interface PricingPlan {
  id: string;
  /** Nombre corto del plan (Gratis, Esencial, ...) */
  name: string;
  /** Qué entrega el plan, en una línea */
  tagline: string;
  /** Precio en COP. 0 = sin costo */
  price: number;
  /** Nota al lado del precio (ej: 'pago único') */
  priceNote: string;
  /** Porcentaje del valor pagado que se descuenta del proyecto */
  creditPercent: number;
  features: string[];
  /** Para qué tipo de cliente o proyecto es */
  idealFor: string;
  /** Tiempo de entrega legible (ej: '3 a 5 días') */
  deliveryTime: string;
  /** Si incluye reunión o prototipo (para los filtros) */
  need: PricingNeed;
  sizes: ProjectSize[];
  /** true = card destacada con borde morado */
  highlighted: boolean;
  order: number;
}

/** Fila de la tabla comparativa: un valor por plan, en el orden de `pricingPlans` */
export interface PricingComparisonRow {
  label: string;
  values: string[];
}

/** Regla comercial del modelo de cotización */
export interface PricingRule {
  title: string;
  description: string;
  icon: string;
}
