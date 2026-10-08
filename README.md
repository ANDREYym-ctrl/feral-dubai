# Feral Dubái | Landing Page de Ultralujo

Aplicación web tipo catálogo desarrollada con un enfoque corporativo y de alta gama, diseñada para la exhibición y comercialización de activos exclusivos (bienes raíces, yates y vehículos de lujo) en Dubái.

## 🚀 Tecnologías Utilizadas
* **HTML5 & CSS3** (Estructura semántica y diseño visual adaptativo).
* **Bootstrap 5** (Sistema de retículas *Grid System* y componentes responsivos).
* **JavaScript (ES6+ Modules)** (Modularización del código y consumo asíncrono de datos).
* **Git & GitHub Pages** (Control de versiones y despliegue continuo en producción).

## ✨ Funcionalidades Principales
* **Carga Dinámica de Datos:** Lectura asíncrona de un archivo estructurado en formato JSON (`catalog.json`) mediante la API `fetch`.
* **Filtrado Interactivo:** Sistema dinámico de filtrado por categorías de activos sin necesidad de recargar la página.
* **Diseño 100% Responsivo:** Adaptabilidad fluida a dispositivos móviles, tablets y ordenadores de escritorio.
* **Experiencia de Usuario (UX/UI):** Animaciones de aparición en cascada, efectos *zoom* en imágenes y enlaces directos personalizados a asesoría vía WhatsApp.

## 📂 Estructura de Carpetas
```text
feral-dubai/
│
├── css/
│   └── styles.css
├── js/
│   ├── data/
│   │   └── catalog.json
│   ├── modules/
│   │   └── renderCatalog.js
│   └── main.js
├── index.html
└── README.md