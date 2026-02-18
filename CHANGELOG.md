# Frontend Modernization Changelog

## Tailwind CSS Migration + Dark Mode + Modern UI/UX

### Phase 1: Tooling Setup

- Installed `tailwindcss@3`, `postcss`, `autoprefixer` as dev dependencies
- Created `tailwind.config.js` with custom colors (primary, secondary, dark-surface, dark-card), `float` and `pulse-ring` keyframes, and `darkMode: 'class'`
- Created `postcss.config.js` and `config-overrides.js`
- Switched `package.json` scripts from `react-scripts` to `react-app-rewired`
- Removed `sass` dependency

### Phase 2: Foundation Files

- **`src/index.css`** — Replaced with `@tailwind` directives and `@layer components` aliases for `.app__whitebg`, `.app__primarybg`, `.app__flex`, `.head-text`, `.p-text`, `.bold-text` (all with dark mode variants)
- **`src/index.js`** — Upgraded from `ReactDOM.render` to React 18 `createRoot`
- **`src/App.js`** — Added dark mode state with `useState` + `localStorage` + `prefers-color-scheme` detection; passes `isDark`/`toggleDark` to Navbar
- **`src/wrapper/AppWrap.js`** — Replaced SCSS layout classes with Tailwind utilities
- **`src/wrapper/MotionWrap.js`** — Enhanced animation with `initial`, `viewport: { once: true }`, and Apple ease-out-expo curve

### Phase 3: Component Modernization

#### Navbar (`src/components/Navbar/Navbar.jsx`)
- Glassmorphism bar: `bg-white/10 dark:bg-slate-900/60 backdrop-blur-md`
- Dark mode toggle button (sun/moon icon)
- Resume link as gradient pill button
- Mobile slide-in panel with stagger animation on links
- Unified `md:` (768px) breakpoint for desktop/mobile switch

#### NavigationDots (`src/components/NavigationDots.jsx`)
- Active dot: `bg-secondary scale-125 shadow-lg shadow-secondary/50`
- Responsive: `hidden sm:flex`

#### SocialMedia (`src/components/SocialMedia.jsx`)
- Hover effects: `hover:bg-secondary hover:text-white hover:scale-110` with ring borders
- Responsive: `hidden sm:flex`

#### Header (`src/container/Header/Header.jsx`)
- Gradient mesh background: `bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50` (with dark variant)
- Ambient blur blob behind content
- Glassmorphism greeting badge with gradient name text (`bg-clip-text text-transparent`)
- Stagger-animated role tag pills
- Floating profile image animation (`animate-float`)
- Pulsing tech circles with ring borders and shadows

#### About (`src/container/About/About.jsx`)
- Cards with gradient bottom border and `hover:-translate-y-2 hover:shadow-2xl`
- Image `group-hover:scale-105` zoom effect

#### Work (`src/container/Work/Work.jsx`)
- Filter pills with gradient active indicator
- Card hover: `hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-secondary/30`
- Hover overlay: `backdrop-blur-sm bg-secondary/80`
- Tag as gradient pill

#### Skills (`src/container/Skills/Skills.jsx`)
- Circular skill icons with `hover:scale-110` and colored shadows
- Experience timeline with year nodes (`rounded-full bg-secondary`) and work cards

#### Testimonials (`src/container/Testimonials/Testimonials.jsx`)
- `AnimatePresence` with `key={currentIndex}` for slide transitions
- Decorative quote mark: `text-8xl text-secondary/10`
- Avatar with `ring-4 ring-secondary/20`
- Brand logos: `grayscale hover:grayscale-0` transition

#### Footer (`src/container/Footer/Footer.jsx`)
- Contact cards with gradient left border and icon-accent hover lift
- Form inputs with `focus-within:ring-2 focus-within:ring-secondary`
- Submit button with gradient background and loading spinner animation

### Phase 4: Dark Mode

- All `text-black-base` elements get `dark:text-white` / `dark:text-slate-200`
- All `bg-white` elements get `dark:bg-dark-card`
- All borders and shadows include dark variants
- Toggle persists via `localStorage`

### Phase 5: Bug Fixes

| Bug | Fix |
|---|---|
| `target="_black"` in Navbar | Changed to `target="_blank"` |
| `console.log(index)` in Testimonials | Removed |
| `ReactDOM.render` in index.js | Upgraded to `createRoot` |
| Nav 500px-900px breakpoint gap | Unified to `md:` (768px) breakpoint |
| react-tooltip v4/v5 API mismatch in Skills | Switched to v5 `data-tooltip-id` / `data-tooltip-content` |

### Phase 6: Cleanup

- Deleted all 8 `.scss` files:
  - `src/App.scss`
  - `src/components/Navbar/Navbar.scss`
  - `src/container/Header/Header.scss`
  - `src/container/About/About.scss`
  - `src/container/Work/Work.scss`
  - `src/container/Skills/Skills.scss`
  - `src/container/Testimonials/Testimonials.scss`
  - `src/container/Footer/Footer.scss`
- Removed `sass` from dependencies
- Verified `npm run build` passes with no errors
