# Build & Deployment Guide

## For Local Testing (with CSS working)

```bash
# Build for local testing (no basePath)
bun run build:local

# Serve locally
npx serve out -p 3000
# or
bun run serve

# Visit: http://localhost:3000 (redirects to /en/)
```

## For GitHub Pages Deployment

```bash
# Build with basePath for GitHub Pages
bun run build:gh-pages

# The output in 'out/' folder is ready to deploy to GitHub Pages
# It will work at: https://yourusername.github.io/healthy-site/
```

## For cPanel/Apache Hosting (Production)

```bash
# Build for production (no basePath, includes .htaccess)
bun run build:local

# Upload the entire 'out/' folder to your server
# The .htaccess file will handle all redirects
```

## Development

```bash
# Start dev server
bun run dev

# Visit: http://localhost:3000/en or http://localhost:3000/ar
```

## Understanding the Builds

### `build:local` (STATIC_EXPORT=true)
- No basePath
- Perfect for local testing with `serve`
- Perfect for cPanel/Apache hosting
- CSS/JS paths: `/_next/static/...`

### `build:gh-pages` (GITHUB_ACTIONS=true)
- Includes basePath: `/healthy-site`
- For GitHub Pages deployment
- CSS/JS paths: `/healthy-site/_next/static/...`

## URL Structure

All builds use the same URL structure:
- `/` → redirects to `/en/`
- `/en/` → English site
- `/ar/` → Arabic site
- `/en/about-us/` → English About Us page
- `/ar/about-us/` → Arabic About Us page
- etc.

## Features

✅ Locale prefixes always visible (`/en`, `/ar`)
✅ Language switcher works in dev and production
✅ Case-insensitive product URLs (via .htaccess)
✅ English default locale
✅ All navigation using i18n routing
