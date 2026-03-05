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
import Copy from "@/icons/copy";
import Check from "@/icons/check";
import terminal from "@/icons/terminal";
import activity from "@/icons/activity";

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
  { icon: Zap, name: "zap", label: "Zap", category: "Development" },
  { icon: Shield, name: "shield", label: "Shield", category: "Security" },
  { icon: Globe, name: "globe", label: "Globe", category: "Communication" },
  { icon: Heart, name: "heart", label: "Heart", category: "Social" },
  { icon: Star, name: "star", label: "Star", category: "Social" },
  { icon: Sparkles, name: "sparkles", label: "Sparkles", category: "Effects" },
  { icon: Cloud, name: "cloud", label: "Cloud", category: "Weather" },
  { icon: Sun, name: "sun", label: "Sun", category: "Weather" },
  { icon: Moon, name: "moon", label: "Moon", category: "Weather" },
  { icon: Copy, name: "copy", label: "Copy", category: "Communication" },
  { icon: Check, name: "check", label: "Check", category: "Communication" },
  {
    icon: terminal,
    name: "terminal",
    label: "Terminal",
    category: "Communication",
  },
  {
    icon: activity,
    name: "activity",
    label: "Activity",
    category: "Effects",
  },
];
