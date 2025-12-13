# Healthy Pharma - Build System Guide

## Overview

This project has **three different build targets**, each optimized for specific deployment scenarios.

## Build Commands Summary

| Command | Use Case | Output | basePath |
|---------|----------|--------|----------|
| `bun run dev` | Development | Live server | None |
| `bun run build:local` | Local testing & cPanel | `out/` | None |
| `bun run build:gh-pages` | GitHub Pages | `out/` | `/healthy-site` |
| `bun run build:cpanel` | cPanel (automated) | `healthy-site.zip` | None |

## Detailed Build Commands

### 1. Development Server
```bash
bun run dev
```
- **Purpose**: Local development with hot reload
- **URL**: `http://localhost:3000/en` or `/ar`
- **Features**: Fast refresh, error overlay, full Next.js features
- **When to use**: Daily development work

---

### 2. Local Testing Build
```bash
bun run build:local
npx serve out -p 3000
```
- **Purpose**: Test static build locally
- **Output**: `out/` folder
- **URL**: `http://localhost:3000` (redirects to `/en/`)
- **Features**: Full production build without GitHub basePath
- **When to use**: Testing before cPanel deployment

**What's Generated**:
```
out/
├── .htaccess
├── index.html (redirects to /en/)
├── en/ (English site)
├── ar/ (Arabic site)
├── _next/ (static assets)
└── images/, logos/, fonts/
```

---

### 3. GitHub Pages Build
```bash
bun run build:gh-pages
```
- **Purpose**: Deploy to GitHub Pages
- **Output**: `out/` folder with basePath
- **URL**: `https://username.github.io/healthy-site/`
- **Features**: Includes `/healthy-site` basePath for GitHub Pages subdirectory
- **When to use**: Deploying to GitHub Pages

**Note**: CSS/JS paths include basePath:
- `/healthy-site/_next/static/...`
- `/healthy-site/images/...`

---

### 4. cPanel Automated Build
```bash
bun run build:cpanel
```
- **Purpose**: Complete automated build for cPanel deployment
- **Output**: `healthy-site.zip` (ready to upload)
- **What it does**:
  1. Cleans previous builds
  2. Installs dependencies if needed
  3. Builds static site (`STATIC_EXPORT=true`)
  4. Verifies critical files exist
  5. Creates production-ready zip file
- **When to use**: Final deployment to cPanel/Apache hosting

**Automated Steps**:
```
[1/5] Cleaning previous builds
[2/5] Installing dependencies (if needed)
[3/4] Building static site
[4/4] Verifying build output
[5/5] Creating zip archive
```

## URL Structure (All Builds)

All builds use the same URL structure (except GitHub Pages adds basePath):

| Route | Description |
|-------|-------------|
| `/` | Redirects to `/en/` |
| `/en/` | English homepage |
| `/ar/` | Arabic homepage |
| `/en/about-us/` | English About Us page |
| `/ar/about-us/` | Arabic About Us page |
| `/en/prices/` | English Prices page |
| `/en/prices/omepure10ml/` | English Omepure product page |

## Features in All Builds

✅ **Bilingual**: English (default) & Arabic
✅ **Locale Prefixes**: Always visible (`/en/`, `/ar/`)
✅ **Language Switcher**: Works in all environments
✅ **Case-Insensitive URLs**: Via .htaccess in production
✅ **SEO Optimized**: Meta tags, structured data, sitemaps
✅ **Responsive**: Mobile-first design
✅ **Dark Mode**: Default theme
✅ **Performance**: Optimized static assets

## File Structure

### Source Code
```
src/
├── app/[locale]/          # Locale-based pages
├── components/            # React components
├── i18n/                  # Internationalization config
└── lib/                   # Utilities
```

### Build Output (`out/`)
```
out/
├── .htaccess             # Apache config (redirects, security)
├── index.html            # Root redirect to /en/
├── en/                   # English pages
│   ├── index.html
│   ├── about-us/
│   ├── prices/
│   └── ...
├── ar/                   # Arabic pages
│   ├── index.html
│   ├── about-us/
│   ├── prices/
│   └── ...
├── _next/                # Next.js static assets
│   ├── static/
│   │   ├── css/
│   │   ├── chunks/
│   │   └── media/
│   └── ...
├── images/               # Image assets
├── logos/                # Logo files
├── fonts/                # Font files
└── ...
```

## Configuration Files

### `next.config.ts`
- Handles static export
- Manages basePath for GitHub Pages
- Image optimization settings

### `src/i18n/routing.ts`
- Locale configuration
- **Key setting**: `localePrefix: "always"`
- Default locale: English

### `public/.htaccess`
- Case-insensitive product URL redirects
- Locale path handling
- Security headers
- Cache control
- Compression

### `serve.json`
- Configuration for local testing with `serve`
- Redirects for locale-less URLs
- Clean URLs

## Testing Workflow

### Before Deployment
1. **Test in development**:
   ```bash
   bun run dev
   ```
   Test all features, pages, language switching

2. **Test static build locally**:
   ```bash
   bun run build:local
   npx serve out -p 3000
   ```
   Test that everything works as static files

3. **Verify URLs**:
   - `/` redirects to `/en/`
   - All English pages work: `/en/about-us/`, etc.
   - All Arabic pages work: `/ar/about-us/`, etc.
   - Language switcher toggles correctly
   - Navigation works

4. **Build for production**:
   ```bash
   bun run build:cpanel
   ```
   Upload `healthy-site.zip` to cPanel

## Common Issues & Solutions

### Issue: CSS not loading in local serve
**Solution**: Use `build:local` not `build:gh-pages`

### Issue: 404 on locale-less URLs locally
**Solution**: This is expected with `serve` - use URLs with locales (`/en/`, `/ar/`)

### Issue: Case-insensitive URLs not working locally
**Solution**: This only works in production with Apache .htaccess

### Issue: Language switcher shows loading but doesn't switch
**Solution**: Check browser console - target path might not exist

## Environment Variables

| Variable | Values | Effect |
|----------|--------|--------|
| `GITHUB_ACTIONS` | `true`/`false` | Enables basePath for GitHub Pages |
| `STATIC_EXPORT` | `true`/`false` | Enables static export mode |

## Quick Reference

**Development**:
```bash
bun run dev
```

**Test Locally**:
```bash
bun run build:local && npx serve out -p 3000
```

**Deploy to cPanel**:
```bash
bun run build:cpanel
# Upload healthy-site.zip via cPanel File Manager
```

**Deploy to GitHub Pages**:
```bash
bun run build:gh-pages
# Push out/ folder to gh-pages branch
```

## Documentation Files

- `BUILD_GUIDE.md` - Detailed build instructions
- `DEPLOYMENT.md` - cPanel deployment guide
- `TESTING_NOTE.md` - Local vs production differences
- `README_BUILDS.md` - This file

---

**Need Help?** Check the documentation files or run `bun run build:cpanel` for automated deployment!
