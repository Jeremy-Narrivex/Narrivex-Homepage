# Narrivex Website

The Narrivex website is a responsive static site introducing the studio and its two products: SpecuLab and SpecQC. It is built with HTML, CSS, and vanilla JavaScript and does not require a package manager or build step.

## Products

- **SpecuLab** — an investigation research platform for connecting case files, tracing findings to their sources, and discovering patterns.
- **SpecQC** — a concrete specification review tool in development for producers and quality-control managers.

## Local preview

Run a static web server from the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser. The product pages are available at `/speculab.html` and `/specqc.html`. Keep the server running while previewing the site; press `Ctrl+C` to stop it.

There is no `npm run dev` command because this project has no `package.json`.

## Deployment

The GitHub Actions workflow in `.github/workflows/static.yml` checks required site files on pull requests and deploys to GitHub Pages after changes reach `main`, or when run manually with `workflow_dispatch`.

GitHub Pages should use **GitHub Actions** as its build and deployment source. The `CNAME` file configures the custom domain; DNS records for `narrivex.com` must also point to GitHub Pages.

## Site map

- `index.html` — studio landing page and product overview
- `speculab.html` — SpecuLab product page
- `specqc.html` — SpecQC product page
- `privacy.html` — privacy policy
- `404.html` — custom not-found page
- `styles.css` and `script.js` — shared styling and site behavior
- `assets/screenshots/` — product screenshots used on the product pages and homepage
- `sitemap.xml` and `robots.txt` — search engine discovery files
- `.github/workflows/static.yml` — validation and deployment workflow

## Updating content

- Update the homepage cards and studio content in `index.html`.
- Update product descriptions and screenshots in `speculab.html` and `specqc.html`.
- Keep screenshot filenames and paths in sync with the image references in those pages.
- Update canonical URLs, page descriptions, and social sharing metadata when changing page titles or positioning.

## Contact

- **Email:** [support@narrivex.com](mailto:support@narrivex.com)
- **Website:** [narrivex.com](https://narrivex.com)

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
