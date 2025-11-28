# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NextFlow Landing Page** - Landing page profesional para NextFlow, una empresa colombiana de desarrollo de software y automatizaciones con IA.

### Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **React**: 19
- **TypeScript**: Strict mode
- **UI**: Material-UI v6 + Tailwind CSS
- **State Management**: TanStack Query v5
- **Forms**: React Hook Form + Zod
- **i18n**: next-intl (Español/Inglés)
- **Email**: Nodemailer
- **Analytics**: Google Analytics 4 + Meta Pixel

## Common Commands

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo en puerto 3000

# Build y producción
npm run build        # Build de producción
npm start            # Iniciar servidor de producción
npm run type-check   # Verificar tipos de TypeScript
npm run lint         # Ejecutar ESLint

# Deploy con PM2 (Hostinger)
npm run pm2:start    # Iniciar con PM2
npm run pm2:restart  # Reiniciar aplicación
npm run pm2:stop     # Detener aplicación
npm run pm2:logs     # Ver logs
npm run pm2:status   # Ver estado
```

## Arquitectura del Proyecto

### Organización por Features

El proyecto usa una arquitectura por features donde cada funcionalidad tiene sus componentes, tipos y lógica agrupados:

```
components/
├── layout/          # Componentes de layout (Header, Footer)
├── sections/        # Secciones del landing (Hero, About, Services, etc.)
├── ui/             # Componentes reutilizables (Button, Card, Modal)
└── providers/      # Context providers (Theme, Query, i18n)
```

### Gestión de Datos

Los datos se manejan de forma **estática** en archivos TypeScript para fácil actualización:

- `data/team.ts` - Miembros del equipo (4 personas: 2 fundadores + 2 colaboradores)
- `data/services.ts` - Servicios ofrecidos (6 servicios, destacar n8n)
- `data/projects.ts` - Portfolio de proyectos (5 proyectos con filtros por categoría)
- `data/clients.ts` - Clientes y casos de éxito
- `data/translations/` - Archivos JSON para i18n (es.json, en.json)

**IMPORTANTE**: Al agregar/modificar contenido, siempre actualizar estos archivos en lugar de hardcodear en componentes.

### Rutas y i18n

El proyecto usa rutas dinámicas con locale:
- `/es/*` - Rutas en español (default)
- `/en/*` - Rutas en inglés

**next-intl** maneja la internacionalización automáticamente a través de `app/[locale]/layout.tsx`.

### Theme System

- **MUI Theme**: Definido en `lib/theme.ts` con colores de NextFlow
- **Paleta de colores**:
  - Primary (Morado): `#8B5CF6`
  - Secondary (Azul): `#3B82F6`
  - Accent (Magenta): `#D946EF` - Usar para CTAs
- **Modo oscuro**: Manejado por Providers con localStorage persistence
- **Tailwind**: Integrado con MUI, usar utility classes cuando sea apropiado

## Estructura de Componentes

### Layout Components

- **Header**: Navegación sticky, toggle de tema/idioma, menú mobile responsive
- **Footer**: Links, redes sociales, copyright
- **WhatsAppButton**: Botón flotante sticky bottom-right con analytics tracking

### Section Components

Orden de las secciones en la home:

1. **HeroSection** - Hero con título, subtítulo, CTAs principales
2. **AboutSection** - Equipo (fundadores destacados primero)
3. **ServicesSection** - Grid de servicios con iconos MUI (destacar n8n)
4. **ProjectsSection** - Portfolio con filtros por categoría
5. **ClientsSection** - Logos y casos de éxito
6. **CTASection** - Call to action para agendar consultoría
7. **ContactSection** - Formulario de contacto con validación

### UI Components

- **Button**: Variantes (primary, secondary, accent, outline)
- **Card**: Con hover effects y elevación
- **Modal**: Para detalles de proyectos
- **TeamCard**: Para miembros del equipo con badges para fundadores
- **ServiceCard**: Con iconos dinámicos de MUI
- **ProjectCard**: Con imagen, categoría y tecnologías

## Validación de Formularios

Usa **Zod** para schemas de validación en `lib/validations.ts`:

```typescript
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10),
});
```

**React Hook Form** con `zodResolver` para integración en `hooks/useContactForm.ts`.

## API Routes

### POST /api/contact

- Recibe datos del formulario de contacto
- Valida con Zod
- Envía email con Nodemailer (2 emails: al equipo + confirmación al usuario)
- Retorna `{ success: boolean, message: string }`

**Variables de entorno requeridas**:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`
- `EMAIL_FROM`, `EMAIL_TO`

## Analytics

Sistema de analytics unificado en `lib/analytics.ts`:

```typescript
// Inicializar (se hace automáticamente en Providers)
initAnalytics();

// Trackear eventos
trackEvent('contact_form_submit', { company: 'XYZ' });
trackEvent('whatsapp_click', { source: 'floating_button' });
```

**Eventos importantes a trackear**:
- `contact_form_submit`
- `whatsapp_click`
- `project_view`
- `service_click`
- `cta_click`

## Patrones de Código

### Import Paths

Usar alias `@/` para imports:

```typescript
import { Button } from '@/components/ui/Button';
import { teamMembers } from '@/data/team';
import type { Service } from '@/types/service.types';
```

### Animaciones

Usar `useScrollAnimation` hook para animar elementos al scroll:

```typescript
const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: true });

<div ref={elementRef} className={isVisible ? 'animate-fade-in' : ''}>
  {/* contenido */}
