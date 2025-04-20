import { notFound } from "next/navigation";

export default function CatchAllPage() {
  notFound();
}

// When using "output: export", all dynamic routes must define generateStaticParams
export function generateStaticParams() {
  // For static export, we need to specify at least one path
  // Include a dummy path for each locale
  return [
    { locale: "en", rest: ["not-found"] },
    { locale: "ar", rest: ["not-found"] },
  ];
}
