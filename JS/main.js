/**
 * Archivo: main.js
 * Descripción: Punto de entrada principal de la aplicación Front-End.
 * Se encarga de inicializar los módulos una vez que el DOM ha cargado por completo.
 */

import { renderCatalog } from './modules/renderCatalog.js';

// Escuchar el evento de carga del DOM para asegurar que la estructura HTML esté lista
document.addEventListener('DOMContentLoaded', () => {
    // Ejecutar la función para renderizar el catálogo de activos de Dubái
    renderCatalog();
});