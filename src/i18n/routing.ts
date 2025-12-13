import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // Used when no locale matches - English is now default
  defaultLocale: "en",

  // Always show locale prefix in URLs (/en, /ar)
  localePrefix: "always",
});
