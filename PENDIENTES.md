# web-jabemar: pendientes

Demo para Jabemar S.L. (template `carpinteria-metalica-1` «Medida», core `^0.5.0`), montada el 20/10/2026 con los datos de su ficha de Google y las fotos del propietario. `seo.indexar` sin activar: no sale en Google.

## Antes del primer despliegue

- [ ] Vercel: activar Analytics (*Enable*) antes de desplegar (`analitica.vercel: true`).
- [ ] Vercel: variable `NPM_RC` (Production y Preview) para descargar `@andrei-leads/core`.
- [ ] No hay `pnpm-lock.yaml`: se genera con `pnpm install` en local (necesita el token de GitHub Packages) y se commitea.

## Tras el despliegue

- [ ] `seo.url` con la URL real de Vercel.

## Si dice que sí (marcado `DEMO` en `site.config.ts`)

- [ ] CIF real (`nif: "PENDIENTE"`), razón social y Registro Mercantil.
- [ ] Email (sacado de directorios, sin confirmar).
- [ ] Año de fundación (1994, constitución de la SL según directorios).
- [ ] Textos de servicios y empresa, escritos a partir de fotos y reseñas.
- [ ] Zonas donde trabaja, WhatsApp, equipo, garantías.
- [ ] Dominio, `seo.indexar: true`, Vercel Pro y repo privado (`docs/nuevo-cliente.md` de `kit`).
