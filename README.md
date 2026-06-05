[README.md](https://github.com/user-attachments/files/28629467/README.md)
# WBI — Waifu Bureau of Investigation (website)

Public site for **WBI**: custom anime trading cards, prints & posters. Advertises the **Lofi Set** (launching Sat 06/06/26, 11 AM) and previews the upcoming **Cyberpunk Line**. All sales happen on **[Whatnot](https://www.whatnot.com/s/MtKFSahE)**.

This is a **static site** — pure HTML/CSS/JS, no build step. It runs anywhere that serves files.

---

## Publish on GitHub Pages (free)

1. Create a new GitHub repo (e.g. `wbi-site`).
2. Upload **everything in this `site/` folder** to the repo root — so the repo root contains `index.html`, `app.jsx`, `data.js`, `styles.css`, `colors_and_type.css`, `.nojekyll`, and the `assets/` folder.
   - **Web upload:** repo → *Add file → Upload files* → drag the contents in → *Commit*.
   - **Git CLI:**
     ```bash
     git init
     git add .
     git commit -m "WBI site"
     git branch -M main
     git remote add origin https://github.com/<you>/wbi-site.git
     git push -u origin main
     ```
3. Repo → **Settings → Pages** → *Build and deployment* → **Source: Deploy from a branch** → **Branch: `main` / `/ (root)`** → **Save**.
4. Wait ~1 minute. Your site is live at `https://<you>.github.io/wbi-site/`.

> The `.nojekyll` file is included so GitHub Pages serves all files as-is.

> **File sizes:** all card art is optimized JPG (~150KB each); the whole `site/` folder is ~7MB, so GitHub's web uploader (*Add file → Upload files*) handles it fine. Don't upload the `.zip` itself — unzip first and upload the **contents**.

### Custom domain (optional)
Settings → Pages → *Custom domain* → enter your domain and follow the DNS instructions.

---

## Swapping in your real Lofi cards

The catalog lives in **`data.js`**. It is loaded with your **35-card Lofi Set**, each filed under its Bureau **codename**.

To add / change a card, edit the `window.WBI_LOFI` array — each entry has:
   - `img` → `'assets/your-file.jpg'` (card art is stored as optimized JPGs ~720px wide, ~150KB each — small enough for GitHub's web uploader)
   - `name` → character name · `code` → case codename (shown on the badge)
   - `series` → source (e.g. `'Pokémon'`)
   - `pos` → `'50% 14%'` controls vertical framing (lower % = show more of the top)
   - `frame` → `'holo' | 'violet' | 'cyber'` (cosmetic frame color, not a rank)
   - `explicit` → `true` enables the 18+ blur-to-reveal (all Lofi cards are `true`). Set `false` for a card you want shown unblurred.

`window.WBI_CYBER` is the **Cyberpunk preview** (future show, release TBD) — same shape.

---

## What's on the site
- **18+ age gate** on entry (persists in the browser).
- **Hero** with a live countdown to the Saturday Lofi drop.
- **The Lofi Set** — your 35 cards selling Saturday ($5 each, display samples → buy on Whatnot). All are 18+ and shown **blurred / "classified" until tapped to declassify**.
- **Cyberpunk Line — Preview** — advertised as *coming a future show, release date TBD* (not for sale yet).
- **Custom Orders / Request a Quote** — public submission form with **multi-file upload** that posts to **Formspree** (`https://formspree.io/f/mjgdkjwv`) and emails everything — including the attached files — to **wbixcards@gmail.com**. On success the user is sent to **`thanks.html`**.
- **FAQ** — card size, thickness, 8-color printing, drops, where to buy.

## Mobile
- The site is fully responsive with a hamburger menu. Phone users (≤640px) are auto-redirected from `index.html` to **`mobile.html`** — an app-style layout with a sticky bottom action bar (**Request a Quote** / **Whatnot**). A “View desktop site →” link (`index.html?desktop=1`) overrides the redirect for that session.

## Formspree & email
- Endpoint: `https://formspree.io/f/mjgdkjwv` (set in `data.js` as `window.FORMSPREE_URL`).
- Submissions (with file attachments) are emailed to `wbixcards@gmail.com` (`window.WBI_EMAIL`).
- **First submission:** Formspree emails you a one-time confirmation to activate the form — click it once.

## Google Ads — “Request a Quote”
- Point the ad at **`quote.html`** — a focused, standalone quote-request landing page (same Formspree form, file upload included).
- Use **`thanks.html`** as your **conversion / response page**. After a successful submit, users land there automatically. Full URL once published:
  `https://<you>.github.io/<repo>/thanks.html`
  (or `https://<yourdomain>/thanks.html` with a custom domain). Add that exact URL as your Google Ads conversion destination.

## Files
| File | Purpose |
|---|---|
| `index.html` | Page shell, loads React + the app (auto-redirects phones to `mobile.html`) |
| `mobile.html` | App-style mobile entry with sticky bottom action bar |
| `quote.html` | Standalone **Request a Quote** landing for Google Ads |
| `thanks.html` | Success / **conversion** page after a quote is submitted |
| `app.jsx` | All UI (single file) |
| `data.js` | **Edit this** — card catalog + Whatnot URL + Formspree endpoint + email |
| `styles.css` | Layout & component styles |
| `colors_and_type.css` | Brand color + type tokens (fonts load from Google Fonts) |
| `assets/` | Logos + card images |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |
