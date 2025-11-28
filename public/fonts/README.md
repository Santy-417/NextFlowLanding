# Fuentes Personalizadas

Si necesitas usar fuentes personalizadas (no de Google Fonts), colócalas aquí.

## Formato recomendado
- WOFF2 (mejor compresión)
- WOFF (fallback)

## Uso

1. Coloca los archivos de fuente aquí
2. Importa en `app/globals.css`:

```css
@font-face {
  font-family: 'MiFuente';
  src: url('/fonts/mifuente.woff2') format('woff2'),
       url('/fonts/mifuente.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

## Nota
Actualmente el proyecto usa **Inter** de Google Fonts, que se carga automáticamente.
Solo usa fuentes locales si es necesario para branding específico.
