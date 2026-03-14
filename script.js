// ============================================================
//  CLIFF SCHWANDNER — Artist Portfolio
//  script.js
// ============================================================

// --- LIGHTBOX -----------------------------------------------
const paintings  = Array.from(document.querySelectorAll('.painting'));
const lightbox   = document.getElementById('lightbox');
const lbImg      = document.getElementById('lb-img');
const lbTitle    = document.getElementById('lb-title');
const lbClose    = document.getElementById('lb-close');
const lbPrev     = document.getElementById('lb-prev');
const lbNext     = document.getElementById('lb-next');

let current = 0;

function openLightbox(index) {
  current = index;
  const p = paintings[index];
  lbImg.src   = p.querySelector('img').src;
  lbImg.alt   = p.dataset.title || '';
  lbTitle.textContent = p.dataset.title || '';
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

function showNext() {
  current = (current + 1) % paintings.length;
  openLightbox(current);
}

function showPrev() {
  current = (current - 1 + paintings.length) % paintings.length;
  openLightbox(current);
}

paintings.forEach((p, i) => p.addEventListener('click', () => openLightbox(i)));
lbClose.addEventListener('click', closeLightbox);
lbNext.addEventListener('click', showNext);
lbPrev.addEventListener('click', showPrev);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (lightbox.classList.contains('hidden')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowRight')  showNext();
  if (e.key === 'ArrowLeft')   showPrev();
});

// --- NAV SHRINK ON SCROLL -----------------------------------
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.padding = '0.9rem 4rem';
  } else {
    nav.style.padding = '1.4rem 4rem';
  }
});
