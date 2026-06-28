(function () {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const mobile = document.querySelector('.nav__mobile');

  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 20);
  }, { passive: true });

  if (burger && mobile) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-open');
      mobile.classList.toggle('is-open');
    });
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('is-open');
      mobile.classList.remove('is-open');
    }));
  }

  document.querySelectorAll('[data-reveal]').forEach(el => {
    new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.1 }).observe(el);
  });

  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      const target = tab.dataset.target;
      document.querySelectorAll('.menu-section').forEach(s => {
        s.style.display = !target || s.id === target ? '' : 'none';
      });
    });
  });

  document.querySelectorAll('[data-form]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const success = form.parentElement.querySelector('.form-success') || form.nextElementSibling;
      const site = form.dataset.leadSite || 'vkus-ogon';
      const formType = form.dataset.leadForm || 'booking';
      const submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      try {
        if (window.BervinovLeads) {
          await window.BervinovLeads.submit(
            site,
            formType,
            window.BervinovLeads.formToObject(form)
          );
        }
        form.style.display = 'none';
        if (success) success.classList.add('is-show');
      } catch (err) {
        if (submitBtn) submitBtn.disabled = false;
        alert('Не удалось отправить заявку. Попробуйте позже.');
      }
    });
  });
})();