</div>
```

### Componentes Client vs Server

- **Server Components** (default): Páginas, layouts
- **Client Components** (`'use client'`): Interactividad, hooks, estado

**Regla**: Solo agregar `'use client'` cuando sea necesario (hooks, eventos, estado).

## Imágenes y Assets

### Ubicaciones

- Logo: `public/images/logo-light.svg` y `logo-dark.svg`
- Equipo: `public/images/team/[nombre].jpg` (400x400px)
- Proyectos: `public/images/projects/[proyecto].jpg` (1200x800px)
- Clientes: `public/images/clients/[cliente].png`
- OG Image: `public/images/og-image.jpg` (1200x630px)

### Uso con Next.js Image

```typescript
import Image from 'next/image';

<Image
  src="/images/team/santiago.jpg"
  alt="Santiago Chavarro"
  width={400}
  height={400}
  priority={false}
/>
```

## Variables de Entorno

**Públicas** (NEXT_PUBLIC_*):
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_WHATSAPP`
- `NEXT_PUBLIC_TIKTOK`
- `NEXT_PUBLIC_INSTAGRAM`

**Privadas** (solo server):
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`
- `EMAIL_FROM`, `EMAIL_TO`

**Configuración**: Copiar `.env.local.example` a `.env.local` y completar valores.

## Content Management

### Agregar un Nuevo Miembro del Equipo

1. Agregar foto en `public/images/team/[nombre].jpg`
2. Editar `data/team.ts`:

```typescript
{
  id: 'nuevo-miembro',
  name: 'Nombre Completo',
  role: 'Cargo',
  description: 'Descripción breve',
  image: '/images/team/nuevo.jpg',
  linkedin: 'https://linkedin.com/in/...',
  github: 'https://github.com/...',
  isFounder: false,
  order: 5,
}
```

### Agregar un Nuevo Servicio

Editar `data/services.ts`:

```typescript
{
  id: 'nuevo-servicio',
  title: 'Título del Servicio',
  description: 'Descripción breve',
  icon: 'NombreIconoMUI', // Ej: 'Code', 'Storage', 'Psychology'
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  highlighted: false, // true para destacar (como n8n)
  order: 7,
}
```

**Iconos disponibles**: Ver [MUI Icons](https://mui.com/material-ui/material-icons/)

### Agregar un Nuevo Proyecto

1. Agregar screenshot en `public/images/projects/[proyecto].jpg`
2. Editar `data/projects.ts`:

```typescript
{
  id: 'nuevo-proyecto',
  name: 'Nombre del Proyecto',
  description: 'Descripción breve para card',
  howItWorks: 'Explicación de cómo funciona',
  problemSolved: 'Qué problema resuelve',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  image: '/images/projects/nuevo.jpg',
  category: 'automation', // 'automation' | 'ai' | 'web' | 'mobile'
  featured: false,
  order: 6,
}
```

## Deployment

### Hostinger con PM2

El proyecto está configurado para deploy en Hostinger usando PM2:

1. SSH al servidor
2. Clonar/pull el repo
3. `npm install`
4. Configurar `.env.local`
5. `npm run build`
6. `npm run pm2:start`

**Actualizar**:
```bash
git pull
npm install
npm run build
npm run pm2:restart
```

### Variables de Entorno en Producción

Asegurar que `.env.local` en el servidor tenga:
- Credenciales SMTP válidas
- URLs de producción
- IDs de analytics configurados
- Info de redes sociales

## SEO

El proyecto incluye:
- Meta tags optimizados en `app/layout.tsx`
- Open Graph tags para redes sociales
- Sitemap en `public/robots.txt`
- `robots.txt` configurado

**Imagen OG**: Debe existir en `public/images/og-image.jpg` (1200x630px)

## Debugging

### Desarrollo Local

```bash
npm run dev
# Abrir http://localhost:3000/es o /en
```

### Type Errors

```bash
npm run type-check
```

### Email Testing

1. Verificar que `.env.local` tiene credenciales SMTP
2. Probar formulario en `/es#contact`
3. Revisar logs de Nodemailer en consola

### Analytics Testing

1. Instalar extensión "Google Analytics Debugger"
2. Verificar eventos en consola del navegador
3. Revisar en GA4 Real-Time reports

## Common Issues

### Error: Cannot find module 'next-intl'

```bash
npm install
```

### Error: SMTP Authentication failed

- Verificar credenciales en `.env.local`
- Si usas Gmail, usar "Contraseña de aplicación" no la contraseña normal
- Verificar 2FA habilitado en cuenta de Google

### Build Error: Type errors

```bash
npm run type-check
# Revisar y corregir errores de TypeScript
```

### PM2 not starting

```bash
# Verificar que el build fue exitoso
npm run build

# Ver logs de PM2
npm run pm2:logs
```

## Team Information

**Equipo NextFlow** (actualizar en `data/team.ts` si cambia):

**Fundadores**:
1. Santiago Chavarro - Co-fundador & CEO
2. Samuel Aristizabal - Co-fundador & CTO

**Equipo**:
3. Diego - Diseñador Gráfico
4. Alejandro - Desarrollador y Colaborador

## Contacto y Redes Sociales

- WhatsApp: 3003214043
- TikTok: @next.flow.ai
- Instagram: @nextflowai_
- Email: contacto@nextflow.com (configurar)

---

**Última actualización**: 2025-01-27
