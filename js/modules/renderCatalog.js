// ========================================================
// FERAL DUBÁI - DYNAMIC LUXURY ASSETS CAROUSEL
// Horizontal Fluid Carousel · Zero-Latency Fail-Safe Architecture
// ========================================================

import { getCurrentLang, t, onLanguageChange } from './translations.js';

// Preloaded embedded catalog data (Guarantees zero-latency rendering & works offline / file:/// protocol)
export const catalogItems = [
  {
    id: "skyline-penthouse",
    category: "apartamentos",
    categoryName: {
      es: "Bienes Raíces Prime",
      en: "Prime Real Estate"
    },
    title: {
      es: "Skyline Presidential Penthouse",
      en: "Skyline Presidential Penthouse"
    },
    location: {
      es: "Downtown Dubái · Vistas al Burj Khalifa",
      en: "Downtown Dubai · Direct Burj Khalifa View"
    },
    specs: {
      es: "5 Habs · 820 m² · Piscina Infinita Privada · Domótica Crestron",
      en: "5 Beds · 8,826 sq ft · Private Infinity Pool · Crestron Automation"
    },
    exclusivity: {
      es: "POA · Consulta Privada",
      en: "POA · Private Inquiry"
    },
    image: "./assets/img - apartamento/APARTAMENTO_COMEDOR.jpg",
    description: {
      es: "Residencia de gran altura con vistas panorámicas directas al Burj Khalifa, revestimientos en mármol Calacatta italiano, terraza perimetral y helipuerto con acceso directo.",
      en: "Sky-high residence with direct panoramic Burj Khalifa views, Italian Calacatta marble cladding, wraparound sky terrace, and direct helipad access."
    },
    badge: {
      es: "Entrega Inmediata",
      en: "Immediate Handover"
    }
  },
  {
    id: "palm-water-villa",
    category: "apartamentos",
    categoryName: {
      es: "Bienes Raíces Prime",
      en: "Prime Real Estate"
    },
    title: {
      es: "Palm Jumeirah Signature Water Villa",
      en: "Palm Jumeirah Signature Water Villa"
    },
    location: {
      es: "Palm Jumeirah · Frond N",
      en: "Palm Jumeirah · Frond N"
    },
    specs: {
      es: "7 Suites · 1,450 m² · Muelle Privado · Playa Exclusiva",
      en: "7 Suites · 15,600 sq ft · Private Dock · Exclusive Beachfront"
    },
    exclusivity: {
      es: "Inversión Fiduciaria VIP",
      en: "VIP Fiduciary Allocation"
    },
    image: "./assets/img - apartamento/APARTAMENTO_SALE.jpg",
    description: {
      es: "Mansión frente al mar con acceso privado a la bahía, muelle para superyates, arquitectura bioclimática contemporánea y jardines zen diseñados por paisajistas europeos.",
      en: "Beachfront trophy mansion with private bay access, private superyacht berth, contemporary bioclimatic architecture, and European-designed zen gardens."
    },
    badge: {
      es: "Off-Market Exclusivo",
      en: "Off-Market Exclusive"
    }
  },
  {
    id: "superyacht-royal-feral",
    category: "yates",
    categoryName: {
      es: "Yates Privados",
      en: "Private Superyachts"
    },
    title: {
      es: "Superyacht Royal Feral 65M",
      en: "Superyacht Royal Feral 65M"
    },
    location: {
      es: "Dubai Harbour Marina · Golfo Pérsico",
      en: "Dubai Harbour Marina · Arabian Gulf"
    },
    specs: {
      es: "Eslora 65 m · 6 Suites VIP · Helipuerto Touch-and-Go · Beach Club",
      en: "Length 65m · 6 VIP Suites · Touch-and-Go Helipad · Beach Club"
    },
    exclusivity: {
      es: "POA · Dossier Confidencial",
      en: "POA · Confidential Dossier"
    },
    image: "./assets/img - yate/ALUMBRADO_FRONTAL_YATE.jpeg",
    description: {
      es: "Embarcación insignia con casco de acero naval, cubiertas de teca birmana, iluminación arquitectónica perimetral sumergida y autonomía transatlántica de 5,000 millas náuticas.",
      en: "Flagship vessel with naval steel hull, Burmese teak decks, submersible architectural lighting, and 5,000 nautical mile transatlantic autonomy."
    },
    badge: {
      es: "Construcción a Medida",
      en: "Bespoke Commission"
    }
  },
  {
    id: "ocean-explorer-50m",
    category: "yates",
    categoryName: {
      es: "Yates Privados",
      en: "Private Superyachts"
    },
    title: {
      es: "Ocean Explorer 50M Custom",
      en: "Ocean Explorer 50M Custom"
    },
    location: {
      es: "Port Rashid · Dubái",
      en: "Port Rashid · Dubai"
    },
    specs: {
      es: "Eslora 50 m · 12 Huéspedes · Jacuzzi Panorámico · Garaje Doble",
      en: "Length 50m · 12 Guests · Panoramic Jacuzzi · Twin Tender Garage"
    },
    exclusivity: {
      es: "Asignación Exclusiva",
      en: "Exclusive Allocation"
    },
    image: "./assets/img - yate/FRONTAL_YATE.jpeg",
    description: {
      es: "Ingeniería de vanguardia diseñada para expediciones de ultralujo, con estabilizadores giroscópicos de fondeo cero y acabados interiores en roble ahumado y titanio.",
      en: "Avant-garde engineering designed for ultra-luxury worldwide expeditions, featuring zero-speed gyroscopic stabilizers and smoked oak and titanium interior accents."
    },
    badge: {
      es: "Disponible en Marina",
      en: "Marina Ready"
    }
  },
  {
    id: "yacht-executive-interior",
    category: "yates",
    categoryName: {
      es: "Yates Privados",
      en: "Private Superyachts"
    },
    title: {
      es: "Majesty Master Suite & Salon",
      en: "Majesty Master Suite & Salon"
    },
    location: {
      es: "Dubai Marina Yacht Club",
      en: "Dubai Marina Yacht Club"
    },
    specs: {
      es: "Interiorismo Hermes · Audio Focal Utopia · Cava Climatizada",
      en: "Hermes Interior Design · Focal Utopia Audio · Climatized Wine Cellar"
    },
    exclusivity: {
      es: "POA · Edición Privada",
      en: "POA · Private Edition"
    },
    image: "./assets/img - yate/INTERIOR_DE_YATE.jpeg",
    description: {
      es: "Diseño interior concebido por firmas de alta costura europea, con salones de conferencias privadas sobre el mar y suite de armador con terraza retráctil.",
      en: "Interior architecture conceived by European haute-couture studios, featuring private sea-facing conference lounges and owner's suite with folding balconies."
    },
    badge: {
      es: "Colección Privada",
      en: "Private Collection"
    }
  },
  {
    id: "feral-phantom-gt",
    category: "autos",
    categoryName: {
      es: "Superdeportivos",
      en: "Bespoke Hypercars"
    },
    title: {
      es: "Feral Phantom GT Black Badge",
      en: "Feral Phantom GT Black Badge"
    },
    location: {
      es: "Dubái Autodrome Club · Edición 1 de 5",
      en: "Dubai Autodrome Club · Edition 1 of 5"
    },
    specs: {
      es: "V12 Twin-Turbo 850 HP · 0-100 en 2.8s · Fibra de Carbono Aeroespacial",
      en: "V12 Twin-Turbo 850 HP · 0-60 in 2.8s · Aerospace Carbon Fiber"
    },
    exclusivity: {
      es: "Pieza de Colección VIP",
      en: "VIP Collector's Piece"
    },
    image: "./assets/img - autos/ROLL_FRENTE.jpeg",
    description: {
      es: "Ingeniería de aerodinámica activa con chasis monocasco de fibra de carbono aeroespacial, detalles en oro mate de 24 quilates e interiores en piel Connolly personalizada.",
      en: "Active aerodynamic engineering with aerospace-grade carbon fiber monocoque, 24-karat matte gold details, and personalized Connolly leather interior."
    },
    badge: {
      es: "Edición Limitada",
      en: "Limited Edition"
    }
  },
  {
    id: "aerodynamic-v12",
    category: "autos",
    categoryName: {
      es: "Superdeportivos",
      en: "Bespoke Hypercars"
    },
    title: {
      es: "Rolls-Royce Spectre Bespoke Atelier",
      en: "Rolls-Royce Spectre Bespoke Atelier"
    },
    location: {
      es: "Showroom Flagship DIFC",
      en: "DIFC Flagship Showroom"
    },
    specs: {
      es: "Propulsión Eléctrica Bespoke · Techo Starlight · Blindaje Nivel VR7",
      en: "Bespoke Electric Powertrain · Starlight Headliner · VR7 Armored"
    },
    exclusivity: {
      es: "Asignación Bajo Pedido",
      en: "Custom Allocation"
    },
    image: "./assets/img - autos/ROLL_ATRAS.jpeg",
    description: {
      es: "El pináculo de la elegancia silenciosa con programa de blindaje discreto para mandatarios y ejecutivos globales, acompañado de telemetría y seguridad satelital 24/7.",
      en: "The pinnacle of silent luxury featuring discreet armored protection for global dignitaries and family offices, backed by 24/7 private satellite security."
    },
    badge: {
      es: "Entrega Inmediata",
      en: "Immediate Handover"
    }
  }
];

