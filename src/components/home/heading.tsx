"use client";

import { HomeItemVariants } from "@/lib/variants";
import { motion } from "motion/react";

export const HeroHeading = () => {
  return (
    <motion.h1
      variants={HomeItemVariants}
      className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] mb-8 text-black dark:text-white leading-[1.05] z-50"
    >
      Lucide icons <br className="hidden md:block" />
      <span className="text-black/40 dark:text-white/40">Now in motion</span>
    </motion.h1>
  );
};
