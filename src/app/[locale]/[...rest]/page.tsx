import { notFound } from "next/navigation";

export default function CatchAllPage() {
  notFound();
}

// When using "output: export", all dynamic routes must define generateStaticParams
export function generateStaticParams() {
  // Generate an empty array since we don't actually want to pre-render any paths
  // This route is just a catch-all to show 404 for non-existent routes
  return [];
}
