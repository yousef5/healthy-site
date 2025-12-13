# Deployment Guide - Healthy Pharma

## Quick Start

### For cPanel/Apache Production Server

```bash
# Build and create zip
bun run build:cpanel

# This creates: healthy-site.zip (ready for upload)
```

## What's Inside healthy-site.zip

```
healthy-site.zip
├── .htaccess              # Apache configuration (critical!)
├── index.html             # Root redirect to /en/
├── en/                    # English site
│   ├── index.html
│   ├── about-us/
│   ├── prices/
│   │   ├── omepure10ml/
│   │   ├── germeten10ml/
│   │   └── ...
│   └── ...
├── ar/                    # Arabic site
│   ├── index.html
│   ├── about-us/
│   ├── prices/
│   └── ...
├── _next/                 # Next.js static assets
├── images/                # Image assets
├── logos/                 # Logo files
└── fonts/                 # Font files
```

## cPanel Upload Steps

1. **Login to cPanel**
   - Go to your hosting control panel
   - Login with your credentials

2. **Open File Manager**
   - Navigate to "Files" section
   - Click "File Manager"

3. **Navigate to public_html**
   - Select "public_html" (or your domain folder)
   - **IMPORTANT**: Backup existing files first!

4. **Clear Previous Files**
   - Select all existing files
   - Click "Delete"
   - Confirm deletion

5. **Upload healthy-site.zip**
   - Click "Upload" button
   - Select `healthy-site.zip` from your computer
   - Wait for upload to complete (13MB file)

6. **Extract Files**
   - Go back to File Manager
   - Right-click `healthy-site.zip`
   - Select "Extract"
   - Extract to current directory

7. **Move Files to Root**
   - Open the extracted folder
   - Select ALL files and folders
   - Click "Move"
   - Move to: `/public_html/` (or your domain root)
   - Confirm move

8. **Clean Up**
   - Delete `healthy-site.zip`
   - Delete the empty extracted folder

9. **Set Permissions** (if needed)
   - Folders: 755
   - Files: 644
   - .htaccess: 644

## Verify Deployment

Visit these URLs to test:

### Root Access
- `https://yourdomain.com/` → Should redirect to `/en/`

### English Site
- `https://yourdomain.com/en/`
- `https://yourdomain.com/en/about-us/`
- `https://yourdomain.com/en/prices/`
- `https://yourdomain.com/en/prices/omepure10ml/`

### Arabic Site
- `https://yourdomain.com/ar/`
- `https://yourdomain.com/ar/about-us/`
- `https://yourdomain.com/ar/prices/`

### Case-Insensitive URLs (should redirect to lowercase)
- `https://yourdomain.com/en/prices/Omepure10ml/` → `/en/prices/omepure10ml/`
- `https://yourdomain.com/en/prices/OMEPURE10ML/` → `/en/prices/omepure10ml/`

### Language Switcher
- Click language toggle on any page
- Should switch between `/en/` and `/ar/` versions
- Should maintain the same page (e.g., about-us stays on about-us)

## Troubleshooting

### .htaccess Not Working
**Symptoms**: Case-insensitive URLs return 404
**Solution**:
- Verify .htaccess is uploaded and in root directory
- Check file permissions (should be 644)
- Enable mod_rewrite in cPanel (usually enabled by default)

### CSS/JS Not Loading
**Symptoms**: Site shows unstyled HTML
**Solution**:
- Check browser console for 404 errors
- Verify `_next/` folder is uploaded
- Clear browser cache
- Check folder permissions (755 for folders)

### 404 on All Pages
**Symptoms**: Only root loads, all other pages 404
**Solution**:
- Verify all folders are in root (not in a subfolder)
- Check .htaccess is present
- Verify mod_rewrite is enabled

### Language Switcher Not Working
**Symptoms**: Clicking language buttons does nothing
**Solution**:
- Check browser console for JavaScript errors
- Verify both /en/ and /ar/ folders exist
- Hard refresh browser (Ctrl+Shift+R)

## Production URL Structure

After deployment, your site will have:

| URL | Behavior |
|-----|----------|
| `/` | Redirects to `/en/` |
| `/en/` | English homepage |
| `/ar/` | Arabic homepage |
| `/en/about-us/` | English About Us |
| `/ar/about-us/` | Arabic About Us |
| `/prices/xxx` | Redirects to `/en/prices/xxx` |
| `/en/prices/Omepure10ml/` | Redirects to `/en/prices/omepure10ml/` |

## Features Included

✅ Bilingual (English & Arabic)
✅ English as default locale
✅ Language switcher on all pages
✅ Case-insensitive product URLs
✅ SEO optimized (meta tags, structured data)
✅ Mobile responsive
✅ Dark mode
✅ Fast loading (static site)
✅ Secure (security headers in .htaccess)
✅ Cached assets (1 year cache for static files)

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify all files uploaded correctly
3. Check .htaccess permissions
4. Test in incognito/private mode
5. Contact hosting support if mod_rewrite issues persist
