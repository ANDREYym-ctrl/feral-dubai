// ========================================================
// FERAL DUBÁI - DYNAMIC LUXURY CATALOG RENDERER
// Burgundy & Wine Brand Palette · WCAG AAA Contrast
// ========================================================

import { getCurrentLang, t, onLanguageChange } from './translations.js';

let catalogItems = [];
let activeCategory = 'todos';

export async function renderCatalog() {
  const container = document.getElementById('catalog-container');
  if (!container) return;

  try {
    const response = await fetch('./js/data/catalog.json');
    const data = await response.json();
    catalogItems = data.items || [];

    // Initial render
    displayItems(activeCategory);

    // Setup Category Tabs
    setupCategoryTabs();

    // Re-render when language changes
    onLanguageChange(() => {
      displayItems(activeCategory);
    });

  } catch (error) {
    console.error("Error al cargar el catálogo:", error);
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-ruby fw-semibold fs-5">${t('portfolio.desc')}</p>
      </div>
    `;
  }
}

function setupCategoryTabs() {
  const tabButtons = document.querySelectorAll('.category-filter-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      tabButtons.forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');

      activeCategory = target.getAttribute('data-category') || 'todos';
      displayItems(activeCategory);
    });
  });
}

function displayItems(categoryKey) {
  const container = document.getElementById('catalog-container');
  if (!container) return;

  const lang = getCurrentLang();
  container.innerHTML = '';

  const filteredItems = categoryKey === 'todos'
    ? catalogItems
    : catalogItems.filter(item => item.category === categoryKey);

  if (filteredItems.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="fs-5 text-muted">${lang === 'es' ? 'No se encontraron activos disponibles en esta categoría.' : 'No assets available under this category.'}</p>
      </div>
    `;
    return;
  }

  filteredItems.forEach((item, index) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4 mb-4';

    const title = item.title[lang] || item.title.es;
    const location = item.location[lang] || item.location.es;
    const specs = item.specs[lang] || item.specs.es;
    const description = item.description[lang] || item.description.es;
    const badge = item.badge ? (item.badge[lang] || item.badge.es) : null;
    const categoryName = item.categoryName ? (item.categoryName[lang] || item.categoryName.es) : '';
    const consultText = t('card.consult');

    // WhatsApp prefilled message
    const waText = encodeURIComponent(
      lang === 'es'
        ? `Hola Feral Dubái, deseo agendar una consulta privada sobre el activo: "${title}" (${item.price}).`
        : `Hello Feral Dubai, I would like to schedule a private consultation regarding: "${title}" (${item.price}).`
    );
    const waLink = `https://wa.me/97148883372?text=${waText}`;

    col.innerHTML = `
      <article class="luxury-card h-100 d-flex flex-column" data-category="${item.category}" style="animation: fadeInUp 0.5s ease backwards ${index * 0.08}s;">
        <!-- Imagen y Badges -->
        <div class="card-img-wrapper position-relative">
          <img src="${item.image}" alt="${title}" loading="lazy">
          <div class="card-badges position-absolute top-0 start-0 p-3 d-flex flex-wrap gap-2">
            <span class="badge bg-burgundy-subtle text-white fw-semibold px-2 py-1 text-uppercase">${categoryName}</span>
            ${badge ? `<span class="badge bg-dark-glass text-white fw-normal px-2 py-1">${badge}</span>` : ''}
          </div>
          <div class="card-price-overlay position-absolute bottom-0 end-0 p-3">
            <span class="price-pill fw-bold">${item.price}</span>
          </div>
        </div>

        <!-- Contenido de Alto Contraste -->
        <div class="card-body p-4 d-flex flex-column flex-grow-1">
          <div class="card-location text-muted small text-uppercase fw-semibold mb-2 d-flex align-items-center gap-1">
            <i class="bi bi-geo-alt text-ruby"></i>
            <span>${location}</span>
          </div>

          <h3 class="font-heading card-title h4 fw-bold mb-2 text-white">${title}</h3>
          
          <div class="card-specs small mb-3 pb-2 border-bottom border-secondary-subtle">
            <i class="bi bi-shield-check text-ruby me-1"></i> ${specs}
          </div>

          <p class="card-description small mb-4 flex-grow-1">
            ${description}
          </p>

          <!-- Acciones Ergonómicas para Móvil y Desktop -->
          <div class="card-actions pt-3 border-top border-secondary-subtle d-flex align-items-center gap-2 mt-auto">
            <button class="btn btn-luxury flex-grow-1 btn-consult-vip" data-item-id="${item.id}" data-item-title="${title}" data-item-cat="${item.category}">
              <i class="bi bi-calendar2-check me-1"></i> ${consultText}
            </button>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-wa-icon" title="WhatsApp VIP" aria-label="WhatsApp VIP">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </article>
    `;

    container.appendChild(col);
  });

  // Attach click events to "Consultar VIP" buttons
  container.querySelectorAll('.btn-consult-vip').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const itemTitle = btn.getAttribute('data-item-title');
      const itemCat = btn.getAttribute('data-item-cat');
      handleVipInquiry(itemTitle, itemCat);
    });
  });
}

function handleVipInquiry(itemTitle, itemCat) {
  const conciergeSection = document.getElementById('concierge');
  if (conciergeSection) {
    conciergeSection.scrollIntoView({ behavior: 'smooth' });

    // Pre-fill interest select in form if possible
    const interestSelect = document.getElementById('concierge-interest');
    if (interestSelect) {
      if (itemCat === 'apartamentos') interestSelect.value = 'penthouse';
      else if (itemCat === 'yates') interestSelect.value = 'yachts';
      else if (itemCat === 'autos') interestSelect.value = 'cars';
      else if (itemCat === 'asesoria') interestSelect.value = 'family';
    }

    // Pre-fill message
    const messageInput = document.getElementById('concierge-message');
    if (messageInput) {
      const lang = getCurrentLang();
      messageInput.value = lang === 'es'
        ? `Solicito información detallada y dossier confidencial sobre: ${itemTitle}.`
        : `I request detailed confidential dossier and specifications regarding: ${itemTitle}.`;
      
      messageInput.focus();
    }
  }
}
