# Timothy Onigbinde, Portfolio

Personal portfolio of Timothy Onigbinde, a backend and AI engineer building reliable APIs, databases and LLM-powered systems.

**Live:** https://dproc-debug.github.io/timothyonigbinde/

## Tech

- Plain HTML, CSS and JavaScript with no framework and no build step. It deploys as static files.
- CSS Grid/Flexbox layout and design tokens in CSS custom properties.
- Animations use IntersectionObserver and CSS transitions (transform/opacity only) and respect `prefers-reduced-motion`.
- Contact form posts to [Formspree](https://formspree.io) via `fetch`.
- Fonts: Space Grotesk, Inter and JetBrains Mono (Google Fonts). Tech logos from [Devicon](https://devicon.dev).

## Editing content

Experience, projects, AI work, earlier work and skills are data arrays at the top of `script.js`.
Add an object to add an entry.

## Run locally

```sh
python -m http.server 8000
# or: npx serve
```
