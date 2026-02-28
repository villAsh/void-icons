"use client";

import { HomeItemVariants } from "@/lib/variants";
import { motion } from "motion/react";

export const HeroHeading = () => {
  return (
    <motion.h1
      variants={HomeItemVariants}
      className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] mb-8 text-black dark:text-white leading-[1.05] z-50"
    >
      Lucide icons <br />
      <span className="text-black/40 dark:text-white/40">Now in motion</span>
    </motion.h1>
  );
};

export const ShowcaseHeading = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-black dark:text-white">
        Precision in every pixel <br />
        <span className="text-black/40 dark:text-white/40">
          Motion in every interaction.
        </span>
      </h2>
      <p className="text-lg text-muted-foreground">
        Built on a consistent 24x24 grid and enhanced with configurable motion,
        Void Icons bring clarity and life to modern React interfaces.
      </p>
    </div>
  );
};
