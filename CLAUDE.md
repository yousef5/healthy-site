# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual healthcare platform built with Next.js 15, featuring Arabic (default) and English locales. The application uses static site generation for GitHub Pages deployment and includes a modern UI with dark mode, animations, and healthcare-focused content.

## Development Commands

### Package Manager
This project uses **Bun** (lock file: `bun.lock`). All npm commands should be run with `bun`:

```bash
# Development server with Turbopack
bun run dev

# Production build (creates static export when GITHUB_ACTIONS=true)
bun run build

# Start production server (for local testing)
bun start

# Lint the codebase
bun run lint

# Install dependencies
bun install
```

### Running the Development Server
- Default URL: http://localhost:3000
- The app will auto-detect locale from browser settings or default to Arabic
- Turbopack is enabled by default for faster builds

## Architecture

### Internationalization (i18n)

**Critical**: This app uses `next-intl` with a **locale prefix set to "never"** (`localePrefix: "never"` in `src/i18n/routing.ts`). This means:
- URLs do NOT contain `/en` or `/ar` prefixes
- Locale is detected automatically from browser headers or stored preferences
- The locale segment `[locale]` exists in the file structure but is hidden in URLs
- Default locale is Arabic (`ar`)
- Supported locales: `ar`, `en` (with partial support for `es`, `jp` in messages folder)

**Translation files** are in `messages/*.json`. When adding new strings:
1. Add keys to both `messages/ar.json` and `messages/en.json`
2. Use the `useTranslations()` hook in components
3. Group related translations under namespaces (e.g., `Navbar`, `Metadata`, `Home`)

**Locale-aware routing**:
- Use `Link` from `@/i18n/navigation` (not `next/link`) for internal links
- Use `useRouter()` from `@/i18n/navigation` for programmatic navigation
- These wrappers automatically maintain the current locale

### RTL/LTR Support

The app fully supports right-to-left (RTL) layouts for Arabic:
- Direction is set on `<html dir="rtl|ltr">` in `src/app/[locale]/layout.tsx`
- Font families are conditionally applied based on locale:
  - **Arabic**: Cairo (headings), Tajawal variants (body text)
  - **English**: Inter (all text)
- Fonts are defined in `src/lib/fonts.ts` and loaded as CSS variables
- Components check `params.locale === "ar"` to apply locale-specific styles

### File Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-based routing (hidden in URLs)
│   │   ├── layout.tsx      # Per-locale layout with fonts, metadata, analytics
│   │   ├── page.tsx        # Home page
│   │   ├── healthycure/    # About company page
│   │   └── products/       # Product pages (e.g., omepure)
│   ├── layout.tsx          # Root layout (minimal, just returns children)
│   └── globals.css         # Global styles with CSS variables
├── components/
│   ├── pages/              # Page-specific components
│   │   ├── HomeIndex.tsx   # Home page container
│   │   └── sections/       # Reusable page sections (Hero, Products, etc.)
│   ├── ui/                 # shadcn/ui components (Button, Card, etc.)
│   └── [Navbar, Footer, etc.] # Shared layout components
├── i18n/
│   ├── routing.ts          # Locale configuration (IMPORTANT: localePrefix: "never")
│   ├── request.ts          # Server-side locale resolution
│   └── navigation.ts       # Locale-aware Link and Router
└── lib/
    ├── fonts.ts            # Local font definitions
    └── utils.ts            # Utility functions (cn, etc.)
```

### Component Patterns

**Client vs Server Components**:
- Page sections and interactive components use `"use client"` directive
- Page components (`src/app/[locale]/*/page.tsx`) are server components by default
- Use `useTranslations()` in client components, `getTranslations()` in server components

**Styling**:
- Tailwind CSS with custom theme in `tailwind.config.ts`
- CSS variables for theming in `globals.css` (supports dark mode)
- shadcn/ui components in `src/components/ui/`
- Framer Motion for animations

**Font Application Pattern**:
Most components use this pattern for locale-aware fonts:
```typescript
const isArabic = params.locale === "ar";
const headingFontStyle = isArabic
  ? { fontFamily: "var(--font-cairo)" }
  : { fontFamily: "var(--font-inter)" };
const bodyFontStyle = isArabic
  ? { fontFamily: "var(--font-tajawal-bold)" }
  : { fontFamily: "var(--font-inter)" };
```

### GitHub Pages Deployment

**Configuration**:
- `next.config.ts` conditionally enables static export when `GITHUB_ACTIONS=true`
- `basePath: "/healthy-site"` is applied in production
- Images are unoptimized for static export
- Trailing slashes are enabled for GitHub Pages compatibility

**Workflow**:
- `.github/workflows/deploy.yml` runs on push to `main`
- Uses Bun for faster builds
- Outputs to `./out` directory
- Deploys to `gh-pages` branch

When testing locally before deployment, build with:
```bash
GITHUB_ACTIONS=true bun run build
```

## Important Constraints

1. **No locale prefixes in URLs**: Do not assume URLs will have `/en` or `/ar`. The routing system handles locale detection transparently.

2. **Static export limitations**: When `GITHUB_ACTIONS=true`:
   - No dynamic server-side features (API routes, ISR, etc.)
   - Images must be unoptimized
   - All pages must be statically generated

3. **Metadata**: Page metadata is generated in `generateMetadata()` functions and should include locale-specific content using `getTranslations()`.

4. **Theme**: The app defaults to dark mode (`defaultTheme="dark"` in ThemeProvider).
