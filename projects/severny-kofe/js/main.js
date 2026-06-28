(function () {
  'use strict';

  var nav = document.querySelector('.nav');
  var burger = document.querySelector('.nav__burger');
  var mobileNav = document.querySelector('.nav__mobile');

  /* Scroll: nav shadow */
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile hamburger */
  function closeMobileNav() {
    if (!burger || !mobileNav) return;
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  }

  function openMobileNav() {
    if (!burger || !mobileNav) return;
    burger.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('is-open');
    document.body.classList.add('nav-open');
  }

  if (burger && mobileNav) {
    burger.addEventListener('click', function () {
      if (burger.classList.contains('is-open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMobileNav();
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Menu tabs */
  var menuTabs = document.querySelectorAll('.menu-tab');
  var menuCategories = document.querySelectorAll('.menu-category');

  menuTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-tab');
      menuTabs.forEach(function (t) { t.classList.remove('is-active'); });
      menuCategories.forEach(function (c) { c.classList.remove('is-active'); });
      tab.classList.add('is-active');
      var panel = document.getElementById('menu-' + target);
      if (panel) panel.classList.add('is-active');
    });
  });

  /* Active nav link from body data-page */
  var page = document.body.getAttribute('data-page');
  if (page) {
    document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(function (link) {
      if (link.getAttribute('data-nav') === page) {
        link.classList.add('is-active');
      }
    });
  }
})();
