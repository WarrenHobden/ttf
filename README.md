# Talk to FRANK — Prototype

A shareable review prototype for **Talk to FRANK**, built with plain HTML, CSS, and
JavaScript — **no build step**. It consolidates several page designs into one master build.

## Pages

Client-side routing shows one page at a time. A review-only **prototype bar** (fixed to the top)
lets reviewers jump between them; the real in-page links also navigate. The four pages are:

1. **Homepage** — hybrid search + browse, drug chips, prominent emergency callout.
2. **Drug page** — Tier‑1 redesign (Ketamine instance): at‑a‑glance, visible safety panel,
   mixing module, jump links, and accordions for secondary content.
3. **Emergency** — stress‑state redesign: critical 999 banner, what‑to‑say script,
   while‑you‑wait steps, scenario cards, recovery position, and aftercare.
4. **Service unavailable** — fallback page with 999 guidance and helpline/text contacts.

Deep links work: e.g. `#emergency` opens the emergency page directly.

## Run locally

No tooling required. Serve the folder (recommended, so the CSS/JS/font paths resolve):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
.
├── index.html          # Markup for all pages + prototype bar
├── css/
│   └── styles.css      # FRANK design system + @font-face
├── js/
│   └── main.js         # Page routing, menus, accordions, scenario cards
├── assets/
│   ├── logo-frank--alt.svg   # FRANK wordmark (used in every header)
│   ├── favicon.svg
│   └── fonts/          # Self-hosted TTFs + licenses (see Fonts below)
├── prototype/
│   └── designs/        # Design references (input; the source of this build)
├── vercel.json         # Vercel static-host config
└── netlify.toml        # Netlify static-host config
```

## Fonts

The prototype self-hosts the Talk to FRANK typefaces — **no CDN dependency**:

- **Archivo** (headings) — `assets/fonts/Archivo-Variable.ttf`, licensed under the SIL Open Font
  License 1.1 (`Archivo-OFL.txt`).
- **Roboto** (body) — `assets/fonts/Roboto-Variable.ttf`, licensed under the SIL Open Font
  License 1.1 (`Roboto-OFL.txt`).

Both are open-source variable fonts pulled from the canonical Google Fonts sources. The
`@font-face` rules and `--font-heading` / `--font-body` tokens live at the top of `css/styles.css`.
License files are kept alongside the fonts as required.

## Deploy (static host)

Preconfigured for both — pick one; every push to `main` auto-deploys:

- **Vercel** — import `WarrenHobden/ttf` at [vercel.com/new](https://vercel.com/new), preset
  "Other", no build command, output dir `.`.
- **Netlify** — import at [app.netlify.com/start](https://app.netlify.com/start); `netlify.toml`
  publishes `.` with no build.

## Develop

- Edit page markup in `index.html`; refresh the browser (no rebuild).
- Restyle via the design tokens in `:root` at the top of `css/styles.css`.
- Add behaviour in `js/main.js`.
- New designs go in `prototype/designs/` — see `prototype/README.md` for the workflow.
