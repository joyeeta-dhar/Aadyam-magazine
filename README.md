# 🎓 AADYAM — Technical Magazine Website

✨ AADYAM is the annual technical magazine of the **Department of Electronics Engineering, Yeshwantrao Chavan College of Engineering (YCCE), Nagpur**. This repository contains the source code for its digital home — a single-page site to browse, read, and download every issue.

🔗 **Live site:** _add your Vercel URL here once deployed_

---

## 🚀 Features

- 🎨 **Animated hero section** with a canvas-based particle/circuit background
- 🗂️ **Issue archive grid** with search/filter and "load more" pagination
- 📖 **In-browser flipbook reader** — flip through pages of an issue without leaving the site (with zoom 🔍, keyboard arrows ⌨️, and swipe support 📱 on mobile)
- 📥 **Direct PDF open/download** for issues that have a full PDF uploaded
- 💬 **Feedback form** with client-side validation
- 🌗 **Dark/light theme toggle**
- 🖱️ **Custom cursor + magnetic buttons** for desktop, with graceful fallback on touch devices

---

## 🛠️ Tech Stack

Plain **HTML**, **CSS**, and **vanilla JavaScript** — no framework, no build step, no dependencies. This means:
- ✅ It runs by just opening `index.html` in a browser
- ✅ It deploys instantly on static hosts like Vercel, Netlify, or GitHub Pages
- ✅ There's nothing to `npm install`

---

## 📁 Project Structure

```
├── 📄 index.html      → Page structure and markup
├── 🎨 style.css        → All styling (theme, layout, animations)
├── ⚙️  script.js        → Interactivity (reader, filters, form, canvas animation)
├── 🗃️  data.js          → Magazine/issue data 
├── 📕 Aadyam_2026.pdf  → Issue XVII (2026) — Viksit Bharat @ 2047
└── 📗 Aadyam_2025.pdf  → Issue XVI (2025) — Electronics in Music
```

---

## ➕ Adding a New Issue

Open `data.js` and add a new object to the `magazines` array at the top, following the pattern of the existing entries:

```js
{
  id: 'issue-18',
  issue: 'XVIII',
  year: '2027',
  title: 'Your Theme Title',
  subtitle: 'Your Subtitle',
  color: ['#hexcolor1', '#hexcolor2'],
  accent: '#hexcolor',
  featured: true,        // 🌟 set true only for the current/latest issue
  pdfPath: 'Aadyam_2027.pdf',
  pages: [ /* cover, toc, articles, backcover — see existing issues for format */ ]
}

---

## 💻 Running Locally

No build tools needed — just open the file directly:

```bash
# Option 1 🖱️: just double-click index.html

# Option 2 🌐: serve it locally (recommended, avoids some browser file:// restrictions)
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## ☁️ Deployment (Vercel)

1. 📤 Push this repo to GitHub
2. 🔗 On [vercel.com](https://vercel.com), click **Add New → Project** and import the repo
3. ⚙️ Framework preset: **Other**. Leave Build Command and Output Directory blank
4. 🚀 Click **Deploy**

Every push to `main` will auto-redeploy. 🔄

---

## 👥 Credits

- 🏛️ **Department of Electronics Engineering, YCCE, Nagpur**
- ✍️ Editorial Team, AADYAM 2025–26
- 💻 Site built and maintained by the department's student contributors

---

## 📜 License

This project is for departmental/educational use by YCCE. Contact the Department of Electronics Engineering for reuse permissions.

---

<p align="center">⚡ Made with passion by the AADYAM team ⚡</p>
