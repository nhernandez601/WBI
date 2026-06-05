[README.md](https://github.com/user-attachments/files/28625580/README.md)
# WBI
Waifu Card 
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

### Custom domain (optional)
Settings → Pages → *Custom domain* → enter your domain and follow the DNS instructions.

---

## Swapping in your real Lofi cards

The catalog lives in **`data.js`**. It is loaded with your **11-card Lofi Set** (Lillie, Serena, Asuka, Roxy, Dawn, Rem, Nico Robin, Lucy, Yoruichi, 2B, Toga), each filed under its Bureau **codename** (Alabaster, Amber, Apex, Arcane, Aurora, Azure, Codex, Edge, Flash, Nova, Phantom).

To add / change a card, edit the `window.WBI_LOFI` array — each entry has:
   - `img` → `'assets/your-file.png'`
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
- **The Lofi Set** — your 11 cards selling Saturday ($5 each, display samples → buy on Whatnot). All are 18+ and shown **blurred / "classified" until tapped to declassify**.
- **Cyberpunk Line — Preview** — advertised as *coming a future show, release date TBD* (not for sale yet).
- **Custom Orders** — public submission form (multi-file upload + finish options) that emails `n.hernandez601@gmail.com`. *Browsers can't auto-attach files via email links — the form opens a prefilled draft and asks the user to attach their files. For automatic intake with attachments, wire the form to a backend (e.g. Formspree).* 
- **FAQ** — card size, thickness, 8-color printing, drops, where to buy.

## Files
| File | Purpose |
|---|---|
| `index.html` | Page shell, loads React + the app |
| `app.jsx` | All UI (single file) |
| `data.js` | **Edit this** — card catalog + Whatnot URL |
| `styles.css` | Layout & component styles |
| `colors_and_type.css` | Brand color + type tokens (fonts load from Google Fonts) |
| `assets/` | Logos + card images |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |
