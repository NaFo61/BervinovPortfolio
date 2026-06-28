(function () {
  'use strict';

  /* ---- active nav link ---- */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  /* ---- scroll nav ---- */
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- hamburger menu ---- */
  var burger = document.querySelector('.nav__burger');
  var mobileLinks = document.querySelectorAll('.nav__mobile a');

  function closeMenu() {
    if (nav) nav.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function openMenu() {
    if (nav) nav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  if (burger) {
    burger.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---- scroll reveal ---- */
  var revealEls = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---- progress bars animate on reveal ---- */
  var progressBars = document.querySelectorAll('.progress-bar__fill');
  if (progressBars.length && 'IntersectionObserver' in window) {
    var barObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var fill = entry.target;
            var target = fill.getAttribute('data-width') || fill.style.width;
            fill.style.width = '0%';
            requestAnimationFrame(function () {
              fill.style.width = target;
            });
            barObserver.unobserve(fill);
          }
        });
      },
      { threshold: 0.3 }
    );
    progressBars.forEach(function (bar) {
      bar.setAttribute('data-width', bar.style.width);
      barObserver.observe(bar);
    });
  }
})();
