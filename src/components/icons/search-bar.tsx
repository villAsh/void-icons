"use client";

import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({
  value,
  onChange,
  placeholder = "Search icons...",
  className,
}: SearchBarProps) => {
  return (
    <div className={cn("relative group w-full max-w-2xl mx-auto", className)}>
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent group-focus-within:via-primary transition-all duration-500" />
      
      <div className="relative flex items-center bg-background/50 backdrop-blur-xl border border-border/50 rounded-2xl px-5 py-4 shadow-sm group-focus-within:border-primary/40 group-focus-within:shadow-lg group-focus-within:shadow-primary/5 transition-all duration-300">
        <Search className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
        
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none outline-none px-4 text-base text-foreground placeholder:text-muted-foreground/60 w-full"
        />

        <AnimatePresence>
          {value && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => onChange("")}
              className="p-1 hover:bg-muted rounded-full text-muted-foreground hover:text-foreground transition-all"
            >
              <X className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />
    </div>
  );
};
