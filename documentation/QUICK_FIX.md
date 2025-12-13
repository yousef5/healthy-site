# 🚨 QUICK FIX: Remove Old `/_locales/` Structure

## The Problem
Your site is using old URLs with `/_locales/en/` instead of `/en/`

## The Solution (5 Minutes)

### Step 1: Delete Everything from cPanel
1. Login to cPanel File Manager
2. Go to `public_html`
3. Select ALL files and folders
4. Delete everything
5. Confirm the folder is empty

### Step 2: Upload New Build
1. Download `healthy-site.zip` from your project (13MB)
2. Upload to `public_html` via File Manager
3. Right-click → Extract
4. Move all files from extracted folder to root
5. Delete the zip and empty folder

### Step 3: Verify Structure
Upload and visit `check-structure.php` in your browser:
```
https://healthy.com.eg/check-structure.php
```

This will show you if the structure is correct.

Expected result:
```
✅ CORRECT STRUCTURE!
✅ /en/ folder exists
✅ /ar/ folder exists
✅ No /_locales/ folder
```

**Then DELETE check-structure.php**

### Step 4: Test URLs

Visit these (replace with your domain):
- ✅ `https://healthy.com.eg/` → redirects to `/en/`
- ✅ `https://healthy.com.eg/en/` → English site
- ✅ `https://healthy.com.eg/ar/` → Arabic site
- ❌ `https://healthy.com.eg/_locales/en/` → should 404

### Step 5: Clear Cache
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Test in incognito mode

## Files You Have

After upload, your structure should be:
```
public_html/
├── .htaccess              ✅ Critical!
├── index.html             ✅ Redirects to /en/
├── en/                    ✅ English site (NOT /_locales/en/)
├── ar/                    ✅ Arabic site (NOT /_locales/ar/)
├── _next/                 ✅ Assets
├── images/                ✅
└── logos/                 ✅
```

## What NOT to See
```
❌ _locales/               DELETE if exists!
❌ _locales/en/            DELETE if exists!
❌ _locales/ar/            DELETE if exists!
```

## Still Having Issues?

1. **Check File Manager**: Make sure NO `_locales` folder exists
2. **Rebuild locally**:
   ```bash
   bun run build:cpanel
   ```
   This creates a fresh `healthy-site.zip`

3. **Re-upload**: Follow steps 1-5 again

## Why This Happened

The old build used a restructure script that created the `/_locales/` structure. The new build is cleaner with direct `/en/` and `/ar/` paths.

## Quick Commands

On your local machine:
```bash
# Get fresh build
bun run build:cpanel

# Upload healthy-site.zip to cPanel
# Extract and test
```

---

**After following these steps, your site will use `/en/` and `/ar/` URLs!** 🎉
