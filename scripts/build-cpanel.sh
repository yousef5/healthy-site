#!/bin/bash

# ============================================
# Build Script for cPanel Deployment
# Healthy Pharma Static Site
# ============================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
echo "============================================"
echo "   Healthy Pharma - cPanel Build Script"
echo "============================================"
echo -e "${NC}"

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"

# Clean previous builds
echo -e "${YELLOW}[1/5] Cleaning previous builds...${NC}"
rm -rf out
rm -f healthy-site.zip
echo -e "${GREEN}✓ Cleaned${NC}"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}[2/5] Installing dependencies...${NC}"
    bun install
    echo -e "${GREEN}✓ Dependencies installed${NC}"
else
    echo -e "${GREEN}[2/5] ✓ Dependencies already installed${NC}"
fi

# Build static site for cPanel (no basePath)
echo -e "${YELLOW}[3/4] Building static site for cPanel...${NC}"
STATIC_EXPORT=true bun run build
echo -e "${GREEN}✓ Build complete${NC}"

# Verify important files exist
echo -e "${YELLOW}[4/4] Verifying build output...${NC}"
if [ ! -f "out/.htaccess" ]; then
    echo -e "${RED}✗ .htaccess not found!${NC}"
    exit 1
fi
if [ ! -f "out/en/index.html" ]; then
    echo -e "${RED}✗ English index.html not found!${NC}"
    exit 1
fi
if [ ! -f "out/ar/index.html" ]; then
    echo -e "${RED}✗ Arabic index.html not found!${NC}"
    exit 1
fi
echo -e "${GREEN}✓ All critical files present${NC}"

# Create zip file
echo -e "${YELLOW}[5/5] Creating zip archive...${NC}"
cd out
zip -r ../healthy-site.zip . -x "*.DS_Store" -x "__MACOSX/*"
cd ..

# Get file size
ZIP_SIZE=$(du -h healthy-site.zip | cut -f1)

echo ""
echo -e "${GREEN}============================================${NC}"
echo -e "${GREEN}   Build Complete!${NC}"
echo -e "${GREEN}============================================${NC}"
echo ""
echo -e "Output file: ${BLUE}healthy-site.zip${NC} (${ZIP_SIZE})"
echo ""
echo -e "${YELLOW}cPanel Upload Instructions:${NC}"
echo ""
echo "1. Login to your cPanel account"
echo "2. Open 'File Manager'"
echo "3. Navigate to 'public_html' (or your domain folder)"
echo "4. Delete all existing files (backup first if needed)"
echo "5. Click 'Upload' and select 'healthy-site.zip'"
echo "6. After upload, right-click the zip file and select 'Extract'"
echo "7. Move all files from extracted folder to public_html root"
echo "8. Delete the zip file and empty folder"
echo ""
echo -e "${YELLOW}Important:${NC}"
echo "- Make sure .htaccess is uploaded (handles redirects & clean URLs)"
echo "- Set folder permissions to 755"
echo "- Set file permissions to 644"
echo ""
echo -e "${YELLOW}URL Structure:${NC}"
echo "- Your site will redirect: / → /en/ (English default)"
echo "- English site: https://yourdomain.com/en/"
echo "- Arabic site: https://yourdomain.com/ar/"
echo "- Case-insensitive URLs work (e.g., /en/prices/Omepure10ml/ → /en/prices/omepure10ml/)"
echo ""
echo -e "${GREEN}Your site is ready for cPanel deployment!${NC}"
