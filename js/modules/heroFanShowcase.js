// ========================================================
// FERAL DUBÁI - HERO FAN DECK SHOWCASE (VITRINA ESCALONADA)
// Tiered Coverflow / Fan Deck Architecture · Zero Scroll Jumps
// ========================================================

let activeFanIndex = 0;
let fanAutoRotateInterval = null;
let fanResumeTimeout = null;
let heroObserver = null;

export function initHeroFanShowcase() {
  const showcase = document.getElementById('hero-fan-showcase');
  if (!showcase) return;

  const cards = showcase.querySelectorAll('.hero-fan-card');
  if (!cards.length) return;

  // Build minimalist dots indicator if not already in markup
  setupFanIndicators(cards.length);

  // Apply initial tiered positions
  updateFanPositions();

  // Setup click listeners on all cards (zero scroll jump)
  setupCardInteractions(showcase, cards);

  // Setup hover & touch pause/resume
  setupHoverAndTouch(showcase);

  // Setup mobile swipe gesture
  setupSwipeGesture(showcase, cards.length);

  // Setup IntersectionObserver so auto-rotation only runs while Hero is visible
  setupHeroVisibilityObserver(showcase, cards.length);
}

function setupFanIndicators(totalCards) {
  const dotsContainer = document.getElementById('hero-fan-dots');
  if (!dotsContainer) return;

  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalCards; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `hero-fan-dot ${i === activeFanIndex ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Ver activo destacado ${i + 1}`);
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      pauseFanAutoRotate();
      activeFanIndex = i;
      updateFanPositions();
      resumeFanAutoRotateAfterDelay(totalCards);
    });
    dotsContainer.appendChild(dot);
  }
}

function updateFanPositions() {
  const showcase = document.getElementById('hero-fan-showcase');
  if (!showcase) return;

  const cards = showcase.querySelectorAll('.hero-fan-card');
  const count = cards.length;
  if (!count) return;

  const isMobile = window.innerWidth < 768;

  cards.forEach((card, i) => {
    let offset = i - activeFanIndex;

    // Wrap around for seamless circular fan
    if (offset > Math.floor(count / 2)) {
      offset -= count;
    } else if (offset < -Math.floor(count / 2)) {
      offset += count;
    }

    card.classList.remove('is-center', 'is-side-left', 'is-side-right', 'is-hidden');

    if (offset === 0) {
      // Central active card: prominent, sharp, elevated
      card.classList.add('is-center');
      const scale = isMobile ? 1.04 : 1.08;
      const transY = isMobile ? -4 : -8;
      card.style.transform = `translateX(0px) translateY(${transY}px) scale(${scale})`;
      card.style.zIndex = '10';
      card.style.opacity = '1';
      card.style.filter = 'none';
      card.style.pointerEvents = 'auto';
    } else if (offset === -1) {
      // Immediate left card
      card.classList.add('is-side-left');
      const transX = isMobile ? -125 : -215;
      const scale = isMobile ? 0.84 : 0.88;
      card.style.transform = `translateX(${transX}px) translateY(8px) scale(${scale}) rotate(-3deg)`;
      card.style.zIndex = '7';
      card.style.opacity = isMobile ? '0.6' : '0.75';
      card.style.filter = 'brightness(0.72)';
      card.style.pointerEvents = 'auto';
    } else if (offset === 1) {
      // Immediate right card
      card.classList.add('is-side-right');
      const transX = isMobile ? 125 : 215;
      const scale = isMobile ? 0.84 : 0.88;
      card.style.transform = `translateX(${transX}px) translateY(8px) scale(${scale}) rotate(3deg)`;
      card.style.zIndex = '7';
      card.style.opacity = isMobile ? '0.6' : '0.75';
      card.style.filter = 'brightness(0.72)';
      card.style.pointerEvents = 'auto';
    } else if (offset === -2) {
      // Far left card
      card.classList.add('is-side-left');
      const transX = isMobile ? -230 : -385;
      const scale = isMobile ? 0.72 : 0.75;
      card.style.transform = `translateX(${transX}px) translateY(18px) scale(${scale}) rotate(-6deg)`;
      card.style.zIndex = '4';
      card.style.opacity = isMobile ? '0' : '0.45';
      card.style.filter = 'brightness(0.48)';
      card.style.pointerEvents = isMobile ? 'none' : 'auto';
    } else if (offset === 2) {
      // Far right card
      card.classList.add('is-side-right');
      const transX = isMobile ? 230 : 385;
      const scale = isMobile ? 0.72 : 0.75;
      card.style.transform = `translateX(${transX}px) translateY(18px) scale(${scale}) rotate(6deg)`;
      card.style.zIndex = '4';
      card.style.opacity = isMobile ? '0' : '0.45';
      card.style.filter = 'brightness(0.48)';
      card.style.pointerEvents = isMobile ? 'none' : 'auto';
    } else {
      // Other cards off-screen
      card.classList.add('is-hidden');
      const dir = offset > 0 ? 500 : -500;
      card.style.transform = `translateX(${dir}px) scale(0.6)`;
      card.style.zIndex = '1';
      card.style.opacity = '0';
      card.style.pointerEvents = 'none';
    }
  });

  // Update indicators (dots + fine progress bar)
  updateFanIndicators(count);
}

