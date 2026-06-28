/* @ds-bundle: {"format":3,"namespace":"DesignSystem_8987fb","components":[{"name":"Badge","sourcePath":"components/buttons/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"PriceCard","sourcePath":"components/content/PriceCard.jsx"},{"name":"Rating","sourcePath":"components/content/Rating.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Stat","sourcePath":"components/surfaces/Stat.jsx"}],"sourceHashes":{"components/buttons/Badge.jsx":"685d97793c18","components/buttons/Button.jsx":"dc72ada6f884","components/content/Avatar.jsx":"82d84a6dc5c1","components/content/PriceCard.jsx":"0c1c2d959f05","components/content/Rating.jsx":"d102ef542cbd","components/content/TestimonialCard.jsx":"25a0689a13ef","components/forms/Input.jsx":"1840106d15a8","components/surfaces/Card.jsx":"665ebba74ae4","components/surfaces/Stat.jsx":"387f2728cadf","ui_kits/portfolio/Portfolio.jsx":"af394b10584e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_8987fb = window.DesignSystem_8987fb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — outlined pill status/label. Never filled.
 */
function Badge({
  variant = 'neutral',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    mint: {
      color: 'var(--color-phosphor-mint)',
      border: '1px solid var(--color-phosphor-mint)',
      boxShadow: 'var(--glow-mint-soft)'
    },
    success: {
      color: 'var(--color-verdant-edge)',
      border: '1px solid var(--color-verdant-edge)'
    },
    info: {
      color: 'var(--color-deep-signal)',
      border: '1px solid var(--color-deep-signal)'
    },
    neutral: {
      color: 'var(--color-graphite)',
      border: '1px solid var(--border-card)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 11,
      lineHeight: 1,
      letterSpacing: '0.094em',
      textTransform: 'uppercase',
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      background: 'transparent',
      ...tones[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Badge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the system's pill control. The ONLY filled button is white
 * (primary); everything else is ghost/outlined. Mint variant is reserved
 * for the single neon CTA per viewport.
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: 14
    },
    md: {
      padding: '12px 24px',
      fontSize: 16
    },
    lg: {
      padding: '15px 32px',
      fontSize: 16
    }
  };
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: '0.2px',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    lineHeight: 1,
    textDecoration: 'none',
    transition: 'all var(--dur-base) var(--ease-out)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--color-pure-white)',
      color: 'var(--color-void-canvas)',
      boxShadow: 'var(--shadow-pill-inset)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-pure-white)',
      border: '1px solid var(--color-pure-white)'
    },
    mint: {
      background: 'transparent',
      color: 'var(--color-phosphor-mint)',
      border: '1px solid var(--color-phosphor-mint)',
      boxShadow: 'var(--glow-mint-soft)'
    },
    quiet: {
      background: 'transparent',
      color: 'var(--color-graphite)',
      border: '1px solid var(--border-card)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular placeholder with initials over a dark surface and a
 * light hairline ring. Pass `src` to show a photo instead.
 */
function Avatar({
  src,
  alt = '',
  name = '',
  size = 48,
  style = {},
  ...rest
}) {
  const initials = name ? name.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size * 0.34,
      letterSpacing: '0.04em',
      color: 'var(--color-graphite)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rating — row of mint stars. Filled stars glow phosphor-mint; the rest
 * sit muted. Default 5 of 5.
 */
function Rating({
  value = 5,
  max = 5,
  size = 16,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      gap: 3,
      ...style
    },
    "aria-label": `${value} из ${max}`
  }, rest), Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    "aria-hidden": "true",
    style: {
      fontSize: size,
      lineHeight: 1,
      color: i < value ? 'var(--color-phosphor-mint)' : 'var(--color-iron-edge)',
      textShadow: i < value ? '0 0 10px rgba(112,220,211,0.6)' : 'none'
    }
  }, "\u2605")));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Rating.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — dark form field. Sharp 5px corners (the one non-pill radius).
 * Focus swaps the border to Deep Signal — a color change, not a glow ring.
 */
