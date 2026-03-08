import Hero from "@/components/home/hero";
import Showcase from "@/components/home/showcase";
import Features from "@/components/home/features";
import CallToAction from "@/components/home/cta";
import { SmoothScrolling } from "@/components/system/smooth-scrolling";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Void Icons",
    "applicationCategory": "DeveloperTool",
    "operatingSystem": "Web",
    "description": "A meticulously crafted collection of animated SVG icons built for modern React and Next.js applications.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Lightweight SVG Icons",
      "Built-in Animations with Framer Motion",
      "Customizable with Tailwind CSS",
      "Open Source"
    ]
  };

  return (
    <main className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Showcase />
      <Features />
      <CallToAction />
    </main>
  );
}
