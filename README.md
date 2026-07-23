# Manarem

Plataforma web para descubrir y recomendar animes, mangas y música relacionada.

## Stack

### Frontend
- **HTML5** + **CSS3** (Grid, Flexbox, custom properties)
- **JavaScript vanilla** (sin frameworks ni build step)

### Backend
- **Python 3** + **Flask** (API REST)
- **SQLite** (etapa actual; PostgreSQL previsto)
- **Werkzeug** (hash de contraseñas)

## Inicio rápido

### Frontend (etapa actual — funciona sin backend, con datos mock)

```bash
git clone <repo>
cd manarem_anime
python3 dev_server.py
```

Abre `http://localhost:8000`. El server replica las URLs limpias de Vercel (`/recomend`, `/foro`, etc.). Los datos salen de `frontend/static/js/mock-data.js`; para volver al backend real, poner `MOCK_MODE = false` en `frontend/static/js/api.js`.

### Backend (opcional en esta etapa)

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

Servidor en `http://localhost:5000`.

## Estructura

```
manarem_anime/
├── agents/                    # Planificación de tareas (local)
├── frontend/
│   ├── index.html             # Home
│   ├── recomend.html          # Recomendaciones
│   ├── musica.html            # Música anime
│   ├── registrarse.html       # Registro
│   ├── ingresar.html          # Login
│   ├── contacto.html          # Contacto
│   ├── opiniones.html         # Opiniones
│   ├── preg_frec.html         # FAQ
│   ├── acerca_de.html         # Acerca de
│   ├── foro.html              # Foro: listado de temas
│   ├── foro_tema.html         # Foro: tema con respuestas
│   ├── vercel.json            # Rutas Vercel
│   ├── static/css/            # Hojas de estilo (design system + por página)
│   ├── static/js/             # api.js, mock-data.js, components.js, app.js, hero.js
│   ├── static/img/            # Imágenes
│   └── assets/fonts/          # Alkatra + Fonstars
├── app.py                     # Backend Flask (foro + usuarios, SQLite)
├── dev_server.py              # Server local con URLs limpias
├── requirements.txt
├── README.md
└── .gitignore
```

## Páginas

| Ruta | Archivo |
|---|---|
| `/` | index.html |
| `/recomend` | recomend.html |
| `/musica` | musica.html |
| `/ingresar` | ingresar.html |
| `/registrarse` | registrarse.html |
| `/contacto` | contacto.html |
| `/opiniones` | opiniones.html |
| `/preguntas-frecuentes` | preg_frec.html |
| `/acerca-de` | acerca_de.html |
| `/foro` | foro.html |
| `/foro/tema?id=N` | foro_tema.html |

## API

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/registro` | Crear usuario |
| POST | `/login` | Iniciar sesión (devuelve token) |
| GET | `/foro/temas` | Listar temas del foro |
| POST | `/foro/temas` | Crear tema (requiere token) |
| GET | `/foro/temas/<id>` | Tema con respuestas |
| POST | `/foro/temas/<id>/respuestas` | Responder (requiere token) |

El frontend funciona sin backend gracias a la capa mock (`MOCK_MODE` en `api.js`). El hero del home carga banners desde la API de AniList (fallback: Jikan, luego imágenes locales).

## Identidad visual

Paleta oscura con acentos púrpura y rosa neón.

| Variable | Valor | Uso |
|---|---|---|
| `--accent-color` | `#9e4c9e` | Botones, bordes, hover |
| `--letter-color` | `#ffbeff` | Texto principal |
| `--letter-hover` | `#60fdbc` | Hover links |
| `--header-bg` | `#15003d` | Header, footer |
| `--body-color` | `#0a1641` | Fondo de página |
| `--main-bg` | `#0d062c` | Cards, contenido |
| `--form-bg` | `#2c1a80` | Formularios, tablas |
| `--border-light` | `rgba(255,190,255,0.15)` | Bordes |
| `--shadow-color` | `rgba(0,0,0,0.3)` | Sombras |

**Fuentes:** Alkatra (cuerpo), Fonstars (títulos).
**Breakpoints:** 520px (mobile), 900px (tablet), 1200px (desktop).
**Patrones:** CSS Grid, sticky header, cards con hover lift, glassmorphism, hero animado con keyframes.

## Autores

- [Cesar Augusto Fernandez Carbonell](https://github.com/an4tsu)
- [John CV](https://github.com/JohnCVF9)
- [Monica Quiroz](https://github.com/Quiroz-Monica-R)

## Licencia

© 2024 Manarem. Todos los derechos reservados.
