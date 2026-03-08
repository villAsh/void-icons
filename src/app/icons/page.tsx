import { Metadata } from "next";
import IconsClient from "@/components/browse-icons/icons-client";
import { ANIMATED_ICONS } from "@/lib/collections";

export const metadata: Metadata = {
  title: "Browse 100+ Animated SVG Icons for React | Void Icons",
  description:
    "Explore a curated collection of motion-ready Lucide icons. High-performance, customizable, and designed for modern React and Next.js interfaces.",
  keywords: [
    "animated icons library",
    "framer motion icons",
    "react animated svgs",
    "lucide animation component",
    "void icons collection",
    "open source animated icons",
  ],
  alternates: {
    canonical: "https://void-icons.vercel.app/icons",
  },
};

export default function IconsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Void Icons Collection",
    "description": "A collection of meticulously crafted animated SVG icons for React.",
    "numberOfItems": ANIMATED_ICONS.length,
    "itemListElement": ANIMATED_ICONS.slice(0, 20).map((icon, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": icon.label,
      "description": `Animated ${icon.label} icon for React applications.`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IconsClient />
    </>
  );
}
