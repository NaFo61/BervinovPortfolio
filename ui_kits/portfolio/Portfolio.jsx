/* Bervinov Portfolio — full single-page recreation built on the design system.
   Loaded as text/babel (not a module): exposes window.Portfolio.
   DS primitives come from window.DesignSystem_8987fb. */
(function () {
  const DS = window.DesignSystem_8987fb;
  const { Button, Badge, Card, Stat, Input, Rating, TestimonialCard, PriceCard } = DS;

  const PHOTOS = {
    vkus:    'assets/work-vkus.jpg',
    denta:   'assets/work-denta.jpg',
    academy: 'assets/work-academy.jpg',
    lingua:  'assets/work-lingua.jpg',
    coffee:  'assets/work-coffee.jpg',
    fit:     'assets/work-fit.jpg',
  };
  const LOCAL_SITE_URLS = {
    vkus:    '../../projects/vkus-ogon/index.html',
    denta:   '../../projects/denta-lux/index.html',
    academy: '../../projects/bervinov-academy/index.html',
    lingua:  '../../projects/lingua-pro/index.html',
    coffee:  '../../projects/severny-kofe/index.html',
    fit:     '../../projects/fitzone/index.html',
  };
  const SITE_URLS = (window.__SHOWCASE__ && window.__SHOWCASE__.sites) || LOCAL_SITE_URLS;
  const HERO_PHOTO = 'assets/hero-portrait.jpg';

  const NAV = [
    ['Главная', '#hero'], ['Обо мне', '#about'], ['Работы', '#works'],
    ['Цены', '#pricing'], ['Отзывы', '#reviews'], ['Контакты', '#contacts'],
  ];

  const WORKS = [
    { id: 'vkus', title: 'Vкус&Огонь', cat: 'HoReCa', desc: 'Лендинг с онлайн-бронированием столов и меню.', price: 'от 85 000 ₽', span: 'tall' },
    { id: 'denta', title: 'ДентаЛюкс', cat: 'Медицина', desc: 'Сайт клиники с записью к врачу и калькулятором стоимости.', price: 'от 120 000 ₽', span: 'wide' },
    { id: 'academy', title: 'BervinovAcademy', cat: 'Образование', desc: 'Онлайн-школа: курсы по вёрстке и дизайну, тарифы, личный кабинет учеников.', flagship: true, span: 'flagship',
      tiers: [['Старт', '9 900 ₽'], ['Профи', '24 900 ₽'], ['Наставник 1-на-1', '59 900 ₽']] },
    { id: 'lingua', title: 'LinguaPro', cat: 'Образование', desc: 'Платформа записи на уроки с расписанием и оплатой.', price: 'от 95 000 ₽', span: 'normal' },
    { id: 'coffee', title: 'Северный Кофе', cat: 'Ритейл / HoReCa', desc: 'Брендовый сайт с картой точек и программой лояльности.', price: 'от 70 000 ₽', span: 'normal' },
    { id: 'fit', title: 'FitZone', cat: 'Спорт', desc: 'Сайт с абонементами, расписанием тренировок и онлайн-оплатой.', price: 'от 110 000 ₽', span: 'wide' },
  ];

  const PRICES = [
    { name: 'Лендинг', price: 'от 50 000 ₽', features: ['Одна страница', 'Адаптив + анимации', 'Запуск за 5–7 дней'], cta: 'Обсудить' },
    { name: 'Корпоративный сайт', price: 'от 120 000 ₽', features: ['До 8 страниц', 'CMS + формы', 'Базовая SEO-оптимизация'], popular: true, cta: 'Обсудить' },
    { name: 'Сайт под ключ + анимации', price: 'от 200 000 ₽', features: ['Дизайн с нуля', 'Сложные анимации', 'Интеграции и аналитика'], cta: 'Обсудить' },
  ];

  const REVIEWS = [
    { quote: 'Мирон уловил атмосферу нашего гриль-бара с первого созвона. Бронирований стало в 2 раза больше.', name: 'Анна Котова', company: 'ресторан «Vкус&Огонь»' },
    { quote: 'Чистый, доверительный сайт. Записи через форму пошли сразу, всё работает без сбоев.', name: 'Игорь Лебедев', company: 'клиника «ДентаЛюкс»' },
    { quote: 'После курса собрала первый коммерческий сайт и нашла клиента. Объясняет по-человечески.', name: 'Дарья Минина', company: 'выпускница BervinovAcademy' },
    { quote: 'Сделал быстро и красиво. Программа лояльности на сайте реально приводит людей.', name: 'Сергей Прохоров', company: 'сеть «Северный Кофе»' },
  ];

  const CONTACTS = [
    { icon: 'tg', label: 'Telegram', value: '@bervinov_dev', href: '#' },
    { icon: 'mail', label: 'Email', value: 'hello@bervinov.dev', href: 'mailto:hello@bervinov.dev' },
    { icon: 'phone', label: 'Телефон', value: '+7 (999) 123-45-67', href: 'tel:+79991234567' },
    { icon: 'gh', label: 'GitHub / Behance', value: 'bervinov', href: '#' },
  ];

  const STATS = [
    { raw: 6, suffix: '+', label: 'лет в разработке' },
    { raw: 40, suffix: '', label: 'проектов сдано' },
    { raw: 38, suffix: '', label: 'довольных клиентов' },
  ];

  function Icon({ name, size = 20 }) {
    const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
    const paths = {
      tg: <path d="M22 4 11 13M22 4l-7 18-4-9-9-4 20-5Z" />,
      mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
      phone: <path d="M5 4h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
      gh: <path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.8a3 3 0 0 0-.9-2.5c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12 12 0 0 0-6.4 0C6.6 1.8 5.5 2.1 5.5 2.1A4.6 4.6 0 0 0 5.4 5.6 5 5 0 0 0 4 9.1c0 5 3 6.2 6 6.5a3 3 0 0 0-.9 2.3V21" />,
      arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    };
    return <svg {...p}>{paths[name]}</svg>;
  }

  function AnimatedStat({ raw, suffix, label, active }) {
    const [val, setVal] = React.useState(0);
    React.useEffect(() => {
      if (!active) { setVal(0); return; }
      const dur = 1400;
      const t0 = performance.now();
      let raf;
      const tick = (now) => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(raw * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [active, raw]);
    return <Stat value={`${val}${suffix}`} label={label} className="bv-stat" />;
  }

  function Nav({ active, scrolled }) {
    return (
      <header className={`bv-nav${scrolled ? ' is-scrolled' : ''}`}>
        <a href="#hero" className="bv-logo" aria-label="Бервинов Мирон — на главную">
          <span className="bv-logo__mark">МБ</span>
        </a>
        <nav className="bv-nav__links" aria-label="Основная навигация">
          {NAV.map(([t, h]) => (
            <a key={h} href={h} className={active === h ? 'is-active' : ''}>{t}</a>
          ))}
        </nav>
        <div className="bv-nav__cta">
          <Button as="a" href="#contacts" variant="primary" size="sm">Обсудить проект</Button>
        </div>
      </header>
    );
  }

  function Hero() {
    return (
      <section id="hero" className="bv-hero" data-reveal>
        <div className="bv-hero__orbs" aria-hidden="true">
          <span className="bv-orb bv-orb--1" />
          <span className="bv-orb bv-orb--2" />
          <span className="bv-orb bv-orb--3" />
        </div>
        <div aria-hidden="true" className="bv-hero__ghost" data-parallax="ghost">ПОРТФОЛИО</div>
        <div className="bv-hero__photo-wrap" data-reveal-stagger>
          <div className="bv-hero__photo-glow" aria-hidden="true" />
          <img className="bv-hero__photo" alt="Бервинов Мирон — разработчик сайтов"
               src={HERO_PHOTO} loading="eager" width="460" height="575" />
        </div>
        <div className="bv-hero__copy" data-reveal-stagger>
          <div className="bv-eyebrow bv-eyebrow--line">Разработчик сайтов · под ключ</div>
          <h1 className="bv-hero__name">
            <span className="bv-hero__name-line">Бервинов</span>
            <span className="bv-hero__name-line bv-hero__name-line--accent">Мирон</span>
          </h1>
          <p className="bv-hero__sub">Разработка сайтов под ключ — дизайн, вёрстка, анимации, запуск.</p>
          <div className="bv-hero__actions">
            <Button as="a" href="#works" variant="mint" size="lg">Смотреть работы</Button>
            <Button as="a" href="#contacts" variant="ghost" size="lg">Связаться</Button>
          </div>
        </div>
        <a href="#about" className="bv-scroll" aria-label="Прокрутить вниз">
          <span>scroll</span><span className="bv-scroll__line" />
        </a>
      </section>
    );
  }

  function About({ statsActive }) {
    return (
      <section id="about" className="bv-section bv-about" data-reveal>
        <div className="bv-about__lead" data-reveal-stagger>
          <div className="bv-eyebrow bv-eyebrow--line">Обо мне</div>
          <h2 className="bv-h2">Разрабатываю сайты уже несколько лет. Идеально передаю суть и душу бренда. Делаю под ключ — от идеи до запуска.</h2>
          <div className="bv-tags">
            {['UX/UI', 'Frontend', 'Анимации', 'SEO'].map(t => <Badge key={t} variant="neutral">{t}</Badge>)}
          </div>
        </div>
        <Card surface="raised" className="bv-about__stats" data-reveal-stagger>
          {STATS.map(s => (
            <AnimatedStat key={s.label} {...s} active={statsActive} />
          ))}
        </Card>
      </section>
    );
  }

  function WorkCard({ w }) {
    const siteUrl = SITE_URLS[w.id];
    return (
      <Card interactive className={`bv-work bv-work--${w.span}${w.flagship ? ' bv-work--featured' : ''}`} surface="card" featured={w.flagship}>
        <a className="bv-work__link" href={siteUrl} target="_blank" rel="noopener noreferrer" aria-label={`Открыть сайт «${w.title}»`}>
          <div className="bv-work__media">
            <img alt={w.title + ' — превью'} src={PHOTOS[w.id]} loading="lazy" />
            <div className="bv-work__shine" aria-hidden="true" />
            <div className="bv-work__overlay">
              <p>{w.desc}</p>
              {w.price && <span className="bv-work__price">{w.price}</span>}
              <span className="bv-work__open">Открыть сайт →</span>
            </div>
            {w.flagship && <span className="bv-work__badge"><Badge variant="mint">Мой проект</Badge></span>}
          </div>
        </a>
        <div className="bv-work__body">
          <div className="bv-work__head">
            <h3><a href={siteUrl} target="_blank" rel="noopener noreferrer">{w.title}</a></h3>
            <span className="bv-work__cat">{w.cat}</span>
          </div>
          <p className="bv-work__desc">{w.desc}</p>
          {w.tiers && (
            <div className="bv-tiers">
              {w.tiers.map(([n, p]) => (
                <div key={n} className="bv-tier"><span>{n}</span><span className="bv-tier__price">{p}</span></div>
              ))}
            </div>
          )}
          <div className="bv-work__foot">
            {w.price && !w.flagship && <span className="bv-work__price">{w.price}</span>}
            <Button as="a" href={siteUrl} target="_blank" rel="noopener noreferrer" variant={w.flagship ? 'mint' : 'ghost'} size="sm">
              Открыть сайт
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  function Works() {
    return (
      <section id="works" className="bv-section" data-reveal>
        <div className="bv-section__head" data-reveal-stagger>
          <div className="bv-eyebrow bv-eyebrow--line">Работы · избранное</div>
          <h2 className="bv-h2 bv-h2--lg">Мозаика проектов</h2>
        </div>
        <div className="bv-bento" data-reveal-stagger>
          {WORKS.map(w => <WorkCard key={w.id} w={w} />)}
        </div>
      </section>
    );
  }

  function Pricing() {
    return (
      <section id="pricing" className="bv-section" data-reveal>
        <div className="bv-section__head" data-reveal-stagger>
          <div className="bv-eyebrow bv-eyebrow--line">Сколько стоит сайт</div>
          <h2 className="bv-h2 bv-h2--lg">Пакеты разработки</h2>
        </div>
        <div className="bv-prices" data-reveal-stagger>
          {PRICES.map(p => <PriceCard key={p.name} {...p} />)}
        </div>
      </section>
    );
  }

  function Reviews() {
    return (
      <section id="reviews" className="bv-section" data-reveal>
        <div className="bv-section__head" data-reveal-stagger>
          <div className="bv-eyebrow bv-eyebrow--line">Отзывы</div>
          <h2 className="bv-h2 bv-h2--lg">Что говорят клиенты</h2>
        </div>
        <div className="bv-reviews" data-reveal-stagger>
          {REVIEWS.map((r, i) => <TestimonialCard key={i} {...r} />)}
        </div>
      </section>
    );
  }

  function Contacts() {
    const [done, setDone] = React.useState(false);
    const [err, setErr] = React.useState('');
    const [sending, setSending] = React.useState(false);
    async function submit(e) {
      e.preventDefault();
      const f = new FormData(e.target);
      if (!f.get('name') || !f.get('contact') || !f.get('message')) {
        setErr('Заполните все поля, пожалуйста.');
        return;
      }
      setErr('');
      if (window.BervinovLeads) {
        setSending(true);
        try {
          await window.BervinovLeads.submit('portfolio', 'contact', {
            name: String(f.get('name')),
            contact: String(f.get('contact')),
            message: String(f.get('message')),
          });
          setDone(true);
        } catch {
          setErr('Не удалось отправить. Попробуйте позже или напишите в Telegram.');
        } finally {
          setSending(false);
        }
        return;
      }
      setDone(true);
    }
    return (
      <section id="contacts" className="bv-section bv-contacts" data-reveal>
        <div className="bv-contacts__left" data-reveal-stagger>
          <div className="bv-eyebrow bv-eyebrow--line">Контакты</div>
          <h2 className="bv-h2 bv-h2--lg">Обсудим ваш проект?</h2>
          <p className="bv-contacts__sub">Отвечаю в течение дня. Бесплатная консультация и расчёт стоимости.</p>
          <ul className="bv-links">
            {CONTACTS.map(c => (
              <li key={c.label}>
                <a href={c.href}>
                  <span className="bv-links__icon"><Icon name={c.icon} /></span>
                  <span className="bv-links__text"><b>{c.label}</b><em>{c.value}</em></span>
                  <span className="bv-links__arrow"><Icon name="arrow" size={18} /></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Card surface="card" className="bv-form" data-reveal-stagger>
          {done ? (
            <div className="bv-form__done bv-form__done--pop">
              <span className="bv-form__check">✓</span>
              <p>Спасибо! Я свяжусь с вами.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <Input label="Имя" name="name" placeholder="Как вас зовут" />
              <Input label="Контакт (почта / телеграм)" name="contact" placeholder="hello@mail.ru или @username" />
              <Input label="Сообщение" name="message" as="textarea" rows={4} placeholder="Коротко о проекте…" />
              {err && <p className="bv-form__err" role="alert">{err}</p>}
              <Button variant="mint" type="submit" style={{ width: '100%' }} disabled={sending}>
                {sending ? 'Отправка…' : 'Отправить заявку'}
              </Button>
            </form>
          )}
        </Card>
      </section>
    );
  }

  function Footer() {
    return (
      <footer className="bv-footer" data-reveal>
        <div className="bv-footer__top" data-reveal-stagger>
          <div className="bv-footer__brand">
            <span className="bv-logo__mark">МБ</span>
            <p>Разработка сайтов под ключ.<br/>Дизайн · вёрстка · анимации · запуск.</p>
          </div>
          <nav className="bv-footer__nav" aria-label="Навигация в подвале">
            {NAV.map(([t, h]) => <a key={h} href={h}>{t}</a>)}
          </nav>
          <div className="bv-footer__social">
            {[['tg', '#'], ['mail', 'mailto:hello@bervinov.dev'], ['gh', '#']].map(([n, h]) => (
              <a key={n} href={h} aria-label={n}><Icon name={n} size={18} /></a>
            ))}
          </div>
        </div>
        <div className="bv-footer__bottom">
          <span>© 2026 Бервинов Мирон. Разработка сайтов под ключ.</span>
          <span>Сделано в тёмной неоновой стилистике.</span>
        </div>
      </footer>
    );
  }

  function Portfolio() {
    const [activeNav, setActiveNav] = React.useState('#hero');
    const [scrolled, setScrolled] = React.useState(false);
    const [statsActive, setStatsActive] = React.useState(false);

    React.useEffect(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const els = Array.from(document.querySelectorAll('[data-reveal], [data-reveal-stagger]'));
      const revealAll = () => els.forEach(el => el.classList.add('is-in'));
      setStatsActive(true);

      if (reduce || typeof IntersectionObserver === 'undefined') {
        revealAll();
        return;
      }

      if (els[0]) els[0].classList.add('is-in');

      const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            if (en.target.id === 'about') setStatsActive(true);
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
      els.forEach(el => io.observe(el));

      const fallback = setTimeout(revealAll, 800);

      const sections = NAV.map(([, h]) => document.querySelector(h)).filter(Boolean);
      const onScroll = () => {
        setScrolled(window.scrollY > 24);
        const mid = window.scrollY + window.innerHeight * 0.38;
        let current = '#hero';
        sections.forEach(sec => { if (sec.offsetTop <= mid) current = '#' + sec.id; });
        setActiveNav(current);

        const ghost = document.querySelector('[data-parallax="ghost"]');
        if (ghost) ghost.style.transform = `translate(-50%, calc(-46% + ${window.scrollY * 0.06}px))`;
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      const glow = document.querySelector('.bv-cursor-glow');
      const onMove = (e) => {
        if (!glow || window.innerWidth < 900) return;
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      };
      window.addEventListener('mousemove', onMove, { passive: true });

      return () => {
        io.disconnect();
        clearTimeout(fallback);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('mousemove', onMove);
      };
    }, []);

    return (
      <div className="bv-root">
        <div className="bv-ambient" aria-hidden="true">
          <span className="bv-ambient__grid" />
          <span className="bv-ambient__mesh" />
        </div>
        <div className="bv-cursor-glow" aria-hidden="true" />
        <Nav active={activeNav} scrolled={scrolled} />
        <main>
          <Hero />
          <About statsActive={statsActive} />
          <Works />
          <Pricing />
          <Reviews />
          <Contacts />
        </main>
        <Footer />
      </div>
    );
  }

  window.Portfolio = Portfolio;
})();
