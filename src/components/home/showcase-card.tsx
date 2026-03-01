"use client";

import { motion } from "motion/react";
import type { ShowcaseItem } from "./showcase";

interface ShowcaseCardProps {
  item: ShowcaseItem;
  index: number;
}

export const ShowcaseCard = ({ item, index }: ShowcaseCardProps) => {
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
