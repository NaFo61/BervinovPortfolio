(function () {
  'use strict';

  /* ---- Sticky nav scroll state ---- */
  var nav = document.querySelector('.nav');
  if (nav) {
    function onScroll() {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile hamburger menu ---- */
  var burger = document.querySelector('.nav__burger');
  var mobileNav = document.querySelector('.nav__mobile');

  if (burger && mobileNav) {
    function closeMenu() {
      burger.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function toggleMenu() {
      var isOpen = burger.classList.toggle('is-open');
      mobileNav.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    burger.addEventListener('click', toggleMenu);

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---- Active nav link ---- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Price calculator ---- */
  var serviceSelect = document.getElementById('calcService');
  var teethInput = document.getElementById('calcTeeth');
  var implantCheck = document.getElementById('calcImplant');
  var anesthesiaCheck = document.getElementById('calcAnesthesia');
  var calcResult = document.getElementById('calcResult');

  var servicePrices = {
    implant: 35000,
    whitening: 18000,
    braces: 120000,
    caries: 4500,
    cleaning: 6500,
    crown: 22000,
    extraction: 3500,
    veneers: 28000
  };

  function formatPrice(value) {
    return value.toLocaleString('ru-RU') + ' \u20BD';
  }

  function updateCalculator() {
    if (!serviceSelect || !calcResult) return;

    var base = servicePrices[serviceSelect.value] || 0;
    var teeth = Math.min(32, Math.max(1, parseInt(teethInput && teethInput.value, 10) || 1));
    if (teethInput) teethInput.value = teeth;

    var total = base * teeth;

    if (implantCheck && implantCheck.checked && serviceSelect.value === 'implant') {
      total += 15000 * teeth;
    }

    if (anesthesiaCheck && anesthesiaCheck.checked) {
      total += 2500;
    }

    calcResult.textContent = formatPrice(total);
  }

  if (serviceSelect) {
    [serviceSelect, teethInput, implantCheck, anesthesiaCheck].forEach(function (el) {
      if (el) {
        el.addEventListener('change', updateCalculator);
        el.addEventListener('input', updateCalculator);
      }
    });
    updateCalculator();
  }

  /* ---- Appointment form ---- */
  var appointmentForm = document.getElementById('appointmentForm');
  var formSuccess = document.getElementById('formSuccess');
  var resetFormBtn = document.getElementById('resetFormBtn');

  if (appointmentForm && formSuccess) {
    var dateInput = document.getElementById('patientDate');
    if (dateInput) {
      var today = new Date();
      dateInput.min = today.toISOString().split('T')[0];
    }

    appointmentForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (!appointmentForm.checkValidity()) {
        appointmentForm.reportValidity();
        return;
      }

      var submitBtn = appointmentForm.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      try {
        if (window.BervinovLeads) {
          await window.BervinovLeads.submit(
            appointmentForm.dataset.leadSite || 'denta-lux',
            appointmentForm.dataset.leadForm || 'appointment',
            window.BervinovLeads.formToObject(appointmentForm)
          );
        }
        appointmentForm.classList.add('is-hidden');
        formSuccess.classList.add('is-visible');
        window.scrollTo({ top: formSuccess.offsetTop - 120, behavior: 'smooth' });
      } catch (err) {
        if (submitBtn) submitBtn.disabled = false;
        alert('Не удалось отправить заявку. Попробуйте позже.');
      }
    });

    if (resetFormBtn) {
      resetFormBtn.addEventListener('click', function () {
        appointmentForm.reset();
        appointmentForm.classList.remove('is-hidden');
        formSuccess.classList.remove('is-visible');
      });
    }
  }
})();
