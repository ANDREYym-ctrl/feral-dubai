export async function renderCatalog() {
    const container = document.getElementById('catalog-container');
    if (!container) return;

    try {
        const response = await fetch('./js/data/catalog.json');
        const data = await response.json();

        const loadCategory = (categoryKey) => {
            container.innerHTML = '';
            const items = data[categoryKey] || [];

            items.forEach(item => {
                const col = document.createElement('div');
                col.className = 'col-lg-6 mb-4';
                col.innerHTML = `
                    <div class="luxury-card h-100">
                        <div class="card-img-wrapper">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                        <div class="p-4">
                            <span class="text-muted small text-uppercase fw-semibold" style="letter-spacing: 2px;">${item.location}</span>
                            <h3 class="font-heading h4 fw-bold mt-2 mb-2">${item.title}</h3>
                            <p class="text-muted small mb-4" style="line-height: 1.7;">${item.description}</p>
                            <div class="d-flex justify-content-between align-items-center pt-2 border-top">
                                <span class="fw-bold fs-5 text-dark">${item.price}</span>
                                <button class="btn btn-luxury">Consultar VIP</button>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(col);
            });
        };

        // Cargar todos por defecto o apartamentos
        loadCategory('todos');

        // Escuchar pestañas
        const tabButtons = document.querySelectorAll('.nav-pills .nav-link');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                tabButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                const category = e.target.getAttribute('data-category');
                loadCategory(category);
            });
        });

    } catch (error) {
        console.error("Error al cargar el catálogo:", error);
        container.innerHTML = `<p class="text-center text-danger">No se pudieron cargar los datos del catálogo.</p>`;
    }
}