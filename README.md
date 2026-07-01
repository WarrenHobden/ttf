# TTF Prototype

A shareable web prototype built with plain HTML, CSS, and JavaScript — **no build step**.

## Run locally

No tooling required. Either:

- Open `index.html` directly in a browser, **or**
- Serve the folder (recommended, so ES module imports work cleanly):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
.
├── index.html        # Page markup / entry point
├── css/
│   └── styles.css    # Styles (design tokens in :root)
├── js/
│   └── main.js       # Interactivity (ES module)
├── assets/           # Images, icons, fonts
│   └── favicon.svg
├── vercel.json       # Vercel static-host config
├── netlify.toml      # Netlify static-host config
└── .gitignore
```

## Deploy (static host)

The repo is preconfigured for both Vercel and Netlify. Pick one:

**Vercel**
1. Import the `WarrenHobden/ttf` repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Other**. No build command, output dir `.`.
3. Every push to `main` auto-deploys to a live URL.

**Netlify**
1. Import the repo at [app.netlify.com/start](https://app.netlify.com/start).
2. `netlify.toml` already sets publish dir to `.` with no build.
3. Every push auto-deploys.

## Develop

- Add markup in `index.html`.
- Restyle via the design tokens at the top of `css/styles.css`.
- Add logic in `js/main.js`, or create new modules under `js/` and `import` them.
