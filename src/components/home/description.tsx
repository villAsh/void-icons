"use client";
import { HomeItemVariants } from "@/lib/variants";
import { motion } from "motion/react";

export const HeroDescription = () => {
  return (
    <motion.p
      variants={HomeItemVariants}
      className="text-lg md:text-xl text-black/60 dark:text-white/60 mb-14 max-w-2xl leading-relaxed font-normal mx-auto z-50"
    >
      Drop-in animated wrappers for Lucide icons, built with Framer Motion and
      designed for modern React apps.
    </motion.p>
  );
};
