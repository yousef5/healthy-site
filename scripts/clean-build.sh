#!/bin/bash

# ===========================================
# Healthy Site - Clean & Build Script
# ===========================================

set -e  # Exit on any error

echo "=========================================="
echo "  HEALTHY SITE - CLEAN & BUILD"
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project root directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

echo -e "\n${BLUE}[1/5]${NC} Removing unused images from public folder..."

# List of unused images to delete
UNUSED_IMAGES=(
  # SVG files
  "public/file.svg"
  "public/globe.svg"
  "public/map-dark.svg"
  "public/map-light.svg"
  "public/map.svg"
  "public/next.svg"
  "public/vercel.svg"
  "public/window.svg"

  # Unused WEBP variants
  "public/images/hero7.webp"
  "public/images/hero8.webp"
  "public/images/hero9.webp"
  "public/logos/healthy.webp"

  # Location images
  "public/images/alexandria.jpg"
  "public/images/cairo.jpg"
  "public/images/delta.jpg"
  "public/images/map.jpg"
  "public/images/mash.jpg"
  "public/images/matrouh.jpg"
  "public/images/north-coast.jpg"
  "public/images/osis.jpg"
  "public/images/sini.jpg"
  "public/images/upper.jpg"
  "public/images/red-sea.webp"

  # Unused pharma logos
  "public/images/bayer.png"
  "public/images/eva.png"
  "public/images/gsk.png"
  "public/images/novartis.png"
  "public/images/pfizer.png"

  # Product detail images (unused)
  "public/products/choc1.jpg"
  "public/products/drink1.jpg"
  "public/products/drink2.jpg"
  "public/products/fresh1.jpg"
  "public/products/germ1.jpg"
  "public/products/germ2.jpg"
  "public/products/germ3.jpg"
  "public/products/germ4.jpg"
  "public/products/germ5.jpg"
  "public/products/jof1.jpg"
  "public/products/jof2.jpg"
  "public/products/jof3.jpg"
  "public/products/ome1.jpg"
  "public/products/ome2.jpg"
  "public/products/ome3.jpg"
  "public/products/ome4.jpg"
  "public/products/ome5.jpg"
  "public/products/ome6.jpg"
  "public/products/ome8.jpg"
  "public/products/ome9.jpg"

  # Miscellaneous
  "public/logos/logo.png"
  "public/og-image.png"
)

DELETED_COUNT=0
DELETED_SIZE=0

for img in "${UNUSED_IMAGES[@]}"; do
  if [ -f "$img" ]; then
    SIZE=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null || echo "0")
    DELETED_SIZE=$((DELETED_SIZE + SIZE))
    rm -f "$img"
    echo -e "  ${RED}✗${NC} Deleted: $img"
    DELETED_COUNT=$((DELETED_COUNT + 1))
  fi
done

DELETED_MB=$(echo "scale=2; $DELETED_SIZE / 1048576" | bc 2>/dev/null || echo "N/A")
echo -e "${GREEN}  ✓ Removed $DELETED_COUNT unused images (~${DELETED_MB}MB)${NC}"

echo -e "\n${BLUE}[2/5]${NC} Cleaning build cache..."
rm -rf .next
rm -rf out
rm -rf node_modules/.cache
echo -e "${GREEN}  ✓ Build cache cleared${NC}"

echo -e "\n${BLUE}[3/5]${NC} Installing dependencies..."
bun install --frozen-lockfile
echo -e "${GREEN}  ✓ Dependencies installed${NC}"

echo -e "\n${BLUE}[4/5]${NC} Running lint check..."
bun run lint --fix || true
echo -e "${GREEN}  ✓ Lint completed${NC}"

echo -e "\n${BLUE}[5/5]${NC} Building for static export..."
GITHUB_ACTIONS=true bun run build

echo -e "\n=========================================="
echo -e "${GREEN}  BUILD COMPLETED SUCCESSFULLY!${NC}"
echo -e "=========================================="
echo -e "Output directory: ${YELLOW}./out${NC}"
echo -e ""
echo -e "To preview locally:"
echo -e "  ${BLUE}bunx serve out${NC}"
echo -e ""
echo -e "To deploy to GitHub Pages:"
echo -e "  ${BLUE}git add . && git commit -m 'build' && git push${NC}"
echo -e "=========================================="
