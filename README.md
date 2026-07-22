# Manarem - Recomendaciones de Anime, Manga y Música

Plataforma web para descubrir y recomendar animes, mangas y música relacionada. Proyecto full-stack con frontend estático desplegado en Vercel y backend API REST en preparación.

## Arquitectura

```
┌─────────────────┐          ┌─────────────────────────┐
│    VERCEL       │   fetch  │   VPS Oracle Cloud      │
│  Frontend       │ ───────► │   Docker + Traefik      │
│  HTML/CSS/JS    │   JSON   │   Flask + PostgreSQL    │
│  Estático       │ ◄─────── │   (próximamente)        │
└─────────────────┘          └─────────────────────────┘
```

## Tecnologías

### Frontend (desplegado en Vercel)
- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive con Grid y Flexbox
- **JavaScript vanilla** - Sin frameworks, comunicación con API REST
- **Font Awesome** - Iconos

### Backend (en preparación para VPS)
- **Python 3** + **Flask** - API REST
- **PostgreSQL** - Base de datos
- **Docker** + **Docker Compose** - Contenedores
- **Traefik** - Proxy inverso
- **Cloudflare** - DNS y CDN

## Estructura del proyecto

```
manarem_anime/
├── frontend/                   # Frontend para Vercel
│   ├── index.html              # Página principal
│   ├── recomend.html           # Recomendaciones de anime/manga
│   ├── musica.html             # Música de anime
│   ├── registrarse.html        # Registro de usuarios
│   ├── ingresar.html           # Inicio de sesión
│   ├── contacto.html           # Formulario de contacto
│   ├── opiniones.html          # Opiniones de usuarios
│   ├── preg_frec.html          # Preguntas frecuentes
│   ├── acerca_de.html          # Información del proyecto
│   ├── productos.html          # Menú CRUD de productos
│   ├── altas.html              # Alta de productos
│   ├── listado.html            # Listado de productos
│   ├── modificaciones.html     # Modificar productos
│   ├── listadoEliminar.html    # Eliminar productos
│   ├── modificaciones_VUE.html # Modificar (Vue.js)
│   ├── listadoEliminar_VUE.html# Eliminar (Vue.js)
│   ├── vercel.json             # Configuración de Vercel
│   ├── static/
│   │   ├── css/                # 12 hojas de estilo
│   │   ├── js/                 # Scripts (api.js, app.js, etc.)
│   │   └── img/                # Imágenes del sitio
│   └── assets/
│       └── fonts/              # Fuentes tipográficas
├── app.py                      # Backend Flask (próximamente)
├── requirements.txt            # Dependencias Python
├── .env.example                # Variables de entorno
├── .gitignore
└── README.md
```

## Desarrollo local

### Frontend (Vercel)

1. Clonar el repositorio
2. Abrir `frontend/index.html` en el navegador
3. O usar Live Server en VS Code

### Backend (VPS - próximamente)

```bash
# Próximamente: instrucciones de despliegue con Docker
```

## Despliegue

### Vercel

El frontend se despliega automáticamente desde GitHub en [manarem.vercel.app](https://manarem.vercel.app).

1. Conectá el repositorio en Vercel
2. Configurá `Root Directory` como `frontend`
3. Configurá la variable de entorno `VITE_API_URL` con la URL del backend

## Funcionalidades

- Catálogo de animes y mangas recomendados con enlaces a streaming
- Reproductor de música de anime (embeds de YouTube)
- CRUD completo de productos con carga de imágenes
- Formularios de registro e inicio de sesión
- Sistema de opiniones y comentarios
- Diseño responsive adaptado a dispositivos móviles

## Autores

- [Cesar Augusto Fernandez Carbonell](https://github.com/an4tsu)
- [John CV](https://github.com/JohnCVF9)
- [Monica Quiroz](https://github.com/Quiroz-Monica-R)

## Licencia

© 2025 Manarem. Todos los derechos reservados.
