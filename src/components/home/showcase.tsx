"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { ShowcaseHeading } from "./heading";
import Sun from "@/icons/sun";
import Moon from "@/icons/moon";
import Zap from "@/icons/zap";
import Shield from "@/icons/shield";
import Globe from "@/icons/globe";
import Heart from "@/icons/heart";
import Star from "@/icons/star";
import Sparkles from "@/icons/sparkles";
import Cloud from "@/icons/cloud";
import { MoveUpRight } from "lucide-react";
import type { IconProps } from "@/types/icon";
import type { ComponentType } from "react";

interface ShowcaseItem {
  icon: ComponentType<IconProps>;
  name: string;
  label: string;
}

const ANIMATED_ICONS: ShowcaseItem[] = [
  { icon: Zap, name: "zap", label: "Energy" },
  { icon: Shield, name: "shield", label: "Security" },
  { icon: Globe, name: "globe", label: "Global" },
  { icon: Heart, name: "heart", label: "Like" },
  { icon: Star, name: "star", label: "Favorite" },
  { icon: Sparkles, name: "sparkles", label: "Magic" },
  { icon: Cloud, name: "cloud", label: "Cloud" },
  { icon: Sun, name: "sun", label: "Light" },
  { icon: Moon, name: "moon", label: "Dark" },
];

interface ShowcaseCardProps {
  item: ShowcaseItem;
  index: number;
}

const ShowcaseCard = ({ item, index }: ShowcaseCardProps) => {
  const IconComponent = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex flex-col items-center justify-center p-8 bg-card border border-border/50 rounded-3xl hover:border-primary/40 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10 cursor-pointer overflow-hidden"
    >
      {/* Background glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4 pointer-events-none rounded-3xl"
      />

      <div className="mb-4 text-foreground group-hover:text-primary transition-colors duration-300 relative z-10">
        <IconComponent size={36} strokeWidth={1.5} />
      </div>

      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 relative z-10">
        {item.label}
      </span>
    </motion.div>
  );
};

export const Showcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <ShowcaseHeading />
          <Button
            href="/icons"
            variant="link"
            className="hidden md:inline-flex items-center gap-2 group p-0"
          >
            View all icons{" "}
            <MoveUpRight
              size={16}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {ANIMATED_ICONS.map((item, index) => (
            <ShowcaseCard key={item.name} item={item} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button href="/icons" variant="link" className="group p-0">
            View all icons{" "}
            <MoveUpRight
              size={16}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
