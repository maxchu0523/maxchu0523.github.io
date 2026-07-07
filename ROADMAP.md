# Roadmap — future improvements

Prioritized backlog of quality, reliability, and maintainability improvements.
Everything here is optional; the site is healthy (CI-gated, tested, deployed via
Actions). Items are grounded in the July 2026 code review — see CLAUDE.md for
current architecture and conventions.

## High value

- **Browser-level smoke tests (Playwright).** The unit suite can't observe the
  behaviors that matter most here: theme choice surviving a reload with no
  flash, the bike picking `scrolldriven` vs `autoplay` per viewport size, the
  neon flicker actually playing, keyboard-only theme switching. One Playwright
  spec with 2–3 viewports, run in CI, would lock these in end-to-end.
- **Social/OG meta tags.** `index.html` has a meta description but no Open
  Graph / Twitter card tags, so link shares (LinkedIn especially) render bare.
  Add `og:title/description/image` + `twitter:card` with a small static share
  image in `public/`.
- **Image optimization.** `src/assets` JPGs are 50–133 KB each and
  `bike.png` is 133 KB. Convert previews to WebP (or AVIF with fallback), and
  set explicit `width`/`height` on `<img>` elements to avoid layout shift.
- **Automated dependency updates.** Enable Dependabot (or Renovate) for npm +
  GitHub Actions now that the archived app's alert noise is gone. CI gates make
  auto-merge of patch updates safe.

## Medium value

- **Self-host the fonts.** Archivo + IBM Plex Mono load from Google Fonts — a
  third-party runtime dependency and an extra connection on first paint.
  Self-hosting (e.g. via `@fontsource`) removes it and makes
  `document.fonts.ready` (which gates the neon flicker) independent of Google's
  CDN.
- **Type-checked linting.** Switch `eslint.config.js` from
  `tseslint.configs.recommended` to `recommendedTypeChecked`. Small codebase,
  cheap to enable, catches a class of bugs plain lint can't.
- **Extract and unit-test the Footer ride math.** `rideBounds`/`scrollProgress`
  /`hasRunway` in `Footer.tsx` are pure given (scrollHeight, innerHeight,
  scrollY, lastItem bottom) but currently inlined in the effect and untestable.
  Extracting them to a small module would let the two-mode selection logic
  (intentional — see CLAUDE.md) be pinned by tests.
- **Accessibility check in CI.** Add an axe pass (vitest-axe against rendered
  App, or Playwright + @axe-core/playwright if the Playwright item lands).

## Low priority / nice to have

- **Lighthouse CI budget** to catch perf/a11y/SEO regressions on PRs.
- **`robots.txt` + `sitemap.xml`** in `public/` for SEO completeness.
- **PR deploy previews.** GitHub Pages has no native PR previews; if wanted,
  upload the built `dist/` as a PR artifact, or deploy previews to a second
  branch/service.
- **Durable design reference.** The design source of truth
  (`design/Max Portfolio.html`, 23 MB) is git-ignored and exists only on one
  machine. Back it up (cloud drive) or distill the key tokens/layout decisions
  into a small committed doc so the reference survives the laptop.
- **README refresh.** The scripts list predates the test setup — add
  `npm test` / `npm run typecheck` to the development section.
