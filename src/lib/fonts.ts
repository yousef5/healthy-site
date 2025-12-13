import { Inter, Cairo, Tajawal, Montserrat } from "next/font/google";

// English font - Inter with minimal weights
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Arabic fonts - Cairo for headings only
export const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["700"],
  variable: "--font-cairo",
  display: "swap",
});

// Tajawal - single weight for body text
export const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["700"],
  variable: "--font-tajawal",
  display: "swap",
});

// Montserrat for English headings
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-montserrat",
  display: "swap",
});
