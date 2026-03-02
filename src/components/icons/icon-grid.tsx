"use client";

import { motion, AnimatePresence } from "motion/react";
import { ShowcaseCard } from "../home/showcase-card";
import type { ShowcaseItem } from "../home/showcase";

interface IconGridProps {
  icons: ShowcaseItem[];
}

export const IconGrid = ({ icons }: IconGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      <AnimatePresence mode="popLayout">
        {icons.map((icon, index) => (
          <motion.div
            key={icon.name}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <ShowcaseCard item={icon} index={index % 6} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
