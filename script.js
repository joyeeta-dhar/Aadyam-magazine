/* ============================================
   AADYAM MAGAZINE — COMPLETE JAVASCRIPT
   ============================================ */

"use strict";

// =====================
//  DATA
// =====================
// =====================
//  STATE
// =====================
let currentPage = 0;
let totalPages = pageData.length;
let zoomLevel = 1;
let displayedCount = 8;
let currentIssueId = 'latest';
let isDark = true;
let isAnimating = false;
let touchStartX = 0;

// =====================
//  LOADER
// =====================
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 2000);
});

// =====================
//  CANVAS HERO ANIMATION
// =====================
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Particles
  const particles = [];
  const NUM = 80;

  for (let i = 0; i < NUM; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  // Mouse parallax
  let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
  canvas.addEventListener('mousemove', e => {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
  });

  let raf;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw circuit grid lines
    ctx.strokeStyle = 'rgba(59,130,246,0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 80) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 80) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    // Update & draw particles
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59,130,246,${p.alpha})`;
      ctx.fill();

      // Draw connections
      particles.forEach((p2, j) => {
        if (j <= i) return;
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    raf = requestAnimationFrame(draw);
  }

  draw();

  // Cleanup
  window.addEventListener('beforeunload', () => cancelAnimationFrame(raf));
})();

// =====================
//  NAVBAR
// =====================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = scrollY;
});

// Active link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        link.style.background = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => sectionObserver.observe(s));

// Mobile menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('dark-mode', isDark);
  document.body.classList.toggle('light-mode', !isDark);
  themeToggle.querySelector('.toggle-icon').textContent = isDark ? '◐' : '◑';
  showToast(isDark ? '🌙 Dark mode enabled' : '☀️ Light mode enabled');
});

// =====================
//  SMOOTH SCROLL
// =====================
function smoothScroll(target) {
  const el = document.querySelector(target);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Nav link click
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href');
    smoothScroll(target);
    document.getElementById('mobileMenu').classList.remove('open');
  });
});

// =====================
//  MAGAZINE GRID
// =====================
function renderMagazineGrid() {
  const grid = document.getElementById('magazineGrid');
  const toShow = magazines.filter(m => !m.featured).slice(0, displayedCount);
  grid.innerHTML = '';

  toShow.forEach((mag, i) => {
    const card = document.createElement('div');
    card.className = 'mag-card';
    card.style.animationDelay = `${i * 0.06}s`;
    card.dataset.title = mag.title.toLowerCase() + ' ' + mag.year + ' ' + mag.subtitle.toLowerCase();

    card.innerHTML = `
      <div class="card-cover">
        <div class="card-cover-inner" style="background: linear-gradient(160deg, ${mag.color[0]}, ${mag.color[1]});">
          <div class="card-cover-num" style="color:${mag.accent}80">VOL ${mag.issue}</div>
          <div style="display:flex;flex-direction:column;gap:0.3rem">
            <div class="card-cover-title" style="background:linear-gradient(135deg,#fff,${mag.accent});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">AADYAM</div>
            <div class="card-cover-theme" style="color:${mag.accent}">${mag.title}</div>
          </div>
          <div class="card-cover-year" style="color:${mag.accent}80">${mag.year}</div>
        </div>
      </div>
      <div class="card-info">
        <div class="card-year">${mag.year} · ISSUE ${mag.issue}</div>
        <div class="card-title">${mag.title}</div>
        <button class="card-btn" onclick="openMagazine('${mag.id}')">Read Issue</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // Hide load more if no more
  const btn = document.getElementById('loadMoreBtn');
  if (displayedCount >= magazines.filter(m => !m.featured).length) {
    btn.style.display = 'none';
  } else {
    btn.style.display = '';
  }
}

function loadMore() {
  displayedCount += 4;
  renderMagazineGrid();
}

function filterIssues(query) {
  const q = query.toLowerCase().trim();
  const cards = document.querySelectorAll('.mag-card');
  cards.forEach(card => {
    const matches = card.dataset.title && card.dataset.title.includes(q);
    card.style.display = q === '' || matches ? '' : 'none';
  });
}

// =====================
//  SCROLL REVEAL
// =====================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function initReveal() {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
  });
}

