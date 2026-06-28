# Bervinov Portfolio — UI Kit

A full single-page **портфолио** for Бервинов Мирон (разработчик сайтов под ключ), built entirely on this design system's primitives. It demonstrates the "midnight mission control" aesthetic end-to-end.

## Files
- `index.html` — the runnable page. Links `../../styles.css`, loads `_ds_bundle.js`, mounts `Portfolio`.
- `Portfolio.jsx` — the page composition (Nav, Hero, About, Works bento, Pricing, Reviews, Contacts, Footer). Loaded as `text/babel`; exposes `window.Portfolio`. Not exported, so it stays out of the component namespace.

## Sections
1. **Hero** — giant ghost "ПОРТФОЛИО" wordmark behind a portrait placeholder; name, subtitle, mint CTA, scroll indicator.
2. **Обо мне** — bold lead statement, skill tags (Badge), neon stat row (Stat).
3. **Работы** — bento mosaic (6 projects). BervinovAcademy is the flagship (2×2, mint glow, "Мой проект" badge, 3 tiers). Hover lifts the card, zooms the preview, reveals the overlay + price.
4. **Цены** — 3 PriceCards; middle tier carries the "Популярный" badge.
5. **Отзывы** — 4 TestimonialCards (mint quote + stars).
6. **Контакты** — interactive contact links + a validating form (JS stub).
7. **Footer** — МБ monogram, nav, social, copyright.

## Components used
Button · Badge · Card · Stat · Input · Avatar · Rating · TestimonialCard · PriceCard — all from `window.DesignSystem_8987fb`.

## Where the owner plugs in real content
Search `Portfolio.jsx` / `index.html` for `TODO:` comments:
- Hero portrait `<img>` → real photo of Мирон.
- Each work card preview `<img>` → real project screenshot.
- Each "Открыть сайт" button `href="#"` → real project URL (already `target="_blank"`).
- Contact values (Telegram, email, phone, GitHub/Behance).
- Contact form `submit()` → wire real sending (backend / Formspree / Telegram bot).

All images are `placehold.co` dark placeholders.
