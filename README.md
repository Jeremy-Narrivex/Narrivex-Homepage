# Narrivex Website

A modern, responsive studio website for Narrivex and its AI product portfolio.

## About

Narrivex is a product studio focused on AI tools for investigation, writing, engineering analysis, and AGI research.

## Projects

- **SpecuLab** — AI-assisted investigation studio for case analysis, evidence synthesis, and pattern discovery.
- **AuthorBeacon** — AI-assisted writing studio for drafting, revision, and creative development.
- **SpecQc** — AI-assisted engineering tool for specifications and standards analysis.
- **Emma** — AGI research focused on architectures, methods, and experimental approaches.


## Features

- Modern, polished landing page layout
- Fully responsive across mobile, tablet, and desktop
- Clear project cards for all four Narrivex products
- SEO-friendly semantic HTML and social sharing metadata
- Lightweight static site suitable for Cloud Run or custom container hosting

## Technology Stack

- **HTML5**: Semantic markup for the page structure
- **CSS3**: Custom properties, responsive grid, and flex layouts
- **JavaScript**: Vanilla JS for navigation state and smooth scrolling
- **Google Fonts**: Inter and Space Grotesk for the visual system

## Deployment

### Google Cloud Run

1. Build and run the container locally:
   ```bash
   docker build -t narrivex-website .
   docker run --rm -p 8080:8080 narrivex-website
   ```

2. Deploy the site to Cloud Run:
   ```bash
   gcloud run deploy narrivex-website \
     --source . \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

3. Map `narrivex.com` to the Cloud Run service with Google Cloud domain mapping after deployment.

### Custom Domain

1. Use Cloud Run domain mapping for `narrivex.com` or `www.narrivex.com`.
2. Follow the DNS records that Google Cloud provides for the mapping.
3. Once DNS propagates, Cloud Run will serve the site on your domain.

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

3. Visit `http://localhost:8000` in your browser, or `http://localhost:8080` if you are running the container.

## File Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── Dockerfile          # Cloud Run container definition
├── nginx.conf          # Nginx configuration for the container
├── assets/             # Images and other assets
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
