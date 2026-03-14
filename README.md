# Cliff Schwandner — Artist Portfolio Website

A clean, single-page portfolio site for painter Cliff Schwandner.

**Live site:** https://beamish-belekoy-a7152e.netlify.app

---

## Files in this project

| File | What it is |
|------|-----------|
| `index.html` | All the content — text, structure, sections |
| `style.css` | All the visual design — colors, fonts, layout |
| `script.js` | Interactive bits — lightbox, nav shrink on scroll |
| `images/` | Folder for painting images |
| `README.md` | This file |

---

## How to add a new painting

Open `index.html` and find the `<!-- GALLERY -->` section.

Copy this block and paste it inside the `<div class="gallery">`:

```html
<div class="painting" data-title="Your Painting Title" data-medium="Acrylic on canvas">
  <img src="images/YOUR-IMAGE-FILE.jpg" alt="Your Painting Title" />
  <div class="painting-info">
    <h3>Your Painting Title</h3>
    <p>Acrylic on canvas</p>
  </div>
</div>
```

Then upload your image file to the `images/` folder in this GitHub repo.

---

## How to edit text

Open `index.html` in GitHub and click the pencil ✏️ icon to edit.

- **Hero tagline** — find the `<section id="hero">` block
- **About text** — find `<section id="about">`
- **Contact email** — find `<a href="mailto:...`
- **Footer year** — find `© 2025`

---

## How to deploy

This site is connected to Netlify. When you save (commit) any change in GitHub, the live site updates automatically within about 60 seconds.
