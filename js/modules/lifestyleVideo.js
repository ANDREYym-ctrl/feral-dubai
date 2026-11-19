// ========================================================
// FERAL DUBÁI - VERTICAL LIFESTYLE VIDEO MODULE
// Cinematic 9:16 Vertical Video · Autoplay, Muted & Interactive Audio
// ========================================================

import { getCurrentLang, t, onLanguageChange } from './translations.js';

let videoObserver = null;

export function initLifestyleVideo() {
  const video = document.getElementById('dubai-vertical-video');
  if (!video) return;

  const mainAudioBtn = document.getElementById('video-unmute-main-btn');
  const cardAudioBtn = document.getElementById('video-sound-toggle-btn');
  const fullscreenBtn = document.getElementById('video-fullscreen-btn');
  const playbackOverlay = document.getElementById('video-playback-overlay');

  // Ensure attributes are set
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');

  // Attempt initial autoplay
  attemptAutoplay(video);

  // Audio Toggle Handlers
  if (mainAudioBtn) {
    mainAudioBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleVideoAudio(video);
    });
  }

  if (cardAudioBtn) {
    cardAudioBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleVideoAudio(video);
    });
  }

  // Fullscreen Handler
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      requestVideoFullscreen(video);
    });
  }

  // Play/Pause on Video Click
  if (playbackOverlay) {
    playbackOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      togglePlayPause(video, playbackOverlay);
    });
  }

  // IntersectionObserver: Play when in view, pause when out of view
  setupVideoObserver(video);

  // Sync texts on language switch
  onLanguageChange(() => {
    updateAudioButtonLabels(video.muted);
  });
}

function attemptAutoplay(video) {
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay with sound restricted by browser; retry muted
      video.muted = true;
      video.play().catch(() => {
        console.log("Feral Dubái: Autoplay en espera de interacción de usuario.");
      });
    });
  }
}

function toggleVideoAudio(video) {
  video.muted = !video.muted;
  if (!video.muted && video.paused) {
    video.play().catch(() => {});
  }
  updateAudioButtonLabels(video.muted);
}

function updateAudioButtonLabels(isMuted) {
  const lang = getCurrentLang();
  const mainIcon = document.getElementById('main-audio-icon');
  const mainText = document.getElementById('main-audio-text');
  const cardIcon = document.getElementById('card-audio-icon');
  const cardLabel = document.getElementById('card-audio-label');

  if (isMuted) {
    if (mainIcon) mainIcon.className = 'bi bi-volume-up-fill me-2';
    if (mainText) mainText.textContent = lang === 'es' ? 'Activar Sonido del Video' : 'Enable Video Audio';
    if (cardIcon) cardIcon.className = 'bi bi-volume-mute-fill';
    if (cardLabel) cardLabel.textContent = lang === 'es' ? 'Silenciado' : 'Muted';
  } else {
    if (mainIcon) mainIcon.className = 'bi bi-volume-mute-fill me-2';
    if (mainText) mainText.textContent = lang === 'es' ? 'Silenciar Audio' : 'Mute Video';
    if (cardIcon) cardIcon.className = 'bi bi-volume-up-fill';
    if (cardLabel) cardLabel.textContent = lang === 'es' ? 'Sonido Activo' : 'Sound On';
  }
}

function togglePlayPause(video, overlay) {
  if (video.paused) {
    video.play().then(() => {
      overlay.classList.remove('is-paused');
    }).catch(() => {});
  } else {
    video.pause();
    overlay.classList.add('is-paused');
  }
}

function requestVideoFullscreen(video) {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  } else if (video.webkitEnterFullscreen) {
    // Safari iOS fallback
    video.webkitEnterFullscreen();
  }
}

function setupVideoObserver(video) {
  if (typeof IntersectionObserver === 'undefined') return;

  videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (video.paused) {
          video.play().catch(() => {});
        }
      } else {
        if (!video.paused) {
          video.pause();
        }
      }
    });
  }, { threshold: 0.25 });

  videoObserver.observe(video);
}
