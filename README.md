# Feral Dubái | Ultra-Luxury Real Estate, Superyachts & Family Office

Plataforma web de ultralujo y catálogo privado desarrollada con arquitectura **Mobile-First**, diseñada para la exhibición, estructuración patrimonial y comercialización confidencial de activos de alta gama (Penthouses en Downtown, villas en Palm Jumeirah, superyates transoceánicos, superdeportivos bespoke y estructuración fiduciaria en el DIFC) en Dubái, Emiratos Árabes Unidos.

---

## 🏛️ Dirección de Arte & Experiencia de Usuario (UI/UX)
* **Estética de Ultralujo:** Paleta sobria basada en *Obsidian Carbon* (`#060606`), acentos en *Oro Champán* (`#d4af37`) y llamados a la acción institucionales en *Rojo Carmesí* (`#8B0000`).
* **Tipografía Editorial de Alto Contraste:** Títulos en serifa clásica de alta costura (*Bodoni Moda*) combinados con una sans-serif geométrica minimalista (*Plus Jakarta Sans*) para especificaciones y cifras financieras.
* **Glassmorphism & Microinteracciones:** Paneles translúcidos con desenfoque (`backdrop-filter: blur(20px)`), bordes dorados de 1px y transiciones sutiles optimizadas para pantallas OLED.
* **Mobile-First Absoluto:** Menú drawer lateral flotante con navegación táctil, tarjetas adaptables a una columna con áreas de pulsación cómodas para el pulgar, y botón flotante de atención VIP inmediata.

---

## 🌐 Internacionalización Dinámica (i18n: ES / EN)
* Soporte bilingüe completo y reactivo en tiempo real (Español / Inglés).
* Motor modular en [`js/modules/translations.js`](./js/modules/translations.js) que sincroniza tanto textos estáticos como los datos dinámicos del catálogo sin recargar la página.
* Persistencia del idioma preferido mediante `localStorage`.

---

## 🚀 Tecnologías & Arquitectura
* **HTML5 Semántico:** Cumplimiento de estándares de accesibilidad, microformatos y metaetiquetas Open Graph / SEO.
* **CSS3 Moderno:** Variables CSS nativas, retículas CSS Grid, Flexbox, media queries fluidas con funciones `clamp()` y optimización para pantallas táctiles.
* **Bootstrap 5.3.3 & Bootstrap Icons 1.11.3:** Sistema de grillas responsivo, modales de confirmación y componentes offcanvas.
* **JavaScript ES6+ Modular:**
  * [`main.js`](./js/main.js): Orquestador principal, scrollspy de navbar, control de drawer móvil y validación de formularios.
  * [`translations.js`](./js/modules/translations.js): Motor de traducción y gestión reactiva de idiomas.
  * [`renderCatalog.js`](./js/modules/renderCatalog.js): Renderizado asíncrono, filtrado reactivo por categorías y enlaces automáticos a WhatsApp VIP.
  * [`catalog.json`](./js/data/catalog.json): Base de datos estructurada y bilingüe con fichas técnicas de activos.

---

## 📂 Estructura de Carpetas
```text
feral-dubai-portfolio/
│
├── assets/
│   ├── img - apartamento/       # Fotografía de bienes raíces prime
│   ├── img - autos/             # Superdeportivos bespoke
│   ├── img - yate/              # Superyates y planos navales
│   ├── img-pagina/              # Fondos arquitectónicos (DIFC)
│   └── logo.png                 # Logotipo institucional
│
├── css/
│   └── styles.css               # Hoja de estilos maestra Mobile-First
│
├── js/
│   ├── data/
│   │   └── catalog.json         # Base de datos estructurada bilingüe
│   ├── modules/
│   │   ├── renderCatalog.js     # Renderizado dinámico de tarjetas y filtros
│   │   └── translations.js      # Diccionario y motor reactivo i18n
│   └── main.js                  # Inicializador y lógica de interfaz
│
├── index.html                   # Documento principal
└── README.md                    # Documentación técnica
```

---

## 🚀 Despliegue en GitHub Pages

1. Inicializa el repositorio y sube tus cambios:
```bash
git init
git add .
git commit -m "feat: complete luxury redesign with bilingual mobile-first architecture"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/feral-dubai-portfolio.git
git push -u origin main
```

2. En tu repositorio de GitHub:
   * Ve a **Settings** > **Pages**.
   * En **Source**, selecciona `Deploy from a branch`.
   * Elige la rama `main` y la carpeta `/ (root)`, luego pulsa **Save**.
   * En un par de minutos tu sitio estará en vivo con HTTPS en:
     `https://TU-USUARIO.github.io/feral-dubai-portfolio/`

---

*Desarrollado con altos estándares de ingeniería y diseño por AndreyYama.*
