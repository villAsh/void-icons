import Hero from "@/components/home/hero";
import Showcase from "@/components/home/showcase";
import Features from "@/components/home/features";
import CallToAction from "@/components/home/cta";
import { SmoothScrolling } from "@/components/system/smooth-scrolling";

export default function Home() {
  return (
    <SmoothScrolling>
      <main className="min-h-screen flex flex-col">
        <Hero />
        <Showcase />
        <Features />
        <CallToAction />
      </main>
    </SmoothScrolling>
  );
}
