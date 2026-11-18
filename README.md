# Feral Dubái | Ultra-Luxury Real Estate, Superyachts & Family Office

Plataforma web de ultralujo y catálogo privado desarrollada con arquitectura **Mobile-First**, diseñada para la exhibición, estructuración patrimonial y comercialización confidencial de activos de alta gama (Penthouses en Downtown, villas en Palm Jumeirah, superyates transoceánicos, superdeportivos bespoke y estructuración fiduciaria en el DIFC) en Dubái, Emiratos Árabes Unidos.

---

## 🏛️ Dirección de Arte & Embudo de Conversión (UI/UX)
* **Embudo de Conversión de Ultralujo:** Diseñado para calentar clientes e inversores en frío mediante transparencia, autoridad institucional y propuesta de valor contundente en los primeros 3 segundos.
* **Carrusel Dinámico de Activos (Touch-Snap):** Sustitución del listado vertical largo por un carrusel interactivo horizontal con gestos táctiles fluidos, controles de flecha en desktop y snap-scroll nativo.
* **Exclusividad sin Precios Públicos (POA):** Supresión de precios explícitos en favor de etiquetas fiduciarias exclusivas (*"POA · Consulta Privada"*, *"Inversión Fiduciaria VIP"*), despertando curiosidad e incentivando la solicitud de dossiers privados.
* **Sección Institucional & Autoridad ("Acerca de Feral"):** Bloque editorial de alta credibilidad con gobernanza DIFC Common Law, cuentas escrow certificadas y estrictos protocolos de confidencialidad (NDA).
* **Bloque de Inversión Estratégica ("Por Qué Dubái"):** Presentación directa de ventajas fiscales (0% impuestos), plusvalía prime (+14.8%) y Golden Visa de 10 años.
* **Mapa Interactivo con GPS (Leaflet.js):** Geolocalización geoespacial de proyectos, amarres y sedes fiduciarias en Dubái con pines interactivos y acceso a dossiers VIP.
* **Calculadora Interactiva de Rentabilidad (Lead Magnet):** Simulador fiduciario de plusvalía y rendimientos netos con cálculo de ahorro fiscal (0% vs. 42% en el extranjero) y modal de captura para descarga de informes en PDF.
* **Estética Luxury Light:** Paleta luminosa en *Blanco Perla / Marfil* (`#F9F9F5` / `#FFFFFF`), textos en *Antracita Profundo* (`#141414`) y acentos disciplinados en *Burgundy Profundo* (`#800020`) y *Ruby* (`#9B2335`).

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
* **JavaScript ES6+ Modular & Leaflet.js:**
  * [`main.js`](./js/main.js): Orquestador principal, scrollspy de navbar, control de drawer móvil y validación de formularios.
  * [`map.js`](./js/modules/map.js): Geolocalización interactiva con pines personalizados Leaflet en Dubái.
  * [`calculator.js`](./js/modules/calculator.js): Simulador financiero de ROI y captador de leads fiduciarios.
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
│   │   ├── map.js               # Mapa interactivo Leaflet con GPS Dubái
│   │   ├── calculator.js        # Calculadora interactiva de rentabilidad (Lead Magnet)
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
