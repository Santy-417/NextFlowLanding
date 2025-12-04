# NextFlow Landing

Landing page oficial de **NextFlow** - Empresa colombiana de desarrollo de software y automatizaciones con IA.

## Stack Tecnologico

- **Framework**: [Next.js 15](https://nextjs.org/) con App Router
- **React**: 19
- **TypeScript**: Strict mode habilitado
- **UI Library**: [Material-UI v6](https://mui.com/)
- **Estilos**: Tailwind CSS + Emotion (MUI)
- **Estado del servidor**: TanStack Query v5
- **Formularios**: React Hook Form + Zod
- **HTTP Client**: Axios
- **i18n**: next-intl (Español/Inglés)
- **Animaciones**: Framer Motion
- **Email**: Nodemailer

## Estructura del Proyecto

```
nextflow-landing/
├── app/                      # Next.js App Router
│   ├── [locale]/            # Rutas con i18n (es/en)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   ├── api/
│   │   └── contact/         # API route de contacto
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Estilos globales
├── components/
│   ├── layout/              # Header, Footer, Nav
│   ├── sections/            # Secciones del landing
│   ├── ui/                  # Componentes reutilizables
│   └── providers/           # Context providers
├── lib/                     # Utilidades y configuraciones
│   ├── theme.ts            # MUI theme
│   ├── i18n.ts             # next-intl config
│   ├── analytics.ts        # GA4 + Meta Pixel
│   ├── validations.ts      # Schemas de Zod
│   └── axios.ts            # Axios instance
├── hooks/                   # Custom React hooks
├── services/                # Servicios (email, etc)
├── types/                   # TypeScript interfaces
├── data/                    # Datos estáticos
│   ├── team.ts
│   ├── services.ts
│   ├── projects.ts
│   ├── clients.ts
│   └── translations/
│       ├── es.json
│       └── en.json
├── public/
│   ├── images/
│   │   ├── team/
│   │   ├── projects/
│   │   └── clients/
│   └── fonts/
└── styles/
```

## Paleta de Colores

Basada en el logo de NextFlow:

```typescript
Primary (Morado):   #8B5CF6
Secondary (Azul):   #3B82F6
Accent (Magenta):   #D946EF  // Para CTAs
Neutral Light:      #F3F4F6
Neutral Dark:       #1F2937
```

## Instalacion y Configuracion

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/nextflow-landing.git
cd nextflow-landing
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.local.example` a `.env.local`:

```bash
cp .env.local.example .env.local
```

Edita `.env.local` y configura las variables necesarias:

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu-email@gmail.com
SMTP_PASSWORD=tu-contraseña-de-aplicacion
EMAIL_FROM=nextflow@tudominio.com
EMAIL_TO=contacto@nextflow.com

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=

# Social
NEXT_PUBLIC_WHATSAPP=3159138270
NEXT_PUBLIC_TIKTOK=https://www.tiktok.com/@next.flow.ai
NEXT_PUBLIC_INSTAGRAM=https://www.instagram.com/nextflowai_
```

#### Configuracion de Email (Gmail)

Para usar Gmail con Nodemailer:

1. Ir a [Google Account Security](https://myaccount.google.com/security)
2. Habilitar verificación en 2 pasos
3. Crear una "Contraseña de aplicación"
4. Usar esa contraseña en `SMTP_PASSWORD`

### 4. Agregar contenido

#### Imagenes del equipo

Coloca las fotos del equipo en `public/images/team/`:
- `santiago.jpg` (400x400px)
- `samuel.jpg` (400x400px)
- `diego.jpg` (400x400px)
- `alejandro.jpg` (400x400px)

#### Screenshots de proyectos

Coloca los screenshots en `public/images/projects/`:
- `whatsapp-bot.jpg`
- `tiktok-analytics.jpg`
- `nano-banana.jpg`
- etc.

#### Logos

- Logo de NextFlow: `public/images/logo-light.svg` y `logo-dark.svg`
- OG Image: `public/images/og-image.jpg` (1200x630px)
- Favicon: `public/favicon.ico`

## Comandos de Desarrollo

### Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de produccion

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

### Type Check

```bash
npm run type-check
```

## Deploy en Hostinger

### Requisitos

- Node.js v18.19.1 o superior
- PM2 (process manager)

### Pasos

1. **Conectar por SSH a Hostinger**

```bash
ssh usuario@tu-dominio.com
```

2. **Clonar el repositorio**

```bash
cd ~
git clone https://github.com/tu-usuario/nextflow-landing.git
cd nextflow-landing
```

3. **Instalar dependencias**

```bash
npm install
```

4. **Configurar variables de entorno**

```bash
cp .env.local.example .env.local
nano .env.local  # Editar con las credenciales reales
```

5. **Build de produccion**

```bash
npm run build
```

6. **Iniciar con PM2**

```bash
npm run pm2:start
```

### Comandos PM2

```bash
# Ver status
npm run pm2:status

# Ver logs
npm run pm2:logs

# Reiniciar
npm run pm2:restart

# Detener
npm run pm2:stop
```

### Actualizar el sitio

```bash
cd ~/nextflow-landing
git pull
npm install
npm run build
npm run pm2:restart
```

### Configurar Nginx (opcional)

Si usas Nginx como reverse proxy:

```nginx
server {
    listen 80;
    server_name nextflow.com www.nextflow.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Internacionalizacion

El sitio soporta dos idiomas:
- **Español** (default): `/es`
- **Ingles**: `/en`

### Agregar traducciones

Edita los archivos:
- `data/translations/es.json`
- `data/translations/en.json`

### Uso en componentes

```tsx
import { useTranslations } from 'next-intl';

function Component() {
  const t = useTranslations('common');
  return <p>{t('learnMore')}</p>;
}
```

## Analytics

El proyecto incluye integracion con:
- **Google Analytics 4** (GA4)
- **Meta Pixel** (Facebook)

Configurar en `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
```

### Trackear eventos

```tsx
import { trackEvent } from '@/lib/analytics';

trackEvent('contact_form_submit', {
  company: 'Empresa XYZ',
});
```

## Gestion de Contenido

### Agregar miembros del equipo

Editar `data/team.ts`:

```typescript
{
  id: 'nuevo-miembro',
  name: 'Nombre',
  role: 'Rol',
  description: 'Descripcion',
  image: '/images/team/nuevo.jpg',
  linkedin: 'https://...',
  isFounder: false,
  order: 5,
}
```

### Agregar servicios

Editar `data/services.ts`:

```typescript
{
  id: 'nuevo-servicio',
  title: 'Titulo',
  description: 'Descripcion',
  icon: 'NombreIconoMUI',
  features: ['Feature 1', 'Feature 2'],
  highlighted: false,
  order: 7,
}
```

### Agregar proyectos

Editar `data/projects.ts`:

```typescript
{
  id: 'nuevo-proyecto',
  name: 'Nombre',
  description: 'Descripcion',
  howItWorks: 'Como funciona',
  problemSolved: 'Problema resuelto',
  technologies: ['Tech1', 'Tech2'],
  image: '/images/projects/nuevo.jpg',
  category: 'automation',
  featured: false,
  order: 6,
}
```

## SEO

El sitio incluye:
- Meta tags optimizados
- Open Graph tags
- Twitter Cards
- Sitemap (generar con `next-sitemap`)
- robots.txt

## Licencia

© 2025 NextFlow. Todos los derechos reservados.

## Contacto

- **WhatsApp**: [3159138270](https://wa.me/3159138270)
- **TikTok**: [@next.flow.ai](https://www.tiktok.com/@next.flow.ai)
- **Instagram**: [@nextflowai_](https://www.instagram.com/nextflowai_)
- **Email**: contacto@nextflow.com

---

Desarrollado con ♥ por el equipo de NextFlow
