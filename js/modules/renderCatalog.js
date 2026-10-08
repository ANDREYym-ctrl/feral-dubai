/**
 * Módulo: renderCatalog.js
 * Descripción: Renderiza el catálogo dinámicamente, aplica animaciones de lujo y gestiona filtros por categoría.
 */

export async function renderCatalog() {
    const container = document.getElementById('catalog-container');

    try {
        // Detecta automáticamente si estamos en GitHub Pages o en tu computador local
        const isGitHubPages = window.location.hostname.includes("github.io");
        const basePath = isGitHubPages ? "/feral-dubai" : "";

        const response = await fetch(`${basePath}/js/data/catalog.json`);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();

        // Función interna para pintar las tarjetas
        const displayCards = (activosAMostrar) => {
            container.innerHTML = '';
            
            if (!activosAMostrar || activosAMostrar.length === 0) {
                container.innerHTML = `<div class="col-12 text-center py-5 text-muted">No se encontraron activos disponibles en esta categoría.</div>`;
                return;
            }

            activosAMostrar.forEach((activo, index) => {
                const animationDelay = index * 0.15;

                const cardHTML = `
                    <div class="col-md-4 mb-4">
                        <div class="card card-luxury h-100 border-0 shadow-sm fade-in-card" style="animation-delay: ${animationDelay}s;">
                            <div class="img-zoom-container">
                                <img src="${activo.imagen_url}" class="card-img-top" alt="${activo.titulo}" style="height: 240px; object-fit: cover;">
                            </div>
                            
                            <div class="card-body d-flex flex-column bg-white">
                                <span class="badge bg-burgundy mb-2 align-self-start">Dubái Launch</span>
                                
                                <h3 class="card-title font-heading fs-4 text-burgundy">${activo.titulo}</h3>
                                <p class="card-text font-body text-muted small mb-3">${activo.ubicacion}</p>
                                
                                <div class="mt-auto">
                                    <ul class="list-unstyled small text-secondary mb-4 border-top pt-2">
                                        ${Object.entries(activo.detalles_tecnicos).map(([key, value]) => `<li><strong>${key}:</strong>${value}</li>`).join('')}
                                    </ul>
                                    
                                    <a href="https://wa.me/573000000000?text=Hola,%20estoy%20interesado%20en%20el%20proyecto:%20${encodeURIComponent(activo.titulo)}" target="_blank" class="btn btn-outline-dark w-100 font-ui py-2">
                                        Contactar por Asesor
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });
        };

        // Renderizar todos los activos por defecto
        displayCards(data.activos);

        // Configurar los eventos de filtrado por botones
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                filterButtons.forEach(b => b.classList.remove('active', 'fw-bold', 'text-warning'));
                btn.classList.add('active', 'fw-bold', 'text-warning');

                const categoriaId = btn.getAttribute('data-categoria');

                if (categoriaId === 'all') {
                    displayCards(data.activos);
                } else {
                    const filtrados = data.activos.filter(item => item.id_categoria == categoriaId);
                    displayCards(filtrados);
                }
            });
        });

    } catch (error) {
        console.error('Error crítico al renderizar el catálogo:', error);
        // Retroalimentación visual obligatoria para el usuario final (Ajuste técnico sugerido)
        if (container) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="alert alert-danger shadow-sm mx-auto" style="max-width: 500px;" role="alert">
                        <h4 class="alert-heading fs-5">⚠️ Temporalmente no disponible</h4>
                        <p class="mb-0 small">No pudimos cargar el catálogo de activos en este momento. Por favor, intente recargar la página más tarde.</p>
                    </div>
                </div>`;
        }
    }
}