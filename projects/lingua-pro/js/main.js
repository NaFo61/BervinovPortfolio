(function () {
  'use strict';

  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  /* ── Scroll: nav shadow ── */
  function onScroll() {
    if (nav) {
      nav.classList.toggle('nav--scrolled', window.scrollY > 20);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu ── */
  function closeMobileMenu() {
    toggle?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggle?.addEventListener('click', function () {
    const isOpen = toggle.classList.toggle('open');
    mobileMenu?.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu?.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileMenu();
  });

  /* ── Active nav link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .mobile-menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Booking: inline slot buttons ── */
  function bookSlot(btn, details) {
    if (btn.classList.contains('booked')) return;

    const message = details
      ? 'Урок забронирован!\n\n' + details + '\n\nДетали отправлены на вашу почту.'
      : 'Урок забронирован! Детали отправлены на вашу почту.';

    alert(message);
    btn.textContent = 'Забронировано';
    btn.classList.add('booked');
  }

  document.querySelectorAll('.slot__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const slot = btn.closest('.slot');
      const time = slot?.querySelector('.slot__time')?.textContent || '';
      const lang = slot?.querySelector('.slot__lang')?.textContent || '';
      bookSlot(btn, time + ' · ' + lang);
    });
  });

  /* ── Schedule page: day tabs + time slots ── */
  const dayTabs = document.querySelectorAll('.day-tab');
  const slotsPanel = document.getElementById('slots-panel');

  if (dayTabs.length && slotsPanel) {
    const scheduleData = JSON.parse(slotsPanel.dataset.schedule || '{}');

    function renderSlots(dayKey) {
      const day = scheduleData[dayKey];
      if (!day) return;

      const titleEl = slotsPanel.querySelector('.schedule-slots__title');
      const countEl = slotsPanel.querySelector('.schedule-slots__count');
      const gridEl = slotsPanel.querySelector('.slots-grid');

      if (titleEl) titleEl.textContent = day.label;
      if (countEl) countEl.textContent = day.slots.length + ' свободных слотов';

      if (!gridEl) return;

      gridEl.innerHTML = day.slots.map(function (slot) {
        const booked = slot.booked ? ' booked' : '';
        return (
          '<button type="button" class="time-slot' + booked + '" data-time="' + slot.time + '" data-lang="' + slot.lang + '" data-teacher="' + slot.teacher + '">' +
            '<div class="time-slot__time">' + slot.time + '</div>' +
            '<div class="time-slot__meta">' + slot.lang + '<br/>' + slot.teacher + '</div>' +
            (slot.booked ? '<span class="time-slot__book">Занято</span>' : '<span class="time-slot__book">Записаться →</span>') +
          '</button>'
        );
      }).join('');

      gridEl.querySelectorAll('.time-slot:not(.booked)').forEach(function (el) {
        el.addEventListener('click', function () {
          const time = el.dataset.time;
          const lang = el.dataset.lang;
          const teacher = el.dataset.teacher;
          alert(
            'Урок забронирован!\n\n' +
            'День: ' + day.label + '\n' +
            'Время: ' + time + '\n' +
            'Язык: ' + lang + '\n' +
            'Преподаватель: ' + teacher + '\n\n' +
            'Подтверждение отправлено на вашу почту.'
          );
          el.classList.add('booked');
          el.querySelector('.time-slot__book').textContent = 'Забронировано';
        });
      });
    }

    dayTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        dayTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        renderSlots(tab.dataset.day);
      });
    });

    const activeTab = document.querySelector('.day-tab.active') || dayTabs[0];
    if (activeTab) renderSlots(activeTab.dataset.day);
  }

  /* ── Standalone time slots (without schedule data) ── */
  document.querySelectorAll('.time-slot:not(.booked)').forEach(function (el) {
    if (el.closest('#slots-panel')) return;
    el.addEventListener('click', function () {
      if (el.classList.contains('booked')) return;
      const time = el.dataset.time || el.querySelector('.time-slot__time')?.textContent || '';
      const lang = el.dataset.lang || '';
      const teacher = el.dataset.teacher || '';
      let msg = 'Урок забронирован!\n\nВремя: ' + time;
      if (lang) msg += '\nЯзык: ' + lang;
      if (teacher) msg += '\nПреподаватель: ' + teacher;
      msg += '\n\nДетали отправлены на вашу почту.';
      alert(msg);
      el.classList.add('booked');
      const bookEl = el.querySelector('.time-slot__book');
      if (bookEl) bookEl.textContent = 'Забронировано';
    });
  });
})();
