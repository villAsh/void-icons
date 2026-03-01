"use client";
import { motion } from "motion/react";

export const Logo = () => {
  return (
    <motion.div
      className="flex items-center gap-2 group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center leading-none">
        <span className="text-2xl font-bold tracking-tight text-foreground">
          v
          <span className="inline-flex items-center justify-center relative">
            o
            <motion.span
              className="absolute w-1.5 h-1.5 bg-primary rounded-full blur-[1px]"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
          id
          <span className="ml-1.5 text-muted-foreground font-semibold">icons</span>
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