function Input({
  label,
  id,
  as = 'input',
  rows = 4,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? 'f-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const Field = as;
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    background: 'var(--surface-card)',
    border: '1px solid var(--color-iron-edge)',
    borderRadius: 'var(--radius-input)',
    padding: '12px 14px',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--color-pure-white)',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out)',
    resize: as === 'textarea' ? 'vertical' : undefined,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: '0.4px',
      color: 'var(--text-tertiary)'
    }
  }, label), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    rows: as === 'textarea' ? rows : undefined,
    style: fieldStyle,
    onFocus: e => {
      e.target.style.borderColor = 'var(--color-deep-signal)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--color-iron-edge)';
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — primary content container. Elevation comes from a light hairline
 * border (#d9dae5) on the dark surface, never a drop shadow. `featured`
 * adds the phosphor-mint glow (use one per viewport max).
 */
function Card({
  surface = 'card',
  featured = false,
  interactive = false,
  padding = 24,
  children,
  style = {},
  ...rest
}) {
  const surfaces = {
    card: 'var(--surface-card)',
    raised: 'var(--surface-raised)',
    page: 'var(--surface-page)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: interactive ? 'ds-card ds-card--interactive' : 'ds-card',
    style: {
      background: surfaces[surface],
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: featured ? 'var(--glow-mint-soft)' : 'none',
      borderColor: featured ? 'var(--color-phosphor-mint)' : 'var(--border-card)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), children, interactive && /*#__PURE__*/React.createElement("style", null, `
          .ds-card--interactive:hover {
            transform: translateY(-4px);
            border-color: var(--color-phosphor-mint) !important;
            box-shadow: var(--glow-mint-soft) !important;
          }
        `));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PriceCard — pricing package. Dark surface, mint price, pill CTA.
 * `popular` adds the "Популярный" mint badge + featured glow.
 */
function PriceCard({
  name,
  price,
  note,
  features = [],
  popular = false,
  cta = 'Обсудить',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    featured: popular,
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 24,
      letterSpacing: '0.04em',
      color: 'var(--color-pure-white)'
    }
  }, name), popular && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "mint"
  }, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0439")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 40,
      letterSpacing: '0.02em',
      color: 'var(--color-phosphor-mint)',
      textShadow: '0 0 22px rgba(112,220,211,0.4)'
    }
  }, price), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, note)), features.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-phosphor-mint)',
      lineHeight: 1.5
    }
  }, "\u2014"), f))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: popular ? 'mint' : 'ghost',
    style: {
      width: '100%',
      marginTop: 'auto'
    }
  }, cta));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TestimonialCard — client review. Dark surface, big mint quote mark,
 * 5-star rating, avatar + name + company. Soft hover lift via Card.
 */
function TestimonialCard({
  quote,
  name,
  company,
  avatarSrc,
  rating = 5,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 56,
      lineHeight: 0.6,
      color: 'var(--color-phosphor-mint)',
      textShadow: '0 0 24px rgba(112,220,211,0.4)',
      height: 28
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, quote), /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: avatarSrc,
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14,
      color: 'var(--color-pure-white)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, company))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a single neon metric: big mint number + muted label.
 * Used in the "Обо мне" mini-statistics row.
 */
function Stat({
  value,
  label,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 56,
      lineHeight: 1,
      letterSpacing: '0.04em',
      color: 'var(--color-phosphor-mint)',
      textShadow: '0 0 24px rgba(112,220,211,0.45)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      letterSpacing: '0.4px',
      color: 'var(--text-tertiary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Portfolio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Bervinov Portfolio — full single-page recreation built on the design system.
   Loaded as text/babel (not a module): exposes window.Portfolio.
   DS primitives come from window.DesignSystem_8987fb. */
(function () {
  const DS = window.DesignSystem_8987fb;
  const {
    Button,
    Badge,
    Card,
    Stat,
    Input,
    Avatar,
    Rating,
    TestimonialCard,
    PriceCard
  } = DS;

  // placeholder image helper (dark canvas + mint label)
  const img = (w, h, label) => `https://placehold.co/${w}x${h}/0d0e12/70dcd3?text=${encodeURIComponent(label)}`;
  const NAV = [['Главная', '#hero'], ['Обо мне', '#about'], ['Работы', '#works'], ['Цены', '#pricing'], ['Отзывы', '#reviews'], ['Контакты', '#contacts']];
  const WORKS = [{
    id: 'vkus',
    title: 'Vкус&Огонь',
    cat: 'HoReCa',
    desc: 'Лендинг с онлайн-бронированием столов и меню.',
    price: 'от 85 000 ₽',
    span: 'tall'
  }, {
    id: 'denta',
    title: 'ДентаЛюкс',
    cat: 'Медицина',
    desc: 'Сайт клиники с записью к врачу и калькулятором стоимости.',
    price: 'от 120 000 ₽',
    span: 'wide'
  }, {
    id: 'academy',
    title: 'BervinovAcademy',
    cat: 'Образование',
    desc: 'Онлайн-школа: курсы по вёрстке и дизайну, тарифы, личный кабинет учеников.',
    flagship: true,
    span: 'flagship',
    tiers: [['Старт', '9 900 ₽'], ['Профи', '24 900 ₽'], ['Наставник 1-на-1', '59 900 ₽']]
  }, {
    id: 'lingua',
    title: 'LinguaPro',
    cat: 'Образование',
    desc: 'Платформа записи на уроки с расписанием и оплатой.',
    price: 'от 95 000 ₽',
    span: 'normal'
  }, {
    id: 'coffee',
    title: 'Северный Кофе',
    cat: 'Ритейл / HoReCa',
    desc: 'Брендовый сайт с картой точек и программой лояльности.',
    price: 'от 70 000 ₽',
    span: 'normal'
  }, {
    id: 'fit',
    title: 'FitZone',
    cat: 'Спорт',
    desc: 'Сайт с абонементами, расписанием тренировок и онлайн-оплатой.',
    price: 'от 110 000 ₽',
    span: 'wide'
  }];
  const PRICES = [{
    name: 'Лендинг',
    price: 'от 50 000 ₽',
    features: ['Одна страница', 'Адаптив + анимации', 'Запуск за 5–7 дней'],
    cta: 'Обсудить'
  }, {
    name: 'Корпоративный сайт',
    price: 'от 120 000 ₽',
    features: ['До 8 страниц', 'CMS + формы', 'Базовая SEO-оптимизация'],
    popular: true,
    cta: 'Обсудить'
  }, {
    name: 'Сайт под ключ + анимации',
    price: 'от 200 000 ₽',
    features: ['Дизайн с нуля', 'Сложные анимации', 'Интеграции и аналитика'],
    cta: 'Обсудить'
  }];
  const REVIEWS = [{
    quote: 'Мирон уловил атмосферу нашего гриль-бара с первого созвона. Бронирований стало в 2 раза больше.',
    name: 'Анна Котова',
    company: 'ресторан «Vкус&Огонь»'
  }, {
    quote: 'Чистый, доверительный сайт. Записи через форму пошли сразу, всё работает без сбоев.',
    name: 'Игорь Лебедев',
    company: 'клиника «ДентаЛюкс»'
  }, {
    quote: 'После курса собрала первый коммерческий сайт и нашла клиента. Объясняет по-человечески.',
    name: 'Дарья Минина',
    company: 'выпускница BervinovAcademy'
  }, {
    quote: 'Сделал быстро и красиво. Программа лояльности на сайте реально приводит людей.',
    name: 'Сергей Прохоров',
    company: 'сеть «Северный Кофе»'
  }];
  const CONTACTS = [{
    icon: 'tg',
    label: 'Telegram',
    value: '@bervinov_dev',
    href: '#'
  }, {
    icon: 'mail',
    label: 'Email',
    value: 'hello@bervinov.dev',
    href: 'mailto:hello@bervinov.dev'
  }, {
    icon: 'phone',
    label: 'Телефон',
    value: '+7 (999) 123-45-67',
    href: 'tel:+79991234567'
  }, {
    icon: 'gh',
    label: 'GitHub / Behance',
    value: 'bervinov',
    href: '#'
  }];

  // minimal line-glyph icon set (stroke = currentColor)
  function Icon({
    name,
    size = 20
  }) {
    const p = {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.6,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    };
    const paths = {
      tg: /*#__PURE__*/React.createElement("path", {
        d: "M22 4 11 13M22 4l-7 18-4-9-9-4 20-5Z"
      }),
      mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m3 7 9 6 9-6"
      })),
      phone: /*#__PURE__*/React.createElement("path", {
        d: "M5 4h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z"
      }),
      gh: /*#__PURE__*/React.createElement("path", {
        d: "M9 19c-4 1.5-4-2.5-6-3m12 6v-3.8a3 3 0 0 0-.9-2.5c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12 12 0 0 0-6.4 0C6.6 1.8 5.5 2.1 5.5 2.1A4.6 4.6 0 0 0 5.4 5.6 5 5 0 0 0 4 9.1c0 5 3 6.2 6 6.5a3 3 0 0 0-.9 2.3V21"
      }),
      arrow: /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14M13 6l6 6-6 6"
      })
    };
    return /*#__PURE__*/React.createElement("svg", p, paths[name]);
  }

  /* ---------------------------------------------------------- NAV */
  function Nav() {
    return /*#__PURE__*/React.createElement("header", {
      className: "bv-nav"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#hero",
      className: "bv-logo",
      "aria-label": "\u0411\u0435\u0440\u0432\u0438\u043D\u043E\u0432 \u041C\u0438\u0440\u043E\u043D \u2014 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bv-logo__mark"
    }, "\u041C\u0411")), /*#__PURE__*/React.createElement("nav", {
      className: "bv-nav__links",
      "aria-label": "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F"
    }, NAV.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
      key: h,
      href: h
    }, t))), /*#__PURE__*/React.createElement("div", {
      className: "bv-nav__cta"
    }, /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: "#contacts",
      variant: "primary",
      size: "sm"
    }, "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442")));
  }

  /* ---------------------------------------------------------- HERO */
  function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      id: "hero",
      className: "bv-hero",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      className: "bv-hero__ghost"
    }, "\u041F\u041E\u0420\u0422\u0424\u041E\u041B\u0418\u041E"), /*#__PURE__*/React.createElement("img", {
      className: "bv-hero__photo",
      alt: "\u0411\u0435\u0440\u0432\u0438\u043D\u043E\u0432 \u041C\u0438\u0440\u043E\u043D",
      src: img(520, 660, 'ФОТО МИРОНА')
    }), /*#__PURE__*/React.createElement("div", {
      className: "bv-hero__copy"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-eyebrow"
    }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441\u0430\u0439\u0442\u043E\u0432 \xB7 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447"), /*#__PURE__*/React.createElement("h1", {
      className: "bv-hero__name"
    }, "\u0411\u0435\u0440\u0432\u0438\u043D\u043E\u0432", /*#__PURE__*/React.createElement("br", null), "\u041C\u0438\u0440\u043E\u043D"), /*#__PURE__*/React.createElement("p", {
      className: "bv-hero__sub"
    }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u043E\u0432 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447 \u2014 \u0434\u0438\u0437\u0430\u0439\u043D, \u0432\u0451\u0440\u0441\u0442\u043A\u0430, \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438, \u0437\u0430\u043F\u0443\u0441\u043A."), /*#__PURE__*/React.createElement("div", {
      className: "bv-hero__actions"
    }, /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: "#works",
      variant: "mint",
      size: "lg"
    }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B"), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: "#contacts",
      variant: "ghost",
      size: "lg"
    }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F"))), /*#__PURE__*/React.createElement("a", {
      href: "#about",
      className: "bv-scroll",
      "aria-label": "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u0437"
    }, /*#__PURE__*/React.createElement("span", null, "scroll"), /*#__PURE__*/React.createElement("span", {
      className: "bv-scroll__line"
    })));
  }

  /* ---------------------------------------------------------- ABOUT */
  function About() {
    return /*#__PURE__*/React.createElement("section", {
      id: "about",
      className: "bv-section bv-about",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-about__lead"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-eyebrow"
    }, "\u041E\u0431\u043E \u043C\u043D\u0435"), /*#__PURE__*/React.createElement("h2", {
      className: "bv-h2"
    }, "\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E \u0441\u0430\u0439\u0442\u044B \u0443\u0436\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0435\u0442. \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u044E \u0441\u0443\u0442\u044C \u0438 \u0434\u0443\u0448\u0443 \u0431\u0440\u0435\u043D\u0434\u0430. \u0414\u0435\u043B\u0430\u044E \u043F\u043E\u0434 \u043A\u043B\u044E\u0447 \u2014 \u043E\u0442 \u0438\u0434\u0435\u0438 \u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430."), /*#__PURE__*/React.createElement("div", {
      className: "bv-tags"
    }, ['UX/UI', 'Frontend', 'Анимации', 'SEO'].map(t => /*#__PURE__*/React.createElement(Badge, {
      key: t,
      variant: "neutral"
    }, t)))), /*#__PURE__*/React.createElement(Card, {
      surface: "raised",
      className: "bv-about__stats"
    }, /*#__PURE__*/React.createElement(Stat, {
      value: "6+",
      label: "\u043B\u0435\u0442 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "40",
      label: "\u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0441\u0434\u0430\u043D\u043E"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "38",
      label: "\u0434\u043E\u0432\u043E\u043B\u044C\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432"
    })));
  }

  /* ---------------------------------------------------------- WORKS (bento) */
  function WorkCard({
    w
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      interactive: true,
      className: `bv-work bv-work--${w.span}`,
      surface: w.flagship ? 'card' : 'card',
      featured: w.flagship
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-work__media"
    }, /*#__PURE__*/React.createElement("img", {
      alt: w.title + ' — превью',
      src: img(800, 500, w.title)
    }), /*#__PURE__*/React.createElement("div", {
      className: "bv-work__overlay"
    }, /*#__PURE__*/React.createElement("p", null, w.desc), w.price && /*#__PURE__*/React.createElement("span", {
      className: "bv-work__price"
    }, w.price)), w.flagship && /*#__PURE__*/React.createElement("span", {
      className: "bv-work__badge"
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "mint"
    }, "\u041C\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442"))), /*#__PURE__*/React.createElement("div", {
      className: "bv-work__body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-work__head"
    }, /*#__PURE__*/React.createElement("h3", null, w.title), /*#__PURE__*/React.createElement("span", {
      className: "bv-work__cat"
    }, w.cat)), /*#__PURE__*/React.createElement("p", {
      className: "bv-work__desc"
    }, w.desc), w.tiers && /*#__PURE__*/React.createElement("div", {
      className: "bv-tiers"
    }, w.tiers.map(([n, p]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      className: "bv-tier"
    }, /*#__PURE__*/React.createElement("span", null, n), /*#__PURE__*/React.createElement("span", {
      className: "bv-tier__price"
    }, p)))), /*#__PURE__*/React.createElement("div", {
      className: "bv-work__foot"
    }, w.price && !w.flagship && /*#__PURE__*/React.createElement("span", {
      className: "bv-work__price"
    }, w.price), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: "#",
      target: "_blank",
      rel: "noopener",
      variant: w.flagship ? 'mint' : 'ghost',
      size: "sm"
    }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0430\u0439\u0442"))));
  }
  function Works() {
    return /*#__PURE__*/React.createElement("section", {
      id: "works",
      className: "bv-section",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-section__head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-eyebrow"
    }, "\u0420\u0430\u0431\u043E\u0442\u044B \xB7 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"), /*#__PURE__*/React.createElement("h2", {
      className: "bv-h2 bv-h2--lg"
    }, "\u041C\u043E\u0437\u0430\u0438\u043A\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432")), /*#__PURE__*/React.createElement("div", {
      className: "bv-bento"
    }, WORKS.map(w => /*#__PURE__*/React.createElement(WorkCard, {
      key: w.id,
      w: w
    }))));
  }

  /* ---------------------------------------------------------- PRICING */
  function Pricing() {
    return /*#__PURE__*/React.createElement("section", {
      id: "pricing",
      className: "bv-section",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-section__head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-eyebrow"
    }, "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u043E\u0438\u0442 \u0441\u0430\u0439\u0442"), /*#__PURE__*/React.createElement("h2", {
      className: "bv-h2 bv-h2--lg"
    }, "\u041F\u0430\u043A\u0435\u0442\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438")), /*#__PURE__*/React.createElement("div", {
      className: "bv-prices"
    }, PRICES.map(p => /*#__PURE__*/React.createElement(PriceCard, _extends({
      key: p.name
    }, p)))));
  }

  /* ---------------------------------------------------------- REVIEWS */
  function Reviews() {
    return /*#__PURE__*/React.createElement("section", {
      id: "reviews",
      className: "bv-section",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-section__head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-eyebrow"
    }, "\u041E\u0442\u0437\u044B\u0432\u044B"), /*#__PURE__*/React.createElement("h2", {
      className: "bv-h2 bv-h2--lg"
    }, "\u0427\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u044B")), /*#__PURE__*/React.createElement("div", {
      className: "bv-reviews"
    }, REVIEWS.map((r, i) => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
      key: i
    }, r)))));
  }

  /* ---------------------------------------------------------- CONTACTS */
  function Contacts() {
    const [done, setDone] = React.useState(false);
    const [err, setErr] = React.useState('');
    function submit(e) {
      e.preventDefault();
      const f = new FormData(e.target);
      if (!f.get('name') || !f.get('contact') || !f.get('message')) {
        setErr('Заполните все поля, пожалуйста.');
        return;
      }
      setErr('');
      // TODO: подключите реальную отправку (fetch на ваш бэкенд / Formspree / Telegram-бот)
      setDone(true);
    }
    return /*#__PURE__*/React.createElement("section", {
      id: "contacts",
      className: "bv-section bv-contacts",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-contacts__left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-eyebrow"
    }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("h2", {
      className: "bv-h2 bv-h2--lg"
    }, "\u041E\u0431\u0441\u0443\u0434\u0438\u043C \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442?"), /*#__PURE__*/React.createElement("p", {
      className: "bv-contacts__sub"
    }, "\u041E\u0442\u0432\u0435\u0447\u0430\u044E \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043D\u044F. \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0438 \u0440\u0430\u0441\u0447\u0451\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438."), /*#__PURE__*/React.createElement("ul", {
      className: "bv-links"
    }, CONTACTS.map(c => /*#__PURE__*/React.createElement("li", {
      key: c.label
    }, /*#__PURE__*/React.createElement("a", {
      href: c.href
    }, /*#__PURE__*/React.createElement("span", {
      className: "bv-links__icon"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon
    })), /*#__PURE__*/React.createElement("span", {
      className: "bv-links__text"
    }, /*#__PURE__*/React.createElement("b", null, c.label), /*#__PURE__*/React.createElement("em", null, c.value)), /*#__PURE__*/React.createElement("span", {
      className: "bv-links__arrow"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow",
      size: 18
    }))))))), /*#__PURE__*/React.createElement(Card, {
      surface: "card",
      className: "bv-form"
    }, done ? /*#__PURE__*/React.createElement("div", {
      className: "bv-form__done"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bv-form__check"
    }, "\u2713"), /*#__PURE__*/React.createElement("p", null, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u042F \u0441\u0432\u044F\u0436\u0443\u0441\u044C \u0441 \u0432\u0430\u043C\u0438.")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      noValidate: true
    }, /*#__PURE__*/React.createElement(Input, {
      label: "\u0418\u043C\u044F",
      name: "name",
      placeholder: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442 (\u043F\u043E\u0447\u0442\u0430 / \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C)",
      name: "contact",
      placeholder: "hello@mail.ru \u0438\u043B\u0438 @username"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
      name: "message",
      as: "textarea",
      rows: 4,
      placeholder: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435\u2026"
    }), err && /*#__PURE__*/React.createElement("p", {
      className: "bv-form__err",
      role: "alert"
    }, err), /*#__PURE__*/React.createElement(Button, {
      variant: "mint",
      type: "submit",
      style: {
        width: '100%'
      }
    }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))));
  }

  /* ---------------------------------------------------------- FOOTER */
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", {
      className: "bv-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-footer__top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bv-footer__brand"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bv-logo__mark"
    }, "\u041C\u0411"), /*#__PURE__*/React.createElement("p", null, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u043E\u0432 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447.", /*#__PURE__*/React.createElement("br", null), "\u0414\u0438\u0437\u0430\u0439\u043D \xB7 \u0432\u0451\u0440\u0441\u0442\u043A\u0430 \xB7 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 \xB7 \u0437\u0430\u043F\u0443\u0441\u043A.")), /*#__PURE__*/React.createElement("nav", {
      className: "bv-footer__nav",
      "aria-label": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0432 \u043F\u043E\u0434\u0432\u0430\u043B\u0435"
    }, NAV.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
      key: h,
      href: h
    }, t))), /*#__PURE__*/React.createElement("div", {
      className: "bv-footer__social"
    }, [['tg', '#'], ['mail', 'mailto:hello@bervinov.dev'], ['gh', '#']].map(([n, h]) => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: h,
      "aria-label": n
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n,
      size: 18
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "bv-footer__bottom"
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u0411\u0435\u0440\u0432\u0438\u043D\u043E\u0432 \u041C\u0438\u0440\u043E\u043D. \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u043E\u0432 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447."), /*#__PURE__*/React.createElement("span", null, "\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u0432 \u0442\u0451\u043C\u043D\u043E\u0439 \u043D\u0435\u043E\u043D\u043E\u0432\u043E\u0439 \u0441\u0442\u0438\u043B\u0438\u0441\u0442\u0438\u043A\u0435.")));
  }
  function Portfolio() {
    React.useEffect(() => {
      const els = Array.from(document.querySelectorAll('[data-reveal]'));
      const revealAll = () => els.forEach(el => el.classList.add('is-in'));
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce || typeof IntersectionObserver === 'undefined') {
        revealAll();
        return;
      }

      // Hero is above the fold — reveal immediately so the page is never blank.
      if (els[0]) els[0].classList.add('is-in');
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        });
      }, {
        threshold: 0.12
      });
      els.forEach(el => io.observe(el));

      // Safety net: if IO never fires (background tab, thumbnail render, export),
      // force-reveal everything so content can't stay stuck hidden.
      const fallback = setTimeout(revealAll, 600);
      return () => {
        io.disconnect();
        clearTimeout(fallback);
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      className: "bv-root"
    }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Works, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(Contacts, null)), /*#__PURE__*/React.createElement(Footer, null));
  }
  window.Portfolio = Portfolio;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Portfolio.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

})();
