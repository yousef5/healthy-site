# cPanel Cleanup & Re-deployment Guide

## Problem
You're seeing old URLs with `/_locales/en/` instead of `/en/`. This is because you have an old build deployed.

## Solution: Clean Deployment

### Step 1: Delete ALL Old Files from cPanel

**IMPORTANT**: You must delete everything, including the old `_locales` folder.

1. Login to cPanel File Manager
2. Navigate to `public_html` (or your domain folder)
3. **Select ALL files and folders**:
   - Press `Ctrl+A` (Windows/Linux) or `Cmd+A` (Mac)
   - Or click the checkbox at the top to select all
4. Click "Delete"
5. Confirm deletion
6. **Verify the folder is completely empty**

### Step 2: Upload New Build

1. Download the latest `healthy-site.zip` from your project
   ```bash
   # On your local machine, make sure you have the latest build:
   bun run build:cpanel
   ```

2. In cPanel File Manager:
   - Click "Upload"
   - Select the NEW `healthy-site.zip`
   - Wait for upload to complete (13MB)

3. Extract the zip:
   - Right-click `healthy-site.zip`
   - Select "Extract"
   - Extract to current directory

4. Move files to root:
   - Open the extracted folder
   - Select ALL files and folders inside
   - Click "Move"
   - Move to `/public_html/` (your root)
   - Confirm move

5. Delete the zip and empty folder

### Step 3: Verify New Structure

In cPanel File Manager, you should see:
```
public_html/
├── .htaccess
├── index.html
├── en/               ← NOT /_locales/en/
│   ├── index.html
│   ├── about-us/
│   └── ...
├── ar/               ← NOT /_locales/ar/
│   ├── index.html
│   ├── about-us/
│   └── ...
├── _next/
├── images/
└── ...
```

**❌ Should NOT see**:
- `_locales/` folder
- `/_locales/en/` folder
- `/_locales/ar/` folder

### Step 4: Test Your Site

Visit these URLs (replace with your domain):

✅ **Should Work**:
- `https://healthy.com.eg/` → redirects to `/en/`
- `https://healthy.com.eg/en/`
- `https://healthy.com.eg/ar/`
- `https://healthy.com.eg/en/about-us/`
- `https://healthy.com.eg/en/prices/omepure10ml/`

❌ **Should NOT exist** (404 expected):
- `https://healthy.com.eg/_locales/en/` → should 404
- `https://healthy.com.eg/_locales/ar/` → should 404

### Step 5: Clear Browser Cache

After deployment:
1. Hard refresh your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Or clear browser cache completely
3. Try in incognito/private mode

## Why This Happened

The old build used a `restructure-static.js` script that created the `/_locales/` structure. The new build doesn't use this anymore and has a cleaner structure with direct `/en/` and `/ar/` paths.

## Quick Checklist

- [ ] Deleted ALL old files from public_html
- [ ] Uploaded NEW healthy-site.zip (built after Dec 14, 2025)
- [ ] Extracted to public_html root
- [ ] Verified no `_locales` folder exists
- [ ] Verified `en/` and `ar/` folders exist at root level
- [ ] Tested URLs without `/_locales/`
- [ ] Cleared browser cache

## If Still Seeing `/_locales/`

1. **Check File Manager**: Make sure there's NO `_locales` folder
2. **Check .htaccess**: Make sure it's the new one (should have case-insensitive redirects)
3. **Clear browser cache**: Old redirects might be cached
4. **Test in incognito**: Rule out browser caching
5. **Check you're not on a staging/old subdomain**: Make sure you're testing the right domain

## New Build Information

**Build Date**: December 14, 2025
**Structure**: `/en/` and `/ar/` at root level
**No restructure script**: The build is used as-is
**File**: `healthy-site.zip` (13MB)

---

**After following these steps, your site should use `/en/` and `/ar/` URLs!**
