# Talk to FRANK — Prototype

## Project overview

A shareable **review prototype** for Talk to FRANK, built as plain HTML/CSS/JS with **zero build step**.

- **`frank-prototype.html`** — the master build. Four pages reached by client-side hash routing: `#home`, `#drug`, `#emergency`, `#unavailable`.
- **`index.html`** — reviewer landing page, links into the master build.
- **`css/styles.css`** — the FRANK design system (`:root` tokens + all component styles + `@font-face`).
- **`js/main.js`** — page routing, mobile menu, accordions, scenario-card disclosures, jump navigation.
- **`assets/`** — logo, favicon, self-hosted Roboto + Archivo variable fonts (OFL-1.1).
- **`prototype/designs/`** — read-only design source files (patterns reference + original page designs). Treat as inputs, not the live build.

## Dev commands

No install, no build. Serve the repo root over HTTP:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/frank-prototype.html>. Deploys automatically on push to `main` via `vercel.json` / `netlify.toml`.

## Design system rules

**Always use the `:root` tokens in `css/styles.css` — never hard-code colours, spacing, or widths.**

- **Colour palette:** `--frank-navy` (chrome/headings), `--frank-teal` (secondary accents), `--frank-blue` (in-content links), `--frank-pink` (CTAs/focus/borders), `--frank-pink-display` (large hero fill only), `--frank-pink-light` (soft callout tint). Semantic: `--frank-emergency`, `--frank-emergency-dark`, `--frank-emergency-bg`, `--frank-warning-bg`, `--frank-success`, `--frank-success-bg`. Neutrals: `--frank-white`, `--frank-grey-100/-200/-300/-700/-900`.
- **Spacing:** 8px base scale — `--space-xs` (4) `-sm` (8) `-md` (16) `-lg` (24) `-xl` (32) `-2xl` (48) `-3xl` (64) `-4xl` (96). Build all padding/margins from these.
- **Widths:** `--max-width` (1200), `--content-width` (960), `--reading-width` (820).
- **Fonts:** `--font-body` (Roboto), `--font-heading` (Archivo).

**CTA-contrast lesson (learned):** when a pink CTA is an `<a>` nested inside a container that recolours anchors (e.g. `.frank-footer a { color: var(--frank-navy) }`), the container rule can out-specify the button's own `color`, rendering the label dark on magenta. Qualify the CTA selector so its white wins (e.g. `.frank-footer a.frank-footer-phone`) **and** set the SVG colour explicitly, since the phone icon uses `fill="currentColor"`.

---

# Layout & Alignment Principles
More Days Studio — evidence-led design standards
Version 1.0 · derived from Nielsen Norman Group research

## Purpose
A shared set of layout and alignment rules grounded in published usability research, so that placement decisions across the site are made on evidence rather than taste — and so the same standard is applied consistently on every page. Each principle states the rule, the reasoning, and its source.

These are intended as defaults. They can be overridden, but only deliberately and with a reason — never by accident.

## Sources

- Zigzag Image–Text Layouts Make Scanning Less Efficient — Kim Flaherty, NN/g (2017). https://www.nngroup.com/articles/zigzag-page-layout/
- Right-Justified Navigation Menus Impede Scannability — NN/g (2018). https://www.nngroup.com/articles/right-justified-navigation-menus/
- Why Does a Design Look Good? — NN/g (2025). https://www.nngroup.com/articles/why-does-design-look-good/
- F-Shaped Pattern eye-tracking research — NN/g (foundational). The basis for left-edge scanning behaviour referenced throughout.

## A. The left edge is sacred

**1. Body copy is always left-aligned with a fixed left edge.**
Never centre or right-align paragraphs of running text. Eye-tracking shows readers scan by moving rapidly down the left edge; any alignment that shifts the start of each line forces them to re-acquire the line beginning, which slows reading and raises effort. A stable left margin gives the eye a single, predictable return point.
Source: Right-Justified Navigation Menus Impede Scannability; F-Shaped Pattern research.

**2. Centre and right alignment are for short, intentional moments only.**
Headings, eyebrows, a single pull quote, image captions, or a short section intro above a symmetric grid may be centred for emphasis or symmetry. The rule is length: if it runs to more than a line or two, it goes left. Centred or right-aligned blocks of more than a couple of lines are a readability failure, not a stylistic choice.
Source: Right-Justified Navigation Menus Impede Scannability.

**3. A shared edge signals that things belong together.**
When related elements line up on a common left edge, they form an invisible vertical line the eye follows, and the brain reads them as a group (Gestalt continuation). Use a consistent left edge to bind related content; use deliberate spacing — not random offsets — to separate groups.
Source: Why Does a Design Look Good?

## B. Design for how people actually scan

**4. Lead with the information-carrying words, on the left.**
Users read the first one or two words of a line and move on unless something holds them. Front-load headings, list items, and link text with the most meaningful words rather than generic openers. Avoid starting multiple adjacent items with the same words — it kills scannability.
Source: Right-Justified Navigation Menus Impede Scannability.

