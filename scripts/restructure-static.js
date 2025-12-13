#!/usr/bin/env node
/**
 * Post-build script to restructure static export
 * Removes /ar/ and /en/ prefixes, uses localStorage for locale detection
 */

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const arDir = path.join(outDir, 'ar');
const enDir = path.join(outDir, 'en');

// Files/folders that already exist at root and should NOT be overwritten
// Note: index.html is NOT in this list - we WANT to overwrite the redirect stub with actual Arabic content
const doNotOverwrite = ['_next', 'images', 'logos', 'fonts', 'departments', 'healthyCure', 'pharmacies', 'products', 'suppliers', 'favicon.ico', 'robots.txt', 'sitemap.xml', '.nojekyll', 'google52d37058772b10e6.html'];

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;

  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    for (const file of files) {
      copyRecursiveSync(path.join(src, file), path.join(dest, file));
    }
  } else {
    // Ensure parent directory exists
    const parentDir = path.dirname(dest);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
  }
}

// Locale detection script to inject into HTML files
const localeDetectionScript = `<script>
(function() {
  var savedLocale = localStorage.getItem('locale');
  if (savedLocale === 'en' && !window.location.pathname.startsWith('/_locales/en')) {
    var currentPath = window.location.pathname;
    var newPath = '/_locales/en' + (currentPath === '/' ? '/' : currentPath);
    window.location.replace(newPath);
  }
})();
</script>`;

// List of known internal page routes that need locale prefix
const internalRoutes = [
  'about-us',
  'our-vision',
  'our-mission',
  'certificate',
  'contact-us',
  'healthycure',
  'products',
  'prices'
];

