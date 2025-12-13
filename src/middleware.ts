import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Normalize product URLs to lowercase to match generateStaticParams
  // Handles both old and new structures:
  // - /_locales/en/prices/[ProductId] (old structure)
  // - /_locales/ar/prices/[ProductId] (old structure)
  // - /en/prices/[ProductId] (new structure)
  // - /ar/prices/[ProductId] (new structure)
  // - /prices/[ProductId] (fallback)
  const pricesMatch = pathname.match(/^(\/_locales\/en|\/_locales\/ar|\/en|\/ar)?\/prices\/([^/]+)\/?$/);
  if (pricesMatch && pricesMatch[2]) {
    const localePrefix = pricesMatch[1] || ''; // e.g., "/_locales/en", "/en", "/ar", or ""
    const productId = pricesMatch[2];
    const lowercaseProductId = productId.toLowerCase();

    // If the productId contains uppercase letters, redirect to lowercase version
    if (productId !== lowercaseProductId) {
      const url = request.nextUrl.clone();
      url.pathname = `${localePrefix}/prices/${lowercaseProductId}/`;

      // Get the locale from cookie if it exists to maintain it during redirect
      const localeCookie = request.cookies.get('NEXT_LOCALE');
      const response = NextResponse.redirect(url, 308);

      // Preserve the locale cookie in the redirect
      if (localeCookie) {
        response.cookies.set('NEXT_LOCALE', localeCookie.value);
      }

      return response;
    }
  }

  // Run the next-intl middleware
  const response = intlMiddleware(request);

  // Ensure locale cookie is set for better persistence
  // This helps maintain locale across navigation
  if (response) {
    const localeCookie = request.cookies.get('NEXT_LOCALE');
    if (localeCookie && !response.cookies.get('NEXT_LOCALE')) {
      response.cookies.set('NEXT_LOCALE', localeCookie.value, {
        sameSite: 'lax',
        path: '/',
      });
    }
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
