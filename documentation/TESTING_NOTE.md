# Important: Local Testing vs Production

## ⚠️ Limitations of `serve` Package

The `serve` package used for local testing **does NOT** support:
- `.htaccess` files (Apache only)
- Case-insensitive URL redirects
- Advanced regex redirects

### What Works Locally (with `serve`):
✅ `/` → redirects to `/en/`
✅ `/en/` → serves English site
✅ `/ar/` → serves Arabic site
✅ `/prices/omepure10ml/` → redirects to `/en/prices/omepure10ml/`
✅ `/about-us` → redirects to `/en/about-us`

### What ONLY Works in Production (Apache with .htaccess):
❌ `/en/prices/Omepure10ml/` → redirects to `/en/prices/omepure10ml/` (lowercase)
❌ `/en/prices/OMEPURE10ML/` → redirects to `/en/prices/omepure10ml/` (lowercase)
❌ Case-insensitive redirects for all product variants

## For Local Testing

Use the correct lowercase URLs:
- ✅ `http://localhost:3000/en/prices/omepure10ml/`
- ✅ `http://localhost:3000/en/prices/germeten10ml/`
- ✅ `http://localhost:3000/ar/prices/alphadrink12/`

## For Production Testing

Once deployed to Apache server, all case variations will work:
- `https://healthy.com.eg/en/prices/Omepure10ml/` → redirects to `/en/prices/omepure10ml/`
- `https://healthy.com.eg/en/prices/OMEPURE10ML/` → redirects to `/en/prices/omepure10ml/`

The `.htaccess` file has all the case-insensitive redirects configured and will work perfectly on Apache/cPanel hosting.

## Testing Checklist

### Local (with serve):
- [ ] `/` redirects to `/en/`
- [ ] `/en/` loads English homepage
- [ ] `/ar/` loads Arabic homepage
- [ ] Language switcher works
- [ ] Navigation links work
- [ ] `/prices/omepure10ml/` redirects to `/en/prices/omepure10ml/`

### Production (Apache):
- [ ] All lowercase URLs work
- [ ] Case-insensitive URLs redirect properly
- [ ] Language switcher works
- [ ] All pages load with correct CSS/JS
