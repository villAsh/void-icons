"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FilterChipsProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
  className?: string;
}

export const FilterChips = ({
  categories,
  selectedCategory,
  onSelect,
  className,
}: FilterChipsProps) => {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2", className)}>
      {categories.map((category) => {
        const isActive = selectedCategory === category;
        
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={cn(
              "relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 overflow-hidden",
              isActive 
                ? "text-primary-foreground" 
                : "text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary border border-border/50"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="active-filter-bg"
                className="absolute inset-0 bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
};
