// ========================================================
// FERAL DUBÁI - INTERACTIVE GPS MAP (LEAFLET.JS)
// Luxury Light Style · Geospatial Trophy Asset Pins
// ========================================================

import { getCurrentLang, t, onLanguageChange } from './translations.js';

let mapInstance = null;
let markersGroup = null;

const assetLocations = [
  {
    id: "skyline-penthouse",
    lat: 25.1972,
    lng: 55.2744,
    title: { es: "Skyline Presidential Penthouse", en: "Skyline Presidential Penthouse" },
    category: { es: "Bienes Raíces Prime", en: "Prime Real Estate" },
    area: "Downtown Dubái · Burj Khalifa",
    image: "./assets/img - apartamento/APARTAMENTO_COMEDOR.jpg",
    exclusivity: { es: "POA · Consulta Privada", en: "POA · Private Inquiry" },
    catKey: "apartamentos"
  },
  {
    id: "palm-water-villa",
    lat: 25.1124,
    lng: 55.1389,
    title: { es: "Palm Jumeirah Signature Water Villa", en: "Palm Jumeirah Signature Water Villa" },
    category: { es: "Bienes Raíces Prime", en: "Prime Real Estate" },
    area: "Palm Jumeirah · Frond N",
    image: "./assets/img - apartamento/APARTAMENTO_SALE.jpg",
    exclusivity: { es: "Inversión Fiduciaria VIP", en: "VIP Fiduciary Allocation" },
    catKey: "apartamentos"
  },
  {
    id: "superyacht-royal-feral",
    lat: 25.0931,
    lng: 55.1432,
    title: { es: "Superyacht Royal Feral 65M", en: "Superyacht Royal Feral 65M" },
    category: { es: "Yates Privados", en: "Private Superyachts" },
    area: "Dubai Harbour Marina",
    image: "./assets/img - yate/ALUMBRADO_FRONTAL_YATE.jpeg",
    exclusivity: { es: "POA · Dossier Confidencial", en: "POA · Confidential Dossier" },
    catKey: "yates"
  },
  {
    id: "ocean-explorer-50m",
    lat: 25.2635,
    lng: 55.2750,
    title: { es: "Ocean Explorer 50M Custom", en: "Ocean Explorer 50M Custom" },
    category: { es: "Yates Privados", en: "Private Superyachts" },
    area: "Port Rashid · Dubái",
    image: "./assets/img - yate/FRONTAL_YATE.jpeg",
    exclusivity: { es: "Asignación Exclusiva", en: "Exclusive Allocation" },
    catKey: "yates"
  },
  {
    id: "majesty-suite",
    lat: 25.0768,
    lng: 55.1325,
    title: { es: "Majesty Master Suite & Salon", en: "Majesty Master Suite & Salon" },
    category: { es: "Yates Privados", en: "Private Superyachts" },
    area: "Dubai Marina Yacht Club",
    image: "./assets/img - yate/INTERIOR_DE_YATE.jpeg",
    exclusivity: { es: "POA · Edición Privada", en: "POA · Private Edition" },
    catKey: "yates"
  },
  {
    id: "feral-phantom-gt",
    lat: 25.0489,
    lng: 55.2347,
    title: { es: "Feral Phantom GT Black Badge", en: "Feral Phantom GT Black Badge" },
    category: { es: "Superdeportivos", en: "Bespoke Hypercars" },
    area: "Dubái Autodrome Club",
    image: "./assets/img - autos/ROLL_FRENTE.jpeg",
    exclusivity: { es: "Pieza de Colección VIP", en: "VIP Collector's Piece" },
    catKey: "autos"
  },
  {
    id: "difc-hq",
    lat: 25.2105,
    lng: 55.2810,
    title: { es: "DIFC Global Family Office HQ", en: "DIFC Global Family Office HQ" },
    category: { es: "Sede Corporativa Fiduciaria", en: "Fiduciary Corporate HQ" },
    area: "Gate Precinct 4, DIFC",
    image: "./assets/img-pagina/fondo.jpg",
    exclusivity: { es: "Sede Fiduciaria Central", en: "Central Fiduciary Office" },
    catKey: "asesoria"
  }
];

