---
name: bervinov-design
description: Use this skill to generate well-branded interfaces and assets for the Bervinov design system (dark "midnight mission control" aesthetic with a phosphor-mint accent), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, components, and a full portfolio UI kit.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`styles.css` + `tokens/`, `guidelines/`, `components/`, `ui_kits/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view — link `styles.css`, load `_ds_bundle.js`, and read components from `window.DesignSystem_8987fb`. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

Core rules to honor: dark surfaces only (Void `#070707` → Carbon → Obsidian), elevation via light hairline borders not shadows, one rationed phosphor-mint `#70dcd3` accent per viewport, Space Grotesk display with wide +0.056em tracking, Geist body, full-pill (800px) controls, white-only filled buttons, minimal line-glyph icons, no emoji.

If the user invokes this skill without other guidance, ask what they want to build, ask a few questions, and act as an expert designer who outputs HTML artifacts or production code, depending on the need.
