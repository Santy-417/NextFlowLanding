# Imágenes - NextFlow Landing

Este directorio contiene todas las imágenes del sitio.

## Estructura

```
images/
├── logo-light.svg        # Logo para modo claro
├── logo-dark.svg         # Logo para modo oscuro
├── og-image.jpg          # Imagen Open Graph (1200x630px)
├── favicon.ico           # Favicon del sitio
├── team/                 # Fotos del equipo
├── projects/             # Screenshots de proyectos
├── clients/              # Logos de clientes
└── hero/                 # Imagen para hero section
```

## Especificaciones

### Logo
- **Formatos**: SVG (preferido) o PNG con fondo transparente
- **Variantes**: Modo claro y modo oscuro
- **Dimensiones sugeridas**: 200-300px de ancho

### Open Graph Image
- **Formato**: JPG o PNG
- **Dimensiones**: 1200x630px (ratio 1.91:1)
- **Peso**: < 1MB
- **Uso**: Vista previa en redes sociales

### Fotos del Equipo
- **Formato**: JPG
- **Dimensiones**: 400x400px (cuadrado)
- **Peso**: < 200KB por imagen
- **Nombres**: `santiago.jpg`, `samuel.jpg`, `diego.jpg`, `alejandro.jpg`

### Screenshots de Proyectos
- **Formato**: JPG o PNG
- **Dimensiones**: 1200x800px (ratio 3:2)
- **Peso**: < 500KB por imagen
- **Nombres descriptivos**: `whatsapp-bot.jpg`, `tiktok-analytics.jpg`, etc.

### Logos de Clientes
- **Formato**: PNG con fondo transparente (preferido) o JPG
- **Dimensiones**: Max 400px de ancho
- **Peso**: < 100KB por logo

## Optimización

Todas las imágenes deben estar optimizadas antes de subirlas:
- Usar Next.js Image component para lazy loading
- Formatos modernos: AVIF > WebP > JPG
- Compresión adecuada sin pérdida de calidad
- Herramientas recomendadas: TinyPNG, ImageOptim, Squoosh