function updateHtmlLinks(filePath, injectLocaleScript = false, isEnglishLocale = false) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    if (isEnglishLocale) {
      // For English locale files, update links to stay within /_locales/en/

      // First, update /en/xxx and /ar/xxx to /_locales/en/xxx
      content = content.replace(/href="\/en\//g, 'href="/_locales/en/');
      content = content.replace(/href='\/en\//g, "href='/_locales/en/");
      content = content.replace(/href="\/en"/g, 'href="/_locales/en/"');
      content = content.replace(/href='\/en'/g, "href='/_locales/en/'");
      content = content.replace(/href="\/ar\//g, 'href="/_locales/en/');
      content = content.replace(/href='\/ar\//g, "href='/_locales/en/");
      content = content.replace(/href="\/ar"/g, 'href="/_locales/en/"');
      content = content.replace(/href='\/ar'/g, "href='/_locales/en/'");

      // Update internal page links (without locale prefix) to /_locales/en/
      // These are links like /about-us/, /products/, /prices/ etc.
      for (const route of internalRoutes) {
        // Match href="/route/" or href="/route" (with or without trailing slash)
        const routeRegex = new RegExp(`href="\\/${route}(\\/[^"]*|\\/?)"`, 'g');
        content = content.replace(routeRegex, (match, rest) => {
          // Check if already has /_locales/en/ prefix
          if (match.includes('/_locales/en/')) return match;
          return `href="/_locales/en/${route}${rest}"`;
        });
        const routeRegexSingle = new RegExp(`href='\\/${route}(\\/[^']*|\\/?)'`, 'g');
        content = content.replace(routeRegexSingle, (match, rest) => {
          if (match.includes('/_locales/en/')) return match;
          return `href='/_locales/en/${route}${rest}'`;
        });
      }

      // Update root links (href="/") to stay on English locale
      // Match href="/" exactly (not href="/something")
      content = content.replace(/href="\/(?=["\s>])/g, 'href="/_locales/en/');
      content = content.replace(/href='\/(?=['\s>])/g, "href='/_locales/en/");

      // Fix double replacement issues (e.g., /_locales/en/_locales/en/)
      content = content.replace(/\/_locales\/en\/_locales\/en\//g, '/_locales/en/');

    } else {
      // For Arabic (root) files, update links to point to root
      content = content.replace(/href="\/ar\//g, 'href="/');
      content = content.replace(/href="\/en\//g, 'href="/');
      content = content.replace(/href='\/ar\//g, "href='/");
      content = content.replace(/href='\/en\//g, "href='/");

      // Also update any remaining /ar" or /en" (root locale links)
      content = content.replace(/href="\/ar"/g, 'href="/"');
      content = content.replace(/href="\/en"/g, 'href="/"');

      // Inject locale detection script into root Arabic pages (not _locales)
      // Check for our specific script marker to avoid duplicate injection
      if (injectLocaleScript && !content.includes('/_locales/en')) {
        // Insert after opening <head> tag
        content = content.replace('<head>', '<head>' + localeDetectionScript);
      }
    }

    fs.writeFileSync(filePath, content);
  } catch (e) {
    // Skip files that can't be read
  }
}

function processHtmlFilesRecursive(dir, injectLocaleScript = false, isEnglishLocale = false) {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    try {
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        // Don't inject locale script into _locales directory
        const shouldInject = injectLocaleScript && item !== '_locales';
        // Check if entering the _locales/en directory
        const isEnDir = isEnglishLocale || (item === 'en' && dir.includes('_locales'));
        processHtmlFilesRecursive(itemPath, shouldInject, isEnDir);
      } else if (item.endsWith('.html')) {
        updateHtmlLinks(itemPath, injectLocaleScript, isEnglishLocale);
      }
    } catch (e) {
      // Skip items that can't be accessed
    }
  }
}

function deleteRecursive(dir) {
  if (!fs.existsSync(dir)) return;

  try {
    fs.rmSync(dir, { recursive: true, force: true });
  } catch (e) {
    console.log(`Warning: Could not delete ${dir}`);
  }
}

console.log('📦 Restructuring static export...');

// Create locale backup directories
const localesDir = path.join(outDir, '_locales');
const arBackupDir = path.join(localesDir, 'ar');
const enBackupDir = path.join(localesDir, 'en');

// Clean up any existing _locales
deleteRecursive(localesDir);
fs.mkdirSync(localesDir, { recursive: true });

// Backup ar and en to _locales
if (fs.existsSync(arDir)) {
  copyRecursiveSync(arDir, arBackupDir);
  console.log('✓ Backed up Arabic pages to _locales/ar');
}

if (fs.existsSync(enDir)) {
  copyRecursiveSync(enDir, enBackupDir);
  console.log('✓ Backed up English pages to _locales/en');
}

// Copy ALL content from Arabic (default) to root
if (fs.existsSync(arDir)) {
  const copyToRoot = (srcDir, destDir) => {
    const items = fs.readdirSync(srcDir);
    for (const item of items) {
      const srcPath = path.join(srcDir, item);
      const destPath = path.join(destDir, item);

      const stat = fs.statSync(srcPath);

      if (stat.isDirectory()) {
        // For directories, always copy/merge
        copyRecursiveSync(srcPath, destPath);
      } else {
        // For files at root level of ar/, check if we should overwrite
        if (srcDir === arDir && doNotOverwrite.includes(item)) {
          // Skip - don't overwrite root files like favicon, robots.txt etc
          continue;
        }
        copyRecursiveSync(srcPath, destPath);
      }
    }
  };

  copyToRoot(arDir, outDir);
  console.log('✓ Copied Arabic pages to root (default locale)');
}

// Update HTML links in all files and inject locale detection into root pages
processHtmlFilesRecursive(outDir, true, false);
console.log('✓ Updated HTML links (Arabic → root, English → /_locales/en/)');
console.log('✓ Injected locale detection script into Arabic pages');

// Remove old ar/en directories
deleteRecursive(arDir);
deleteRecursive(enDir);
console.log('✓ Cleaned up old locale directories');

// Verify key pages exist
const checkPages = ['index.html', 'about-us/index.html', 'contact-us/index.html', 'products/omepure/index.html', 'healthycure/index.html', 'prices/index.html'];
console.log('');
console.log('📋 Verifying pages:');
for (const page of checkPages) {
  const exists = fs.existsSync(path.join(outDir, page));
  console.log(`   ${exists ? '✓' : '✗'} /${page.replace('/index.html', '/')}`);
}

console.log('');
console.log('✅ Static restructure complete!');
console.log('');
console.log('Run: bun run serve');
console.log('Open: http://localhost:3000/');
