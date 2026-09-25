# aussterben-site

Web personal de Aitor Linares ("Aussterben") — minimalista, oscura, sin frameworks. Solo HTML/CSS/JS puro, lista para GitHub Pages.

## Archivos

- `index.html` — estructura de la página
- `style.css` — estilos
- `script.js` — efecto de escritura del hero + renderizado del blog

## Cómo publicarla en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `Aussterben/aussterben.github.io` si quieres que sea tu dominio raíz, o cualquier otro nombre si prefieres que quede en una subruta).
2. Sube estos tres archivos a la raíz del repositorio.
3. Ve a **Settings → Pages** del repositorio.
4. En "Build and deployment", selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
5. Guarda. En un par de minutos tu web estará en `https://<tu-usuario>.github.io/<nombre-repo>/` (o en `https://<tu-usuario>.github.io/` si el repo se llama `<tu-usuario>.github.io`).

## Cómo añadir entradas de blog

Abre `script.js` y edita el array `posts` al principio del archivo. Cada entrada necesita `title`, `date` (formato `AAAA-MM-DD`), `excerpt` y `url`. Se ordenan tal cual las escribas.

## Personalización rápida

- Color de acento: variable `--accent` en `style.css`.
- Bio y etiquetas: sección `#sobre-mi` en `index.html`.
- Enlaces (YouTube, GitHub, TikTok, Discord): sección `#enlaces` en `index.html`.
