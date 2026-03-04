"use client";

import { motion } from "motion/react";
import type { ShowcaseItem } from "./showcase";
import { Tooltip } from "../ui/tooltip";
import { Copy, Terminal, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface ShowcaseCardProps {
  item: ShowcaseItem;
  index: number;
}

export const ShowcaseCard = ({ item, index }: ShowcaseCardProps) => {
  const IconComponent = item.icon;
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const response = await fetch(`/api/icons/${item.name}`);
      const code = await response.text();
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy icon code:", err);
    }
  };

  const handleCommand = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Implementation for command/install will come later as discussed
    console.log(`Install command for ${item.name}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex flex-col items-center justify-center p-4 bg-card border border-border/50 rounded-sm hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10 cursor-pointer min-h-[140px]"
    >
      <div className="mb-4 text-foreground group-hover:text-primary transition-colors duration-300 relative z-10">
        <Tooltip
          content={item.label}
          side="top"
          offset={20}
          className="font-semibold lowercase rounded-sm"
        >
          <IconComponent size={36} strokeWidth={1.5} />
        </Tooltip>
      </div>
      <div className="w-full mt-4 flex items-center justify-center gap-4 bg-transparent z-20 pointer-events-auto">
        <Tooltip content={copied ? "Copied!" : "Copy component tsx file"}>
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={handleCopy}
            className={cn(
              "p-1.5 transition-colors",
              copied
                ? "bg-green-500/10 text-green-500"
                : "hover:bg-primary/10 text-muted-foreground hover:text-primary",
            )}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </Button>
        </Tooltip>

        <Tooltip content="CLI Command">
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={handleCommand}
            className="p-1.5 rounded-sm hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
          >
            <Terminal size={14} />
          </Button>
        </Tooltip>
      </div>
    </motion.div>
  );
};
