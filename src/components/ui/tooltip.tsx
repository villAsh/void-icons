"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  className?: string;
  delay?: number;
  side?: "top" | "bottom" | "left" | "right";
  offset?: number;
}

export const Tooltip = ({
  children,
  content,
  className,
  delay = 0.2,
  side = "top",
  offset = 12,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    const id = setTimeout(() => setIsVisible(true), delay * 1000);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-[var(--offset)]",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-[var(--offset)]",
    left: "right-full top-1/2 -translate-y-1/2 mr-[var(--offset)]",
    right: "left-full top-1/2 -translate-y-1/2 ml-[var(--offset)]",
  };

  return (
    <button
      type="button"
      className="relative flex items-center justify-center shrink-0"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: side === "top" ? 8 : -8,
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: side === "top" ? 8 : -8,
            }}
            style={{ "--offset": `${offset}px`, borderRadius: 8 } as any}
            transition={{
              type: "spring",
              stiffness: 230,
              damping: 23,
              mass: 0.8,
            }}
            className={cn(
              "absolute px-3 py-1.5 bg-black/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-black text-[10px] font-bold rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] whitespace-nowrap z-[100] pointer-events-none border border-white/10 dark:border-black/10 transition-colors tracking-widest",
              sideClasses[side],
              className,
            )}
          >
            {content}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className={cn("absolute border-[6px] border-transparent")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
