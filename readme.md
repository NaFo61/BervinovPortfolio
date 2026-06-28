# Bervinov Design System
> Midnight mission control with phosphor-green accents

A dark-minimalist design system for **Бервинов Мирон**, a freelance web developer ("разработка сайтов под ключ"). The visual language is modeled on Harness.io / Gitness — a *nocturnal command deck*: near-black canvas, hairline-defined surfaces, oversized wide-tracked display type, and a single rationed phosphor-mint accent that glows like a monitor.

There is no upstream codebase or Figma — the system was authored directly from the brand brief (Harness-style reference + a portfolio spec). If a real product codebase appears later, reconcile tokens against it.

---

## CONTENT FUNDAMENTALS

The voice is **first-person, confident, quietly premium** — a craftsman who undersells loudly. Russian throughout, informal-professional ("я", addressing the client as "вы/ваш").

- **Tone:** calm authority, short declaratives. "Разрабатываю сайты под ключ — от идеи до запуска." No hype words, no exclamation stacking. One idea per line.
- **Casing:** display headings in Russian sentence/word case with wide tracking; eyebrows and badges in UPPERCASE with heavy letter-spacing (e.g. `РАБОТЫ · ИЗБРАННОЕ`).
- **Numbers as proof:** stats and prices are the loudest content, rendered in mint ("6+ лет", "от 120 000 ₽"). Prices always "от {N} ₽".
- **Emoji:** none. The accent and type carry all the energy.
- **Microcopy examples:** CTA "Смотреть работы", "Открыть сайт", "Отправить заявку"; flagship badge "Мой проект"; popular tier "Популярный"; form success "Спасибо! Я свяжусь с вами."
- **Density:** lots of air. Each section leads with an eyebrow + a single big statement, then content. Never wall-of-text.

---

## VISUAL FOUNDATIONS

**Colors** — One canvas, stacked surfaces, one accent.
- Surfaces step up by luminance: Void `#070707` → Carbon `#0d0e12` → Obsidian `#141418` → Iron `#2e3038`. Never a light section — the whole page lives in the dark spectrum.
- Text: white `#ffffff` (primary) → ash `#c8cad0` → graphite `#aeaeb7` → cinder `#60606c` (muted/placeholder).
- **Accent is rationed:** phosphor mint `#70dcd3` — ONE per viewport, for featured cards, prices, active states, and the single neon CTA. Signal blue `#0092e4` for links/focus; mint and blue never co-occur on one surface. No gradient rainbows.

**Type** — engineered, not editorial.
- Display: **Space Grotesk** (substitute for Calsans), weight **300**, sizes up to 88–120px, **positive tracking +0.056em** — letters spread like instrument-panel labels. Never apply negative tracking to display type.
- Body/UI: **Geist**, weight 300–500, 16px/1.5 body, narrow confident range (14–18px). Weight 500 only for emphasis.
- The hero carries a giant semi-transparent "ПОРТФОЛИО" wordmark with huge letter-spacing, glowing faintly mint behind the photo.

**Spacing & layout** — 8px base, comfortable. Page max-width 1200px (hero up to ~1320). Section gaps 64–120px. Card padding 24px. Bento mosaic for works (2–3 cols → 1 on mobile).

**Borders & elevation** — the system-defining move: **elevation is a light hairline border, NOT a shadow.** Cards use `#d9dae5` (or the softer `rgba(255,255,255,0.08)`) light edges on dark surfaces. Drop shadows are essentially never used; the only inset shadow is the embossed white pill button.

**Corner radii** — inputs 5px (the one sharp corner), nested panels 16px, cards 20px, feature/bento 32px, all interactive controls + badges full pill 800px.

**Backgrounds** — flat near-black; no textures or photographic backgrounds. The only "imagery" is the giant ghost wordmark and the mint glow halos. Project previews are dark placeholder screenshots.

**Glow** — mint glow (`0 0 28px` mint, plus a 1px mint ring) is the one decorative light effect, reserved for featured cards, the logo mark, focused contact links, and the mint CTA.

**Animation** — restrained and smooth. Easing `cubic-bezier(0.22,1,0.36,1)`. Sections fade + rise 28px on scroll (IntersectionObserver). Cards lift 4px + gain mint glow on hover; work previews zoom 1.06 and reveal an overlay (250–420ms). One gentle looping scroll-line in the hero. Everything respects `prefers-reduced-motion`.

**Hover/press states** — hover = brighten text to white, mint border + glow, slight translate. Focus on inputs = border swaps to Deep Signal blue (a color change, not a glow ring). Buttons keep their fill; ghost/mint reveal via outline.

**Buttons** — the only filled button is **white** (`#fff` fill, `#070707` text, 800px pill, embossed inset). Everything else is ghost (white outline) or mint (neon outline + glow). Never fill a button with color other than white.

---

## ICONOGRAPHY

The brand uses **minimal line glyphs** — thin single-stroke SVG icons (`stroke: currentColor`, ~1.6 stroke-width, round caps), inherited from the Harness/devtools aesthetic. No icon font, no filled icons, no emoji, no Unicode symbol icons (except a single mint `★` for ratings and `→` arrows on links).

This system ships a tiny inline glyph set inside the portfolio kit (`Portfolio.jsx` → `Icon`): `tg`, `mail`, `phone`, `gh`, `arrow`. They tint graphite at rest and phosphor-mint on hover. For a broader set, substitute **Lucide** (same 1.5–2px stroke, round-cap style) via CDN — it matches one-to-one. No raster icon assets exist; do not hand-draw new SVG illustrations.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry (import this). `@import` lines only.
- `tokens/` — `fonts.css` (Google Fonts: Geist + Space Grotesk), `colors.css`, `typography.css`, `spacing.css`.
- `readme.md` — this file. `SKILL.md` — Agent-Skill wrapper.

**Foundations** (Design System tab — `guidelines/`)
Colors: Surfaces · Accents · Text & Hairlines. Type: Display · Body · Eyebrow+Heading. Spacing: Scale · Radii & Elevation. Brand: Logo МБ.

**Components** (`window.DesignSystem_8987fb`)
- `buttons/` — **Button** (primary/ghost/mint/quiet), **Badge** (mint/success/info/neutral).
- `surfaces/` — **Card** (featured/interactive), **Stat** (neon metric).
- `forms/` — **Input** (input/textarea, blue focus).
- `content/` — **Avatar**, **Rating** (mint stars), **TestimonialCard**, **PriceCard**.

**UI Kits**
- `ui_kits/portfolio/` — full Bervinov single-page портфолио (see its README for TODO plug-in points).

> No font binaries are bundled — Geist and Space Grotesk load from Google Fonts (the only permitted external dependency). **Calsans is substituted by Space Grotesk** (closest wide-tracked geometric sans). If you have Calsans/Geist files, drop them in and add `@font-face` rules.