// =====================
//  MAGAZINE READER
// =====================
function buildReader() {
  const flipbook = document.getElementById('flipbook');
  const thumbsContainer = document.getElementById('pageThumbs');
  flipbook.innerHTML = '';
  thumbsContainer.innerHTML = '';

  pageData.forEach((page, i) => {
    const el = document.createElement('div');
    el.className = 'flip-page';
    el.id = `page-${i}`;
    el.innerHTML = buildPageContent(page, i);

    if (i === 0) {
      el.style.zIndex = totalPages;
    } else {
      el.style.display = 'none';
      el.style.zIndex = totalPages - i;
    }

    flipbook.appendChild(el);

    // Thumb
    const thumb = document.createElement('div');
    thumb.className = 'page-thumb' + (i === 0 ? ' active' : '');
    thumb.textContent = i + 1;
    thumb.onclick = () => goToPage(i);
    thumbsContainer.appendChild(thumb);
  });

  updateReader();
}

function buildPageContent(page, index) {
  if (page.type === 'cover') {
    return `
      <div class="page-content page-cover">
        <div style="font-family:var(--font-mono);font-size:0.6rem;color:#60a5fa;letter-spacing:0.15em;margin-bottom:0.5rem">${page.issue}</div>
        <div style="font-size:2.5rem;font-weight:800;letter-spacing:0.2em;background:linear-gradient(135deg,#fff,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">${page.title}</div>
        <div style="font-family:var(--font-serif,serif);font-style:italic;color:#06b6d4;font-size:1.1rem;margin-top:0.5rem;line-height:1.3">${page.theme}</div>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;margin:1rem 0">
          <div style="width:120px;height:120px;position:relative;display:flex;align-items:center;justify-content:center">
            <div style="position:absolute;width:120px;height:120px;border-radius:50%;border:1px solid rgba(59,130,246,0.4);animation:qspin1 4s linear infinite"></div>
            <div style="position:absolute;width:80px;height:80px;border-radius:50%;border:1px solid rgba(6,182,212,0.5);animation:qspin1 3s linear infinite reverse"></div>
            <div style="position:absolute;width:40px;height:40px;border-radius:50%;border:1px solid rgba(129,140,248,0.6);animation:qspin1 2s linear infinite"></div>
            <div style="width:10px;height:10px;background:#3b82f6;border-radius:50%;box-shadow:0 0 12px #3b82f6"></div>
          </div>
        </div>
        <div style="font-family:var(--font-mono,monospace);font-size:0.55rem;color:rgba(255,255,255,0.3);letter-spacing:0.1em;text-transform:uppercase">TECHNICAL MAGAZINE · STUDENT INNOVATION · ENGINEERING EXCELLENCE</div>
        <div class="page-num right">${index + 1}</div>
      </div>
    `;
  }

  if (page.type === 'toc') {
    const items = page.items.map(item =>
      `<div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--border)">
        <span style="font-size:0.8rem;color:var(--text2)">${item.title}</span>
        <span style="font-family:var(--font-mono,monospace);font-size:0.7rem;color:var(--accent)">${item.page}</span>
      </div>`
    ).join('');

    return `
      <div class="page-content page-inner">
        <div class="page-article-author">CONTENTS</div>
        <div class="page-divider"></div>
        <div class="page-article-title" style="font-size:1.3rem;margin-bottom:1rem">${page.title}</div>
        ${items}
        <div class="page-num right">${index + 1}</div>
      </div>
    `;
  }

  if (page.type === 'article' || page.type === 'research') {
    const paragraphs = page.text.split('\n\n');
    const quote = page.quote ? `<blockquote>"${page.quote}"</blockquote>` : '';
    return `
      <div class="page-content page-inner article-research">
        <div class="page-article-author">${page.author}</div>
        <div class="page-divider"></div>
        <div class="page-article-title">${page.title}</div>
        ${paragraphs[0] ? `<div class="page-article-text">${paragraphs[0]}</div>` : ''}
        ${quote}
        ${paragraphs.slice(1).map(p => `<div class="page-article-text">${p}</div>`).join('')}
        <div class="page-num right">${index + 1}</div>
      </div>
    `;
  }

  if (page.type === 'interview') {
    const dialog = page.dialog.map(d => `
      <div class="itv-q">${d.speaker}</div>
      <div class="itv-a">${d.text}</div>
    `).join('');
    return `
      <div class="page-content page-inner article-interview">
        <div class="page-article-title">${page.title}</div>
        <div class="page-divider"></div>
        ${dialog}
        <div class="page-num right">${index + 1}</div>
      </div>
    `;
  }

  if (page.type === 'news') {
    return `
      <div class="page-content page-inner article-news">
        <div class="news-pill">Flash Report</div>
        <div class="page-article-title">${page.title}</div>
        <div class="page-divider"></div>
        <div class="page-article-text" style="font-size:1.1rem;font-weight:500">${page.summary}</div>
        <div class="page-article-text">${page.text}</div>
        <div class="page-num right">${index + 1}</div>
      </div>
    `;
  }

  if (page.type === 'backcover') {
    return `
      <div class="page-content page-cover" style="align-items:center;justify-content:center;text-align:center">
        <div style="font-size:2rem;font-weight:800;letter-spacing:0.2em;background:linear-gradient(135deg,#fff,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1rem">${page.title}</div>
        <div style="font-family:var(--font-serif,serif);font-style:italic;font-size:1rem;color:#06b6d4;margin-bottom:2rem">${page.tagline}</div>
        <div style="font-family:var(--font-mono,monospace);font-size:0.65rem;color:rgba(255,255,255,0.3);letter-spacing:0.15em">NEXT: ${page.next}</div>
        <div class="page-num left">${index + 1}</div>
      </div>
    `;
  }

  return `<div class="page-content page-inner"><div class="page-num right">${index + 1}</div></div>`;
}

function updateReader() {
  const indicator = document.getElementById('pageIndicator');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const thumbs = document.querySelectorAll('.page-thumb');

  if (indicator) indicator.textContent = `Page ${currentPage + 1} / ${totalPages}`;
  if (prevBtn) prevBtn.disabled = currentPage === 0;
  if (nextBtn) nextBtn.disabled = currentPage === totalPages - 1;

  thumbs.forEach((t, i) => {
    t.classList.toggle('active', i === currentPage);
    if (i === currentPage) {
      t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });
}

function goToPage(targetPage) {
  if (isAnimating || targetPage === currentPage) return;
  if (targetPage < 0 || targetPage >= totalPages) return;

  isAnimating = true;
  const direction = targetPage > currentPage ? 1 : -1;
  const currentEl = document.getElementById(`page-${currentPage}`);
  const targetEl = document.getElementById(`page-${targetPage}`);

  if (!currentEl || !targetEl) { isAnimating = false; return; }

  if (direction > 0) {
    // Flip forward
    currentEl.style.transformOrigin = 'left center';
    currentEl.style.transition = 'transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
    currentEl.style.transform = 'rotateY(-180deg)';
    currentEl.style.zIndex = totalPages + 1;

    targetEl.style.display = 'block';
    targetEl.style.zIndex = totalPages;

    setTimeout(() => {
      currentEl.style.display = 'none';
      currentEl.style.transform = '';
      currentEl.style.zIndex = totalPages - currentPage;
      currentPage = targetPage;
      isAnimating = false;
      updateReader();
    }, 650);
  } else {
    // Flip backward
    targetEl.style.display = 'block';
    targetEl.style.transformOrigin = 'left center';
    targetEl.style.transform = 'rotateY(-180deg)';
    targetEl.style.zIndex = totalPages + 1;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        targetEl.style.transition = 'transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
        targetEl.style.transform = 'rotateY(0deg)';
      });
    });

    setTimeout(() => {
      currentEl.style.display = 'none';
      targetEl.style.transition = '';
      targetEl.style.zIndex = totalPages - targetPage;
      currentPage = targetPage;
      isAnimating = false;
      updateReader();
    }, 650);
  }
}

function nextPage() { goToPage(currentPage + 1); }
function prevPage() { goToPage(currentPage - 1); }

// =====================
//  ZOOM
// =====================
function zoomIn() {
  zoomLevel = Math.min(zoomLevel + 0.2, 2);
  applyZoom();
}
function zoomOut() {
  zoomLevel = Math.max(zoomLevel - 0.2, 0.5);
  applyZoom();
}
function zoomReset() {
  zoomLevel = 1;
  applyZoom();
}
function applyZoom() {
  const flipbook = document.getElementById('flipbook');
  if (flipbook) {
    flipbook.style.transform = `scale(${zoomLevel})`;
    flipbook.style.transition = 'transform 0.3s ease';
  }
}

// =====================
//  MODAL OPEN/CLOSE
// =====================
function openMagazine(issueId) {
  currentIssueId = issueId;
  currentPage = 0;
  zoomLevel = 1;

  const modal = document.getElementById('magazineModal');
  const title = document.getElementById('modalTitle');
  const mag = magazines.find(m => m.id === issueId) || magazines[0];

  if (title) title.textContent = `AADYAM — ISSUE ${mag.issue} · ${mag.year}`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  buildReader();

  // Keyboard support
  document.addEventListener('keydown', handleReaderKey);

  // Touch support
  const readerWrap = document.getElementById('readerWrap');
  if (readerWrap) {
    readerWrap.addEventListener('touchstart', handleTouchStart, { passive: true });
    readerWrap.addEventListener('touchend', handleTouchEnd, { passive: true });
  }
}