export function initMap() {
  const mapElement = document.getElementById('dubai-map');
  if (!mapElement || typeof L === 'undefined') return;

  // Initialize map centered on Dubai
  mapInstance = L.map('dubai-map', {
    center: [25.14, 55.21],
    zoom: 11,
    minZoom: 10,
    maxZoom: 16,
    scrollWheelZoom: false, // Prevents unintended scroll hijack
    zoomControl: false
  });

  // Add zoom control at bottom-right
  L.control.zoom({ position: 'bottomright' }).addTo(mapInstance);

  // Clean CartoDB Positron TileLayer (Minimalist Light Architecture)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(mapInstance);

  // Markers layer group
  markersGroup = L.layerGroup().addTo(mapInstance);

  // Render markers
  renderMapMarkers();

  // Re-render when language toggles
  onLanguageChange(() => {
    renderMapMarkers();
  });

  // Enable scroll zoom on user click
  mapInstance.on('focus', () => {
    mapInstance.scrollWheelZoom.enable();
  });

  // Ensure 100% full tile coverage and responsive re-centering
  setTimeout(() => {
    if (mapInstance) {
      mapInstance.invalidateSize();
    }
  }, 350);

  window.addEventListener('resize', () => {
    if (mapInstance) {
      mapInstance.invalidateSize();
    }
  }, { passive: true });
}

function renderMapMarkers() {
  if (!markersGroup || typeof L === 'undefined') return;
  markersGroup.clearLayers();

  const lang = getCurrentLang();

  assetLocations.forEach(item => {
    const title = item.title[lang] || item.title.es;
    const category = item.category[lang] || item.category.es;
    const exclusivity = item.exclusivity[lang] || item.exclusivity.es;
    const consultBtnText = lang === 'es' ? 'Solicitar Dossier VIP' : 'Request VIP Dossier';

    // Custom Luxury Burgundy DivIcon
    const customIcon = L.divIcon({
      className: 'luxury-map-marker',
      html: `
        <div class="marker-pin-wrapper">
          <div class="marker-pin-pulse"></div>
          <div class="marker-pin-badge">
            <i class="bi bi-geo-alt-fill"></i>
          </div>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36]
    });

    const marker = L.marker([item.lat, item.lng], { icon: customIcon });

    // Luxury Popup Card
    const popupContent = `
      <div class="luxury-map-popup">
        <div class="popup-img-wrapper">
          <img src="${item.image}" alt="${title}">
          <span class="popup-badge">${category}</span>
        </div>
        <div class="popup-body">
          <span class="popup-area"><i class="bi bi-geo-alt me-1"></i>${item.area}</span>
          <h4 class="popup-title">${title}</h4>
          <div class="popup-exclusivity">
            <i class="bi bi-shield-lock-fill text-burgundy me-1"></i>${exclusivity}
          </div>
          <button class="btn btn-feral-cta w-100 py-2 btn-popup-inquiry" data-item-title="${title}" data-item-cat="${item.catKey}">
            <i class="bi bi-file-earmark-lock2 me-1"></i> ${consultBtnText}
          </button>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent, {
      maxWidth: 300,
      className: 'luxury-leaflet-popup'
    });

    markersGroup.addLayer(marker);
  });

  // Attach global click event delegation for popup inquiry buttons
  if (mapInstance) {
    mapInstance.on('popupopen', () => {
      const popupBtn = document.querySelector('.btn-popup-inquiry');
      if (popupBtn) {
        popupBtn.onclick = (e) => {
          e.preventDefault();
          const itemTitle = popupBtn.getAttribute('data-item-title');
          const itemCat = popupBtn.getAttribute('data-item-cat');

          const conciergeSection = document.getElementById('concierge');
          if (conciergeSection) {
            conciergeSection.scrollIntoView({ behavior: 'smooth' });

            const interestSelect = document.getElementById('concierge-interest');
            if (interestSelect) {
              if (itemCat === 'apartamentos') interestSelect.value = 'penthouse';
              else if (itemCat === 'yates') interestSelect.value = 'yachts';
              else if (itemCat === 'autos') interestSelect.value = 'cars';
              else if (itemCat === 'asesoria') interestSelect.value = 'family';
            }

            const messageInput = document.getElementById('concierge-message');
            if (messageInput) {
              messageInput.value = lang === 'es'
                ? `Solicito el dossier confidencial del activo geoespacial: ${itemTitle}.`
                : `I request the confidential dossier for the geospatial asset: ${itemTitle}.`;
              messageInput.focus({ preventScroll: true });
            }
          }
        };
      }
    });
  }
}