**5. Put the highest-value content top-left, especially in the first row.**
People begin fixating on the left before content even settles. Whatever sits in the first row of a sequence sets the tone and decides whether users engage with the rest — so the first row should carry your strongest, most informative element, positioned left.
Source: Zigzag Image–Text Layouts.

## C. Image–text sequences (the zigzag question)

**6. Default to an aligned layout for any sequence of four or more image–text rows.**
Keep all text on one side and all images on the other, row after row. In testing, this let users scan straight down the column of text and ignore unhelpful images effortlessly. The alternating (zigzag) version made decorative images act as obstacles: the eye was caught by each picture, then had to redirect back to the text.
Source: Zigzag Image–Text Layouts.

**7. Zigzag is acceptable only for short lists — two or three rows.**
NN/g's own stated exception. Over a short sequence the cost of redirecting is small and the visual variety can be worth it. Past three rows, the accumulated stumbling outweighs the interest. (Note: the study measured image–text rows specifically. For text-only blocks the principle is indicative, not directly proven — but the underlying left-edge logic still favours consistency.)
Source: Zigzag Image–Text Layouts.

**8. The layout matters less when the imagery is genuinely informational.**
Where images carry real product information, users study them and reference them repeatedly, and both aligned and zigzag layouts perform equally well. The penalty for zigzag is specifically a problem of decorative imagery. So: if an image teaches something, placement is forgiving; if it's mood-setting, align it.
Source: Zigzag Image–Text Layouts.

**9. Align decorative imagery down a single side.**
Decorative images earn their place by establishing brand and atmosphere, and that's fine — but users mostly skip them, so keep them on a consistent side so they sit outside the scan path rather than interrupting it.
Source: Zigzag Image–Text Layouts.

**10. Top-align text with its decorative image; never let the image sit higher in the row.**
As the page scrolls, the eye lingers where text used to be. If a decorative image occupies that spot — because it was placed higher than its paired text — it captures a residual fixation and forces a redirect. Horizontal (top) alignment of text and image within a row prevents this.
Source: Zigzag Image–Text Layouts.

**11. Avoid imagery that is too complex or too detailed too early.**
Images dense with detail (screenshots, text-in-image) compete with the body text and overload readers who are still grasping the basics. They raise cognitive load and get avoided. Choose images that complement, not contend with, the words.
Source: Zigzag Image–Text Layouts.

**12. Never add an image just to satisfy a layout.**
If a meaningful image exists, pair it. If one doesn't, leave the slot empty rather than dropping in filler. Every image must earn its place — through information value or genuine brand work — or it's removed.
Source: Zigzag Image–Text Layouts.

## D. Consistency is the point

**13. Predictable layouts let people scan efficiently — so placement must be systematic, not arbitrary.**
The reason consistency helps is that users learn a pattern and then rely on it. Alternation per se isn't banned; unexplained variation is the tax. Every placement should follow from a rule that holds across the whole site, so that what users learn on one page pays off on the next.
Source: Zigzag Image–Text Layouts (predictability); Why Does a Design Look Good? (intentional, system-backed decisions).

**14. Spacing and grouping come from a system, not from feel.**
Build spacing as multiples of a single base unit, use less space within a group and more between groups, and make every decision traceable to that system. Good layouts don't look good by chance.
Source: Why Does a Design Look Good?

## How to use these
Treat **A1, A2 and D13** as non-negotiable: a fixed left edge for all body copy, centre/right reserved for short moments only, and no placement without a rule behind it. Sections **C6–C12** apply wherever text is paired with imagery in a repeating sequence. When a layout choice seems to break a principle, the test is a single question — is this deliberate and reasoned, or did it just happen? If it's the latter, bring it back to the default.

## Applied to this site

The build was audited against these principles. It is largely compliant: no body copy is centred, heroes are left-aligned, the recovery-position diagrams already use an aligned (non-zigzag) image–text layout, and section/group spacing uses the `--space-*` tokens.

**Sanctioned exceptions — deliberate, do not "fix":**
- **Centred short labels** (A2 — short/eyebrow above a symmetric grid): the homepage search label ("Search for any drug"), the drug-name chips, and the "View all drugs A–Z" link.
- **`.talk-option` contact cards** (A2 — symmetric grid): a two-card grid with a centred icon over a short label; centring is intentional. Left-aligning would fight the centred icon.
- **Component-level px** on buttons/pills/inputs (e.g. `14px 20px`, `12px 18px`, `10px 16px`), small icon `margin-top: 2px` nudges, and `scroll-margin-top: 120px` (the sticky-header offset for jump links) are deliberate optical/functional tuning — permitted overrides, not the content-spacing rhythm. The rhythm *between* content groups already uses `--space-*`; keep it that way (D14).

Changes made when applying the principles: emergency scenario-card titles front-load the symptom (B4/B5); footer "Get help" links front-load the person rather than repeating "Worried about" (B4, and consistent with the homepage — D13); the recovery-diagram caption/link text is left-aligned to share the page's left edge (A1/A3).