function updateFanIndicators(count) {
  // Update progress bar
  const progressBar = document.getElementById('hero-fan-progress');
  if (progressBar) {
    const segmentWidth = 100 / count;
    progressBar.style.width = `${segmentWidth}%`;
    progressBar.style.marginLeft = `${activeFanIndex * segmentWidth}%`;
  }

  // Update dots
  const dots = document.querySelectorAll('.hero-fan-dot');
  dots.forEach((dot, idx) => {
    if (idx === activeFanIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function setupCardInteractions(showcase, cards) {
  const count = cards.length;

  cards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (activeFanIndex === index) {
        // Center card clicked: smoothly view in catalog or open concierge
        const catTarget = document.getElementById('catalogo');
        if (catTarget) {
          catTarget.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Lateral card clicked: smoothly bring to center (zero window jump)
        pauseFanAutoRotate();
        activeFanIndex = index;
        updateFanPositions();
        resumeFanAutoRotateAfterDelay(count);
      }
    });
  });

  // Re-calculate positions on window resize with debounce
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateFanPositions();
    }, 150);
  }, { passive: true });
}

function startFanAutoRotate(count) {
  stopFanAutoRotate();
  if (count <= 1) return;

  fanAutoRotateInterval = setInterval(() => {
    activeFanIndex = (activeFanIndex + 1) % count;
    updateFanPositions();
  }, 4500);
}

function stopFanAutoRotate() {
  if (fanAutoRotateInterval) {
    clearInterval(fanAutoRotateInterval);
    fanAutoRotateInterval = null;
  }
}

function pauseFanAutoRotate() {
  stopFanAutoRotate();
  if (fanResumeTimeout) {
    clearTimeout(fanResumeTimeout);
    fanResumeTimeout = null;
  }
}

function resumeFanAutoRotateAfterDelay(count) {
  if (fanResumeTimeout) clearTimeout(fanResumeTimeout);
  fanResumeTimeout = setTimeout(() => {
    startFanAutoRotate(count);
  }, 5000);
}

function setupHoverAndTouch(showcase) {
  const cards = showcase.querySelectorAll('.hero-fan-card');
  const count = cards.length;

  showcase.addEventListener('mouseenter', pauseFanAutoRotate, { passive: true });
  showcase.addEventListener('mouseleave', () => resumeFanAutoRotateAfterDelay(count), { passive: true });
  showcase.addEventListener('touchstart', pauseFanAutoRotate, { passive: true });
  showcase.addEventListener('touchend', () => resumeFanAutoRotateAfterDelay(count), { passive: true });
}

function setupSwipeGesture(showcase, count) {
  let touchStartX = 0;
  let touchStartY = 0;

  showcase.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  showcase.addEventListener('touchend', (e) => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    // Only register horizontal swipes (ignore vertical scrolling)
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      pauseFanAutoRotate();
      if (diffX > 0) {
        // Swiped left -> Next
        activeFanIndex = (activeFanIndex + 1) % count;
      } else {
        // Swiped right -> Prev
        activeFanIndex = (activeFanIndex - 1 + count) % count;
      }
      updateFanPositions();
      resumeFanAutoRotateAfterDelay(count);
    }
  }, { passive: true });
}

function setupHeroVisibilityObserver(showcase, count) {
  const heroSection = document.getElementById('hero');
  if (!heroSection || typeof IntersectionObserver === 'undefined') {
    startFanAutoRotate(count);
    return;
  }

  heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startFanAutoRotate(count);
      } else {
        stopFanAutoRotate();
      }
    });
  }, { threshold: 0.15 });

  heroObserver.observe(heroSection);
}
