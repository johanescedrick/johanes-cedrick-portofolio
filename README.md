# Johanes Cedrick Wijaya — Portfolio

An interactive, scroll-storytelling portfolio website built with **React + Vite + Tailwind CSS + Framer Motion**. Each project reads like a short case study: problem → approach → result → recommendation, with sticky visuals and animated reveals.

---

## 1. Prerequisites

You need **Node.js 18 or newer** (comes with `npm`). Check with:

```bash
node -v
npm -v
```

If you don't have it, download from [nodejs.org](https://nodejs.org/) (the LTS version is fine).

---

## 2. Run it locally (preview before publishing)

From the project folder:

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the dev server
```

Open the URL it prints (usually **http://localhost:5173**). The page hot-reloads as you edit.

To preview the exact production build:

```bash
npm run build      # outputs to /dist
npm run preview    # serves the built site locally
```

---

## 3. Push to GitHub

First create an **empty** repository on GitHub (no README/’.gitignore’, since this project already has them). Then, from the project folder:

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

`node_modules` and `dist` are already ignored via `.gitignore`, so only source files get pushed.

Later, whenever you update the site:

```bash
git add .
git commit -m "Update projects"
git push
```

---

## 4. Deploy to Vercel (free)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New → Project**, then import the repo you just pushed.
3. Vercel auto-detects Vite. Confirm these settings (they should be filled in automatically):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. In ~1 minute you'll get a live URL like `your-repo.vercel.app`.

Every future `git push` to `main` automatically redeploys — no manual step.

### Custom domain

1. Buy a domain (Namecheap, Cloudflare, Niagahoster, etc.).
2. In Vercel: **Project → Settings → Domains → Add**, type your domain.
3. Vercel shows the DNS records to add. Paste them into your domain provider's DNS settings (an `A` record and/or a `CNAME`).
4. Wait for DNS to propagate (minutes to a couple of hours). Vercel issues the HTTPS certificate automatically.

---

## 5. Optional: run with Docker

A `Dockerfile` is included if you prefer a containerized build (not needed for Vercel).

```bash
docker build -t cedrick-portfolio .
docker run -p 8080:80 cedrick-portfolio
```

Then open **http://localhost:8080**. This builds the static site and serves it with Nginx.

---

## 6. Editing content

All content lives in plain data files — no need to touch the components:

- **`src/data/profile.js`** — your name, tagline, about text, education, skills, contact links.
- **`src/data/projects.js`** — the 7 full case-study projects and the "more projects" list.
- **`public/assets/`** — all images (profile photo and project charts).

To swap an image, drop a new file into `public/assets/` and update the matching `src` in `projects.js` (or the `<img>` in `src/components/Hero.jsx` / `About.jsx`).

### Replacing the About photo

The About-section photo (`public/assets/about.jpg`) is currently cropped from the batik portrait. To use a different photo, replace that file (keep the same name, roughly a 4:5 portrait ratio).

---

## Project structure

```
.
├── index.html                 # HTML shell, fonts, meta tags
├── public/
│   ├── favicon.svg
│   └── assets/                # profile photo + project charts
├── src/
│   ├── main.jsx               # React entry
│   ├── App.jsx                # assembles all sections
│   ├── index.css              # Tailwind + global styles
│   ├── components/
│   │   ├── Navbar.jsx         # sticky nav + scroll progress bar
│   │   ├── Hero.jsx           # landing section
│   │   ├── About.jsx          # bio, education, skills
│   │   ├── Projects.jsx       # section intro + maps chapters
│   │   ├── ProjectChapter.jsx # ONE project case study (the core UI)
│   │   └── MoreAndContact.jsx # more-projects grid + contact footer
│   └── data/
│       ├── profile.js
│       └── projects.js
├── tailwind.config.js
├── vite.config.js
├── Dockerfile                 # optional containerized build
└── package.json
```

---

## Tech stack

- **React 18** + **Vite** — fast dev server and build
- **Tailwind CSS** — styling
- **Framer Motion** — scroll reveals and micro-interactions
- **lucide-react** — icons

Built for Johanes Cedrick Wijaya. Palette and typography follow the original Canva portfolio (royal blue `#1E52C8`, ember `#E8820E`, Poppins + Inter).