function closeMagazine() {
  document.getElementById('magazineModal').classList.remove('open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleReaderKey);
  applyZoom(); // reset zoom transform
}

function handleReaderKey(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextPage();
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevPage();
  if (e.key === 'Escape') closeMagazine();
  if (e.key === '+') zoomIn();
  if (e.key === '-') zoomOut();
}

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
}
function handleTouchEnd(e) {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextPage();
    else prevPage();
  }
}

// =====================
//  DOWNLOAD
// =====================
function downloadPDF(issueId) {
  const id = issueId === 'current' ? currentIssueId : issueId;
  const mag = magazines.find(m => m.id === id);
  
  if (mag && mag.pdfPath && mag.pdfPath !== '#') {
    const link = document.createElement('a');
    link.href = mag.pdfPath;
    link.download = `AADYAM_Issue_${mag.issue}_${mag.year}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`📄 Downloading Issue ${mag.issue}...`);
  } else {
    showToast('❌ PDF not available for this issue yet.');
  }
}

// =====================
//  FEEDBACK FORM
// =====================
function submitFeedback(e) {
  e.preventDefault();

  const name = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const message = document.getElementById('fmessage').value.trim();

  // Clear errors
  ['fname', 'femail', 'fmessage'].forEach(id => {
    const errEl = document.getElementById(id + 'Error');
    if (errEl) { errEl.textContent = ''; errEl.classList.remove('visible'); }
    document.getElementById(id).style.borderColor = '';
  });

  let valid = true;

  if (!name) {
    showFieldError('fname', 'Please enter your name');
    valid = false;
  }
  if (!email || !isValidEmail(email)) {
    showFieldError('femail', 'Please enter a valid email');
    valid = false;
  }
  if (!message || message.length < 10) {
    showFieldError('fmessage', 'Please enter a message (at least 10 characters)');
    valid = false;
  }

  if (!valid) return;

  // Show loading state
  const btn = document.querySelector('.submit-btn');
  const btnText = document.getElementById('submitText');
  if (btn) btn.disabled = true;
  if (btnText) btnText.textContent = 'Sending...';

  // Simulate submission
  setTimeout(() => {
    document.getElementById('feedbackForm').style.display = 'none';
    const successMsg = document.getElementById('successMsg');
    if (successMsg) successMsg.classList.add('visible');
    showToast('✅ Message sent successfully!');
    if (btn) btn.disabled = false;
    if (btnText) btnText.textContent = 'Send Message';
  }, 1500);
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(fieldId + 'Error');
  if (field) field.style.borderColor = '#ef4444';
  if (error) { error.textContent = message; error.classList.add('visible'); }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function resetForm() {
  document.getElementById('feedbackForm').style.display = '';
  document.getElementById('feedbackForm').reset();
  const successMsg = document.getElementById('successMsg');
  if (successMsg) successMsg.classList.remove('visible');
}

// =====================
//  TOAST
// =====================
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// =====================
//  INIT
// =====================
document.addEventListener('DOMContentLoaded', () => {
  renderMagazineGrid();
  initReveal();

  // Close mobile menu on scroll
  window.addEventListener('scroll', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  }, { passive: true });

  // Close modal on overlay click
  document.getElementById('magazineModal').addEventListener('click', e => {
    if (e.target === document.getElementById('magazineModal')) closeMagazine();
  });

  // Mouse wheel zoom in reader
  document.getElementById('readerWrap').addEventListener('wheel', e => {
    if (e.ctrlKey) {
      e.preventDefault();
      if (e.deltaY < 0) zoomIn();
      else zoomOut();
    }
  }, { passive: false });

  initCustomCursor();
  initMagneticButtons();
});

// =====================
//  CUSTOM CURSOR
// =====================
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const outline = document.getElementById('cursorOutline');
  if (!dot || !outline) return;

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Smooth outline trailing
  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    outline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;
    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  // Hover states
  const interactables = 'a, button, .mag-card, .latest-cover, input, select, textarea';
  document.querySelectorAll(interactables).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
  });
}

// =====================
//  MAGNETIC BUTTONS
// =====================
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-ghost, .btn-outline, .nav-cta, .theme-toggle');
  
  buttons.forEach(btn => {
    btn.classList.add('magnetic');
    
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}
