import localFont from "next/font/local";

// Arabic fonts
export const cairo = localFont({
  src: "../../public/fonts/cairo.ttf",
  variable: "--font-cairo",
  display: "swap",
});

// Individual Tajawal variants
export const tajawalLight = localFont({
  src: "../../public/fonts/Tajawal-Light.ttf",
  variable: "--font-tajawal-light",
  weight: "300",
  display: "swap",
});

export const tajawalRegular = localFont({
  src: "../../public/fonts/Tajawal-Regular.ttf", // Make sure this file exists
  variable: "--font-tajawal-regular",
  weight: "400",
  display: "swap",
});

export const tajawalBold = localFont({
  src: "../../public/fonts/Tajawal-Bold.ttf",
  variable: "--font-tajawal-bold",
  weight: "700",
  display: "swap",
});

// Combined Tajawal font for CSS variables
export const tajawal = localFont({
  src: [
    {
      path: "../../public/fonts/Tajawal-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Tajawal-Regular.ttf", // Make sure this file exists
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Tajawal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tajawal",
  display: "swap",
});

// English font
export const inter = localFont({
  src: "../../public/fonts/inter.ttf",
  variable: "--font-inter",
  display: "swap",
});
