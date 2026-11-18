// ========================================================
// FERAL DUBÁI - INTERACTIVE ROI CALCULATOR (LEAD MAGNET)
// Strategic Wealth Projection & Capital Growth Simulator
// ========================================================

import { getCurrentLang, t, onLanguageChange } from './translations.js';

const ASSET_RATES = {
  penthouse: {
    appreciationRate: 0.148, // 14.8% annual capital appreciation
    yieldRate: 0.078,        // 7.8% net rental yield
    labelEs: "Penthouses & Villas Prime",
    labelEn: "Prime Penthouses & Villas"
  },
  yachts: {
    appreciationRate: 0.085, // 8.5% asset preservation
    yieldRate: 0.094,        // 9.4% charter net yield
    labelEs: "Superyates & Chárter Privado",
    labelEn: "Superyachts & Private Charter"
  },
  cars: {
    appreciationRate: 0.135, // 13.5% collector piece appreciation
    yieldRate: 0.035,        // 3.5% exhibition allocation
    labelEs: "Superdeportivos Bespoke",
    labelEn: "Bespoke Hypercars"
  },
  family: {
    appreciationRate: 0.122, // 12.2% multi-asset portfolio
    yieldRate: 0.065,        // 6.5% fiduciary distribution
    labelEs: "Estructura Fiduciaria DIFC",
    labelEn: "DIFC Fiduciary Structure"
  }
};

let currentInvestment = 5000000;
let currentAssetType = 'penthouse';
let currentYears = 5;

export function initCalculator() {
  const calcContainer = document.getElementById('investment-calculator');
  if (!calcContainer) return;

  const amountSlider = document.getElementById('calc-amount-slider');
  const amountDisplay = document.getElementById('calc-amount-display');
  const assetSelect = document.getElementById('calc-asset-type');
  const yearsButtons = document.querySelectorAll('.calc-year-btn');
  const leadMagnetForm = document.getElementById('calc-lead-form');

  // Slider change
  if (amountSlider) {
    amountSlider.addEventListener('input', (e) => {
      currentInvestment = parseFloat(e.target.value);
      if (amountDisplay) {
        amountDisplay.textContent = formatUSD(currentInvestment);
      }
      updateCalculations();
    });
  }

  // Asset type change
  if (assetSelect) {
    assetSelect.addEventListener('change', (e) => {
      currentAssetType = e.target.value;
      updateCalculations();
    });
  }

  // Years horizon buttons
  yearsButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      yearsButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentYears = parseInt(btn.getAttribute('data-years') || '5', 10);
      updateCalculations();
    });
  });

  // Lead magnet download form handler
  if (leadMagnetForm) {
    leadMagnetForm.addEventListener('submit', handleLeadMagnetSubmit);
  }

  // Initial calculation run
  updateCalculations();

  // Re-run on language change
  onLanguageChange(() => {
    updateCalculations();
  });
}

function updateCalculations() {
  const rates = ASSET_RATES[currentAssetType] || ASSET_RATES.penthouse;
  const lang = getCurrentLang();

  // Future value based on compounded capital appreciation
  const futureValue = currentInvestment * Math.pow(1 + rates.appreciationRate, currentYears);
  const totalAppreciation = futureValue - currentInvestment;

  // Cumulative net income / yield
  const annualYield = currentInvestment * rates.yieldRate;
  const totalYield = annualYield * currentYears;

  // Total Projected Return (Capital Growth + Net Yield)
  const totalReturn = totalAppreciation + totalYield;
  const totalPortfolioValue = currentInvestment + totalReturn;

  // Dubai Fiscal Advantage (0% tax in Dubai vs estimated 42% in NY/London/EU)
  const estimatedForeignTax = totalReturn * 0.42;

  // Update DOM elements
  const elTotalReturn = document.getElementById('calc-total-return');
  const elPortfolioValue = document.getElementById('calc-portfolio-value');
  const elAppreciation = document.getElementById('calc-appreciation');
  const elYield = document.getElementById('calc-yield');
  const elTaxSavings = document.getElementById('calc-tax-savings');

  if (elTotalReturn) elTotalReturn.textContent = `+${formatUSD(totalReturn)}`;
  if (elPortfolioValue) elPortfolioValue.textContent = formatUSD(totalPortfolioValue);
  if (elAppreciation) elAppreciation.textContent = `+${formatUSD(totalAppreciation)}`;
  if (elYield) elYield.textContent = `+${formatUSD(totalYield)}`;
  if (elTaxSavings) elTaxSavings.textContent = formatUSD(estimatedForeignTax);
}

function handleLeadMagnetSubmit(e) {
  e.preventDefault();
  const lang = getCurrentLang();

  const nameInput = document.getElementById('lead-name');
  const emailInput = document.getElementById('lead-email');
  const phoneInput = document.getElementById('lead-phone');

  const name = nameInput?.value.trim();
  const email = emailInput?.value.trim();
  const phone = phoneInput?.value.trim() || '';

  if (!name || !email) {
    alert(lang === 'es' ? 'Por favor complete su nombre y correo corporativo.' : 'Please provide your full name and corporate email.');
    return;
  }

  // Construct WhatsApp follow-up link
  const assetName = ASSET_RATES[currentAssetType] ? (lang === 'es' ? ASSET_RATES[currentAssetType].labelEs : ASSET_RATES[currentAssetType].labelEn) : 'Activos Prime';
  const waMsg = encodeURIComponent(
    lang === 'es'
      ? `Hola Feral Dubái, mi nombre es ${name}. He realizado una corrida financiera para ${assetName} con inversión de ${formatUSD(currentInvestment)} a ${currentYears} años. Deseo recibir el informe fiduciario personalizado en PDF.`
      : `Hello Feral Dubai, my name is ${name}. I have calculated a financial projection for ${assetName} with an allocation of ${formatUSD(currentInvestment)} over ${currentYears} years. I would like to receive the comprehensive fiduciary PDF audit.`
  );

  // Close lead magnet modal if present
  const modalEl = document.getElementById('leadMagnetModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    const bsModal = bootstrap.Modal.getInstance(modalEl);
    if (bsModal) bsModal.hide();
  }

  // Show VIP confirmation modal or alert
  const vipModal = document.getElementById('vipConfirmationModal');
  if (vipModal && typeof bootstrap !== 'undefined') {
    const modal = new bootstrap.Modal(vipModal);
    modal.show();
  } else {
    alert(lang === 'es' ? 'Informe en proceso. Un director fiduciario lo contactará en breve.' : 'Report in progress. A managing director will contact you shortly.');
  }

  // Offer instant WhatsApp link
  setTimeout(() => {
    if (confirm(lang === 'es' ? '¿Desea abrir WhatsApp ahora para contactar a su asesor asignado de inmediato?' : 'Would you like to open WhatsApp to connect with your dedicated advisor immediately?')) {
      window.open(`https://wa.me/97148883372?text=${waMsg}`, '_blank');
    }
  }, 600);

  e.target.reset();
}

function formatUSD(num) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(num);
}