let activeCategory = 'todos';
let activeIndex = 0;
let autoRotateInterval = null;
let resumeTimeout = null;

export function renderCatalog() {
  const container = document.getElementById('catalog-carousel');
  if (!container) return;

  // Render initial items into coverflow showcase
  displayCarouselItems(activeCategory);

  // Setup Category Tabs
  setupCategoryTabs();

  // Setup Carousel Arrow Controls
  setupCarouselArrows();

  // Re-render when language changes
  onLanguageChange(() => {
    displayCarouselItems(activeCategory);
  });
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
      activeIndex = 0;
      displayCarouselItems(activeCategory);
    });
  });
}

function setupCarouselArrows() {
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');

  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.preventDefault();
      pauseAutoRotate();
      navigateShowcase(-1);
      resumeAutoRotateAfterDelay();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.preventDefault();
      pauseAutoRotate();
      navigateShowcase(1);
      resumeAutoRotateAfterDelay();
    };
  }
}

export function displayCarouselItems(categoryKey) {
  const container = document.getElementById('catalog-carousel');
  if (!container) return;

  stopAutoRotate();
  const lang = getCurrentLang();
  container.innerHTML = '';

  const filteredItems = categoryKey === 'todos'
    ? catalogItems
    : catalogItems.filter(item => item.category === categoryKey);

  if (filteredItems.length === 0) {
    container.innerHTML = `
      <div class="w-100 text-center py-5">
        <p class="fs-5 text-muted">${lang === 'es' ? 'No se encontraron activos disponibles en esta categoría.' : 'No assets available under this category.'}</p>
      </div>
    `;
    return;
  }

  filteredItems.forEach((item, index) => {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = `carousel-card-item ${index === activeIndex ? 'is-active' : ''}`;
    cardWrapper.setAttribute('data-category', item.category);
    cardWrapper.setAttribute('data-index', index);

    const title = item.title[lang] || item.title.es;
    const location = item.location[lang] || item.location.es;
    const specs = item.specs[lang] || item.specs.es;
    const description = item.description[lang] || item.description.es;
    const badge = item.badge ? (item.badge[lang] || item.badge.es) : null;
    const categoryName = item.categoryName ? (item.categoryName[lang] || item.categoryName.es) : '';
    const exclusivity = item.exclusivity ? (item.exclusivity[lang] || item.exclusivity.es) : (lang === 'es' ? 'POA · Consulta Privada' : 'POA · Private Inquiry');
    const consultText = t('card.consult') || (lang === 'es' ? 'Solicitar Dossier Confidencial' : 'Request VIP Dossier');

    cardWrapper.innerHTML = `
      <article class="luxury-card h-100 d-flex flex-column" data-category="${item.category}">
        <!-- Imagen y Badges -->
        <div class="card-img-wrapper position-relative">
          <img src="${item.image}" alt="${title}" loading="${index < 2 ? 'eager' : 'lazy'}">
          <div class="card-badges position-absolute top-0 start-0 p-3 d-flex flex-wrap gap-2">
            <span class="badge bg-burgundy-subtle fw-semibold px-2 py-1 text-uppercase">${categoryName}</span>
            ${badge ? `<span class="badge bg-dark-glass fw-normal px-2 py-1">${badge}</span>` : ''}
          </div>
          <!-- Etiqueta de Exclusividad (Sin Precios Explícitos) -->
          <div class="card-exclusivity-overlay position-absolute bottom-0 end-0 p-3">
            <span class="exclusivity-pill">
              <i class="bi bi-shield-lock-fill text-burgundy me-1"></i> ${exclusivity}
            </span>
          </div>
        </div>

        <!-- Contenido Minimalista & Aireado -->
        <div class="card-body p-4 d-flex flex-column flex-grow-1">
          <div class="card-location small text-uppercase fw-semibold mb-2 d-flex align-items-center gap-1">
            <i class="bi bi-geo-alt text-ruby"></i>
            <span>${location}</span>
          </div>

          <h3 class="font-heading card-title h4 fw-bold mb-2">${title}</h3>
          
          <!-- Bloque Expandible en Coverflow / Tarjeta Activa -->
          <div class="card-expandable-details">
            <div class="card-specs small mb-3 pb-2 border-bottom border-light-subtle">
              <i class="bi bi-shield-check text-ruby me-1"></i> ${specs}
            </div>

            <p class="card-description small mb-4">
              ${description}
            </p>

            <div class="card-actions pt-2 border-top border-light-subtle mt-auto">
              <button class="btn btn-luxury w-100 btn-consult-vip" data-item-id="${item.id}" data-item-title="${title}" data-item-cat="${item.category}">
                <i class="bi bi-file-earmark-lock2 me-1"></i> ${consultText}
              </button>
            </div>
          </div>
        </div>
      </article>
    `;

    // Click on card: Focus & center card if not active
    cardWrapper.addEventListener('click', (e) => {
      if (e.target.closest('.btn-consult-vip')) {
        return; // Handled separately
      }
      if (activeIndex !== index) {
        pauseAutoRotate();
        focusCardByIndex(index, true);
        resumeAutoRotateAfterDelay();
      }
    });

    container.appendChild(cardWrapper);
  });

  // Render Indicator Dots
  renderShowcaseDots(filteredItems.length);

  // Setup interaction listeners for auto-rotate pause/resume
  setupHoverAndTouchListeners(container);

  // Setup Mobile Horizontal Scroll Observation
  setupScrollObserver(container);

  // Focus initial card
  focusCardByIndex(activeIndex, false);

  // Start auto-rotation
  startAutoRotate(filteredItems.length);

  // Attach click events to VIP buttons
  container.querySelectorAll('.btn-consult-vip').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const itemTitle = btn.getAttribute('data-item-title');
      const itemCat = btn.getAttribute('data-item-cat');
      handleVipInquiry(itemTitle, itemCat);
    };
  });
}

