# Repository Guidelines

## Project Structure & Module Organization

This repository is a single-page wedding invitation built with React 19, TypeScript, and Vite. Application code lives in `src/`: `main.tsx` mounts the app, `App.tsx` contains the current page composition, `App.css` holds component styles, and `index.css` defines global styles and design tokens. Store imported images and other bundled media in `src/assets/`; place files that must retain a fixed URL, such as icons or favicons, in `public/`. Build output is generated in `dist/` and must not be edited or committed.

As the invitation grows, extract substantial sections into `src/components/` (for example, `HeroSection.tsx` or `EventDetails.tsx`) and keep related styles close to their component.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies from `package-lock.json`.
- `npm run dev` starts the Vite development server with hot reload.
- `npm run build` runs TypeScript project checks and creates a production build in `dist/`.
- `npm run lint` checks React and TypeScript code with Oxlint.
- `npm run preview` serves the production build locally for final review.

Before opening a pull request, run `npm run lint && npm run build`.

## Coding Style & Naming Conventions

Use TypeScript and functional React components. Follow the existing style: two-space indentation, single quotes, no semicolons, and trailing commas where supported. Name components and their files in PascalCase, hooks with a `use` prefix, variables/functions in camelCase, and CSS classes in kebab-case. Prefer semantic HTML, descriptive image alt text, and CSS custom properties for reusable colors, type, and spacing. Keep the invitation mobile-first and verify layouts at narrow and desktop widths.

## Testing Guidelines

No automated test framework or coverage threshold is configured yet. Treat `npm run lint` and `npm run build` as required checks. Manually verify navigation, links, responsive layout, typography, image loading, and reduced-motion/accessibility behavior. If tests are introduced, use Vitest with React Testing Library and name files `*.test.tsx` beside the component under test.

## Commit & Pull Request Guidelines

Git history is not available in this workspace. Use concise imperative commits, preferably Conventional Commit style, such as `feat: add ceremony countdown` or `fix: prevent mobile image overflow`. Pull requests should explain the user-visible change, include validation steps, link any issue, and attach before/after screenshots or a short recording for visual or responsive changes. Keep generated files and unrelated formatting out of the diff.
