(function () {
  'use strict';

  var path = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  var nav = document.querySelector('.nav');

  function closeMenu() {
    if (nav) nav.classList.remove('is-open');
    document.body.style.overflow = '';
    var burger = document.querySelector('.nav__burger');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    if (nav) nav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    var burger = document.querySelector('.nav__burger');
    if (burger) burger.setAttribute('aria-expanded', 'true');
  }

  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 24);
    }, { passive: true });
  }

  var burger = document.querySelector('.nav__burger');
  if (burger) {
    burger.addEventListener('click', function () {
      if (nav && nav.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  document.querySelectorAll('.nav__mobile a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

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

  document.querySelectorAll('.schedule-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var day = tab.getAttribute('data-day');
      document.querySelectorAll('.schedule-tab').forEach(function (t) {
        t.classList.toggle('is-active', t === tab);
      });
      document.querySelectorAll('.schedule-panel').forEach(function (panel) {
        panel.classList.toggle('is-active', panel.getAttribute('data-day') === day);
      });
    });
  });

  document.querySelectorAll('.faq-item__q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('is-open');
      });
      if (!isOpen) item.classList.add('is-open');
    });
  });

  var lightbox = document.querySelector('.lightbox');
  var lightboxImg = document.querySelector('.lightbox img');
  var lightboxClose = document.querySelector('.lightbox__close');

  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var img = item.querySelector('img');
      if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src.replace('w=600', 'w=1200').replace('w=800', 'w=1200');
        lightboxImg.alt = img.alt;
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    if (lightbox) lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  document.querySelectorAll('[data-pay]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var price = btn.getAttribute('data-pay');
      var plan = btn.getAttribute('data-plan') || 'абонемент';
      alert('Оплата «' + plan + '»: ' + price + ' ₽ — демо-режим');
    });
  });
})();
