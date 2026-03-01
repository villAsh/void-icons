import Zap from "@/icons/zap";
import Shield from "@/icons/shield";
import Sparkles from "@/icons/sparkles";
import type { ShowcaseItem } from "@/components/home/showcase";
import Globe from "@/icons/globe";
import Heart from "@/icons/heart";
import Star from "@/icons/star";
import Cloud from "@/icons/cloud";
import Sun from "@/icons/sun";
import Moon from "@/icons/moon";

export const features = [
  {
    title: "Drop-in Ready",
    description:
      "Import and use instantly. No wrappers, no config, no surprises.",
    icon: Shield,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Performant SVG",
    description:
      "Lightweight, inline SVGs optimized for the web. No external requests, meaning instant loading without layout shift.",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Fully Customizable",
    description:
      "Control size, color, stroke width, and animation variants using standard React props and utility classes.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
  },
];

export const ANIMATED_ICONS: ShowcaseItem[] = [
  { icon: Zap, name: "zap", label: "Zap" },
  { icon: Shield, name: "shield", label: "Shield" },
  { icon: Globe, name: "globe", label: "Globe" },
  { icon: Heart, name: "heart", label: "Heart" },
  { icon: Star, name: "star", label: "Star" },
  { icon: Sparkles, name: "sparkles", label: "Sparkles" },
  { icon: Cloud, name: "cloud", label: "Cloud" },
  { icon: Sun, name: "sun", label: "Sun" },
  { icon: Moon, name: "moon", label: "Moon" },
];
