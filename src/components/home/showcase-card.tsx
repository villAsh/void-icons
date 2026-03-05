"use client";

import { motion } from "motion/react";
import type { ShowcaseItem } from "./showcase";
import { Tooltip } from "../ui/tooltip";
import { useState } from "react";
import Copy from "@/icons/copy";
import Check from "@/icons/check";
import Terminal from "@/icons/terminal";

interface ShowcaseCardProps {
  item: ShowcaseItem;
  index: number;
}

export const ShowcaseCard = ({ item, index }: ShowcaseCardProps) => {
  const IconComponent = item.icon;
  const [copied, setCopied] = useState(false);
  const [commandCopied, setCommandCopied] = useState(false);

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

  const handleCommand = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const origin = window.location.origin;
      const command = `npx shadcn@latest add ${origin}/registry/${item.name}.json`;
      await navigator.clipboard.writeText(command);

      setCommandCopied(true);
      setTimeout(() => setCommandCopied(false), 2000);
    } catch (err) {
      console.error(`Failed to copy install command for ${item.name}:`, err);
    }
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
      <div className="w-full mt-4 flex items-center justify-center gap-8 bg-transparent z-20 pointer-events-auto">
        <Tooltip
          content={copied ? "Copied!" : `Copy ${item.label}.tsx file`}
          className="lowercase"
        >
          <motion.div
            whileHover="hover"
            initial="initial"
            animate="animate"
            className="cursor-pointer"
          >
            {copied ? (
              <Check size={22} />
            ) : (
              <Copy onClick={handleCopy} size={22} />
            )}
          </motion.div>
        </Tooltip>

        <Tooltip
          content={commandCopied ? "Copied Command!" : "Copy CLI Command"}
        >
          {commandCopied ? (
            <Check size={22} className="cursor-pointer" />
          ) : (
            <Terminal
              size={22}
              onClick={handleCommand}
              className="cursor-pointer"
            />
          )}
        </Tooltip>
      </div>
    </motion.div>
  );
};
