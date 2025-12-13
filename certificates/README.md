# Certificate Images

This folder contains the official certification images for Healthy Pharma.

## Required Files

Please add the following certificate images to this folder:

### 1. GMP Certificate
- **Filename:** `gmp-certificate.webp` (primary) or `gmp-certificate.jpg` (fallback)
- **Recommended size:** 1200 x 900 pixels (4:3 aspect ratio)
- **Format:** WebP (preferred) or JPG
- **Quality:** High resolution for zoom/download functionality
- **Description:** Good Manufacturing Practice (GMP) Certificate from Egyptian Drug Authority

### 2. ISO Certificate
- **Filename:** `iso-certificate.webp` (primary) or `iso-certificate.jpg` (fallback)
- **Recommended size:** 1200 x 900 pixels (4:3 aspect ratio)
- **Format:** WebP (preferred) or JPG
- **Quality:** High resolution for zoom/download functionality
- **Description:** ISO 9001:2015 Quality Management System Certificate

## Image Optimization Tips

1. **Use WebP format** for best performance (smaller file size with high quality)
2. **Optimize images** before uploading to reduce file size
3. **Ensure legibility** - text on certificates should be readable when zoomed
4. **Recommended dimensions:** 1200px width, maintaining original aspect ratio
5. **File size:** Aim for under 500KB per image

## Converting to WebP

You can convert your JPG/PNG certificates to WebP using:
- Online tools: [Squoosh.app](https://squoosh.app/)
- Command line: `cwebp input.jpg -q 90 -o output.webp`
- Photoshop/GIMP: Save as WebP format

## File Naming Convention

The component expects specific filenames:
- GMP: `gmp-certificate.webp` or `gmp-certificate.jpg`
- ISO: `iso-certificate.webp` or `iso-certificate.jpg`

**Important:** Do not rename these files or the component won't find them.

## After Adding Images

Once you've added the certificate images:
1. Verify they display correctly by visiting `/certificate` page
2. Test the zoom functionality (click View Certificate)
3. Test the download functionality
4. Check both Arabic and English versions

## SEO Benefits

The refactored certificate page includes:
- ✅ Optimized Next.js Image components
- ✅ Proper alt text for accessibility and SEO
- ✅ Open Graph images for social sharing
- ✅ Lazy loading for performance
- ✅ Priority loading for first certificate
- ✅ Responsive images with proper sizing
- ✅ Structured data for search engines
