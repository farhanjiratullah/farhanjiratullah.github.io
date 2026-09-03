# Farhan Jiratullah — Portfolio

Personal portfolio site. **Vue 3 (Options API) + Vite + Tailwind CSS.**

## Requirements

- Node.js 18+ (tested on 22)

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Project structure

```
index.html                     Vite entry — <head> meta/fonts + <div id="app">
tailwind.config.js             design tokens (colours, spacing, fonts)
postcss.config.js              Tailwind + Autoprefixer
vite.config.js                 Vite + @vitejs/plugin-vue
src/
  main.js                      createApp(App).mount('#app')
  style.css                    Tailwind directives + global CSS (reveal, transitions, keyframes)
  App.vue                      the whole page as one Options API SFC
  components/icons/            one SFC per Lucide-style icon (IconGithub.vue, …)
```

## Notes

- **Dark mode** is class-based (`darkMode: 'class'`). `App.vue` toggles `.dark` on
  `<html>` and remembers the choice in `localStorage`; it falls back to the OS
  `prefers-color-scheme`.
- The **contact form** `submitForm()` is a simulated send (`setTimeout`). Wire it to a
  real endpoint or mail service where marked.
- Placeholder blocks (striped "profile portrait" / screenshot panels) are intentional —
  drop in real images when available.
- `App.vue` is deliberately kept as a single component to mirror the original. Splitting
  it into section components (`TheHeader.vue`, `HeroSection.vue`, …) is a natural next
  step.
