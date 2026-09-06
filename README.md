# Narrivex Website

A modern, responsive studio website for Narrivex and its AI product portfolio.

## About

Narrivex is a product studio focused on AI tools for investigation, writing, and engineering analysis.

## Projects

- **SpecuLab** — AI-assisted investigation studio for case analysis, evidence synthesis, and pattern discovery.
- **SpecQc** — AI-assisted engineering tool for specifications and standards analysis.
- **AuthorBeacon** — AI-assisted writing studio for drafting, revision, and creative development.

Emma, an earlier AGI research effort, has been discontinued.


## Features

- Modern, polished landing page layout
- Fully responsive across mobile, tablet, and desktop
- Clear project cards for all three active Narrivex products
- SEO-friendly semantic HTML and social sharing metadata
- Lightweight static site deployed through GitHub Pages

## Technology Stack

- **HTML5**: Semantic markup for the page structure
- **CSS3**: Custom properties, responsive grid, and flex layouts
- **JavaScript**: Vanilla JS for navigation state and smooth scrolling
- **Google Fonts**: Inter and Space Grotesk for the visual system

## Deployment

### GitHub Pages

The GitHub Actions workflow at `.github/workflows/static.yml` automatically deploys the static site whenever changes are pushed to `main`. In the repository settings, set **Pages** → **Build and deployment** → **Source** to **GitHub Actions**.

### Custom Domain

1. In **Settings** → **Pages**, set the custom domain to `narrivex.com`.
2. Configure the DNS records GitHub Pages provides for the domain.
3. Enforce HTTPS after GitHub verifies the domain.

### Search Engine Indexing

1. Verify ownership of `https://narrivex.com` in [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. Submit `https://narrivex.com/sitemap.xml` to each service.

## Contribution Protection

The `main` branch requires one approving pull-request review and a successful **Validate static site files** check before changes can merge. GitHub Pages deploys only after a change reaches `main`.

## Local Development

To view the site locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Narrivex/website.git
   cd website
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000` in your browser.

## File Structure

```
website/
├── index.html          # Main HTML file
├── 404.html            # Branded not-found page
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── CNAME               # GitHub Pages custom domain
├── .github/workflows/  # GitHub Pages deployment workflow
├── assets/             # Images and other assets
├── robots.txt          # Search crawler directives
├── sitemap.xml         # Search engine sitemap
├── README.md           # This file
└── LICENSE             # MIT License
```

## Customization

### Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #3b82f6;    /* Blue */
    --secondary-color: #8b5cf6;   /* Purple */
    --accent-color: #06b6d4;      /* Cyan */
    /* ... */
}
```

### Content

- Studio copy: Edit text in `index.html`
- Projects: Update the Projects section in `index.html`
- Contact links: Modify the Contact section in `index.html`

### SEO

Update meta tags in the `<head>` section of `index.html`:
- `<title>`: Page title
- `<meta name="description">`: Site description
- Open Graph tags for social media
- `<link rel="canonical">`: Preferred page URL
- JSON-LD structured data (`Organization` / `WebSite`)

Sitemap reference for search engines:
- Preferred sitemap URL: `https://narrivex.com/sitemap.xml`
- Submit this URL in Google Search Console and Bing Webmaster Tools

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - see [LICENSE](LICENSE) file for details

## Contact

- **Email**: support@narrivex.com
- **Website**: [https://narrivex.com](https://narrivex.com)

---

Built by Narrivex LLC