function focusCardByIndex(index, smoothScroll = true) {
  const container = document.getElementById('catalog-carousel');
  if (!container) return;

  const cards = container.querySelectorAll('.carousel-card-item');
  if (!cards.length) return;

  if (index < 0) index = cards.length - 1;
  if (index >= cards.length) index = 0;

  activeIndex = index;

  cards.forEach((card, idx) => {
    if (idx === index) {
      card.classList.add('is-active');
      if (smoothScroll) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    } else {
      card.classList.remove('is-active');
    }
  });

  updateShowcaseDots(activeIndex);
}

function navigateShowcase(direction) {
  const container = document.getElementById('catalog-carousel');
  if (!container) return;
  const cards = container.querySelectorAll('.carousel-card-item');
  if (!cards.length) return;

  let newIndex = activeIndex + direction;
  if (newIndex >= cards.length) newIndex = 0;
  if (newIndex < 0) newIndex = cards.length - 1;

  focusCardByIndex(newIndex, true);
}

function startAutoRotate(totalCards) {
  stopAutoRotate();
  if (totalCards <= 1) return;

  autoRotateInterval = setInterval(() => {
    navigateShowcase(1);
  }, 4500);
}

function stopAutoRotate() {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval);
    autoRotateInterval = null;
  }
}

function pauseAutoRotate() {
  stopAutoRotate();
  if (resumeTimeout) {
    clearTimeout(resumeTimeout);
    resumeTimeout = null;
  }
}

