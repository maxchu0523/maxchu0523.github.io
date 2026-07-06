# maxchu0523.github.io

Personal portfolio site for Max Chu. Complete rebuild (v2).

## Stack

- **[Vite](https://vitejs.dev/)** + **[React 19](https://react.dev/)** + **TypeScript**
- **Plain CSS** — a global stylesheet (`src/index.css`) for tokens/resets and CSS Modules per component. No CSS framework.
- **ESLint 9** (flat config) + **Prettier**
- **Husky** + **lint-staged** — auto-lint & format staged files on commit
- **GitHub Actions** — builds and deploys to GitHub Pages on push to `main`

## Development

```bash
npm install      # also installs Husky git hooks (via "prepare")
npm run dev      # start the dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
npm run lint     # ESLint
npm run format   # Prettier write
```

## Committing

A pre-commit hook runs `lint-staged`, which auto-fixes ESLint issues and formats
staged files with Prettier before the commit is created.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.

> **One-time setup:** In the GitHub repo, go to **Settings → Pages** and set
> **Source = "GitHub Actions"** (previously this site deployed from the `gh-pages`
> branch).

## Design

The site implements the `Max Portfolio.html` design (Claude Design). The design
file is kept locally in `design/` (a large export, git-ignored) and is the
source of truth for content, layout, and styling.

## Archive

The previous version of the site is kept in `Archive/` for reference and is not
part of the build.
