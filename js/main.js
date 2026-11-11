// ========================================================
// FERAL DUBÁI - MAIN APPLICATION ORCHESTRATOR
// ========================================================

import { renderCatalog } from './modules/renderCatalog.js';
import { setLanguage, getCurrentLang, updateStaticTexts, t } from './modules/translations.js';

document.addEventListener("DOMContentLoaded", () => {
  console.log("Feral Dubái: Inicializando plataforma de ultralujo...");

  // 1. Initialize Translations
  initLanguage();

  // 2. Initialize Catalog
  renderCatalog();

  // 3. Navbar scroll effect
  initNavbarScroll();

  // 4. Mobile Offcanvas Auto-Close
  initMobileNav();

  // 5. Concierge VIP Form Handler
  initConciergeForm();
});

/**
 * Setup language controls (ES / EN) across desktop and mobile menus
 */
function initLanguage() {
  const current = getCurrentLang();
  updateStaticTexts();

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) {
        setLanguage(targetLang);
      }
    });
  });
}

/**
 * Dynamic navbar glassmorphism enhancement on scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-feral');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile drawer auto-close upon link selection
 */
function initMobileNav() {
  const offcanvasEl = document.getElementById('mobileMenu');
  if (!offcanvasEl || typeof bootstrap === 'undefined') return;

  const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
  const mobileLinks = offcanvasEl.querySelectorAll('a.nav-link, a.btn');

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      bsOffcanvas.hide();
    });
  });
}

/**
 * Concierge form VIP submission & modal confirmation
 */
function initConciergeForm() {
  const form = document.getElementById('concierge-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('concierge-name')?.value.trim();
    const email = document.getElementById('concierge-email')?.value.trim();

    if (!name || !email) {
      alert(getCurrentLang() === 'es' ? 'Por favor complete su nombre y correo corporativo.' : 'Please provide your full name and corporate email.');
      return;
    }

    // Show luxury confirmation modal
    const modalEl = document.getElementById('vipConfirmationModal');
    if (modalEl && typeof bootstrap !== 'undefined') {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    } else {
      alert(t('modal.body'));
    }

    form.reset();
  });
}
