# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev           # Vite dev server
npm run build         # tsc -b + production build to dist/
npm run preview       # serve the production build locally
npm run typecheck     # tsc -b --noEmit
npm run lint          # ESLint (lint:fix to auto-fix)
npm run format:check  # Prettier check (format to write)
```

There is no test suite yet. Node 20 is pinned via `.nvmrc` / `engines`.

A Husky pre-commit hook runs lint-staged (ESLint --fix + Prettier on staged files), so commits may rewrite staged files. CI (`.github/workflows/ci.yml`) runs lint, format:check, typecheck, and build on PRs; `deploy.yml` runs the same gates on push to `main`, then publishes `dist/` to GitHub Pages (user site, served at the domain root — `base: '/'` in vite.config.ts is correct).

## Architecture

Single-page portfolio: Vite + React 19 + TypeScript (strict). No router, no state library — `App.tsx` composes four sections: `Header`, `Hero`, `Projects`, `Footer`.

**Content lives in `src/data/`** (`site.ts` for contact/copy, `projects.ts` for the work list, typed by `src/types.ts`). Components render from these; don't hardcode content in components.

**Styling:** global tokens/reset/theme in `src/index.css`; one CSS Module per component. No CSS framework. Theme colors are defined once as CSS custom properties keyed off `html[data-theme]` — never duplicate color values in JS. When JS needs to drive a visual (e.g. the header's scroll-linked glass), it sets numeric CSS variables (`--nav-alpha`, `--nav-blur`) and CSS composes them with the themed tokens.

**Theme system:** an inline script in `index.html` applies the saved/system theme to `html[data-theme]` before first paint (no flash). `src/hooks/useTheme.ts` owns it afterward: persists the choice (`system`/`light`/`dark`) to localStorage under the key `theme` and follows OS changes while on `system`. The inline script and the hook must stay in sync on the storage key and resolution logic.

**Cross-component contract:** `App.tsx` creates `lastWorkRef`, attached by `Projects` to its final row and read by `Footer` to compute where the motorcycle ride begins. If you reorder or rework `Projects`, keep this ref on the last item.

**Footer bike animation — two modes, both intentional (do not "simplify" to one):**

- `scrolldriven` — when there is scroll runway after the last work item, the bike position maps directly to scroll progress ("SCROLL to hit the gas").
- `autoplay` — on tall viewports/short pages with no runway, the ride tween plays once when the footer enters view ("ENJOY the ride").
  The mode is re-chosen on resize via `hasRunway()`.

**Animation conventions:** scroll/pointer handlers batch DOM writes through `requestAnimationFrame` (cancelled on cleanup). Scroll-reveal uses the `useInView` hook plus the global `.reveal` / `.is-visible` classes. The Hero neon flicker is held paused until fonts are loaded and two frames have painted (`useReadyToAnimate`) so the flicker isn't eaten by startup jank. All motion respects `prefers-reduced-motion`.

## Design source

The site implements a design export kept locally at `design/Max Portfolio.html` (git-ignored because it's ~23 MB). It's the source of truth for content, layout, and styling decisions.
