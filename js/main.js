/* =========================================================
   VELOO TECHNOLOGY — Site Scripts
   Shared across: index, services, about, contact, faq
   Each block checks for its target elements before running,
   so this one file is safe to include on every page.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Live footer clocks (all pages) ---------- */
  function updateClocks() {
    document.querySelectorAll('.clock-time').forEach(function (el) {
      var tz = el.dataset.tz;
      try {
        var time = new Intl.DateTimeFormat('en-GB', {
          timeZone: tz, hour: '2-digit', minute: '2-digit'
        }).format(new Date());
        el.textContent = time;
      } catch (e) {
        el.textContent = '--:--';
      }
    });
  }
  if (document.querySelector('.clock-time')) {
    updateClocks();
    setInterval(updateClocks, 30000);
  }

  /* ---------- Hero rotating tagline (home page) ---------- */
  var rot = document.getElementById('rotating-text');
  if (rot) {
    var phrases = ['dependable software', 'modern web applications', 'secure infrastructure', 'trusted IT support'];
    var pi = 0;
    setInterval(function () {
      pi = (pi + 1) % phrases.length;
      rot.style.opacity = 0;
      setTimeout(function () {
        rot.textContent = phrases[pi];
        rot.style.opacity = 1;
      }, 300);
    }, 3000);
  }

  /* ---------- Animated stat counters (home page) ---------- */
  var stats = document.querySelectorAll('.stat-num');
  if (stats.length) {
    var animateStat = function (el) {
      var target = parseInt(el.dataset.target, 10);
      var cur = 0;
      var step = Math.max(1, Math.round(target / 50));
      var tick = function () {
        cur += step;
        if (cur >= target) { el.textContent = target; return; }
        el.textContent = cur;
        requestAnimationFrame(tick);
      };
      tick();
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateStat(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    stats.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Contact form (contact page) ---------- */
  var form = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');
  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      success.classList.add('show');
      form.reset();
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ---------- FAQ accordion + category nav (faq page) ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (q) {
      q.addEventListener('click', function () {
        item.classList.toggle('open');
      });
    }
  });

  var navBtns = document.querySelectorAll('.faq-nav-btn');
  if (navBtns.length) {
    navBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        navBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var target = document.getElementById(btn.dataset.target);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- Mobile nav toggle (all pages) ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

});
