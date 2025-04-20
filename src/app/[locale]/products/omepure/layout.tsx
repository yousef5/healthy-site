import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omepure | Healthy Web",
  description: "Premium health product to enhance your wellbeing",
};

export default function OmepureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