function resumeAutoRotateAfterDelay() {
  if (resumeTimeout) clearTimeout(resumeTimeout);
  resumeTimeout = setTimeout(() => {
    const container = document.getElementById('catalog-carousel');
    const totalCards = container?.querySelectorAll('.carousel-card-item')?.length || 0;
    startAutoRotate(totalCards);
  }, 5000);
}

function setupHoverAndTouchListeners(container) {
  container.addEventListener('mouseenter', pauseAutoRotate, { passive: true });
  container.addEventListener('mouseleave', resumeAutoRotateAfterDelay, { passive: true });
  container.addEventListener('touchstart', pauseAutoRotate, { passive: true });
  container.addEventListener('touchend', resumeAutoRotateAfterDelay, { passive: true });
}

function renderShowcaseDots(count) {
  let dotsContainer = document.getElementById('showcase-dots');
  const carouselWrapper = document.querySelector('.catalog-carousel-wrapper');
  
  if (!dotsContainer && carouselWrapper) {
    dotsContainer = document.createElement('div');
    dotsContainer.id = 'showcase-dots';
    dotsContainer.className = 'showcase-indicators';
    carouselWrapper.appendChild(dotsContainer);
  }

  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `showcase-dot ${i === activeIndex ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Ver activo ${i + 1}`);
    dot.onclick = () => {
      pauseAutoRotate();
      focusCardByIndex(i, true);
      resumeAutoRotateAfterDelay();
    };
    dotsContainer.appendChild(dot);
  }
}

function updateShowcaseDots(index) {
  const dots = document.querySelectorAll('.showcase-dot');
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function setupScrollObserver(container) {
  let scrollDebounce = null;
  container.addEventListener('scroll', () => {
    if (scrollDebounce) clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(() => {
      const cards = container.querySelectorAll('.carousel-card-item');
      if (!cards.length) return;

      const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;
      let closestCard = null;
      let closestDistance = Infinity;
      let closestIndex = 0;

      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(containerCenter - cardCenter);
        if (dist < closestDistance) {
          closestDistance = dist;
          closestCard = card;
          closestIndex = idx;
        }
      });

      if (closestCard && activeIndex !== closestIndex) {
        cards.forEach(c => c.classList.remove('is-active'));
        closestCard.classList.add('is-active');
        activeIndex = closestIndex;
        updateShowcaseDots(activeIndex);
      }
    }, 120);
  }, { passive: true });
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
        ? `Solicito el dossier confidencial e información de asignación privada sobre: ${itemTitle}.`
        : `I request the confidential dossier and private allocation details regarding: ${itemTitle}.`;
      
      messageInput.focus();
    }
  }
}
