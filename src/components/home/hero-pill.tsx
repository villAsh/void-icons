"use client";
import Sparkles from "@/icons/sparkles";
import { HomeItemVariants } from "@/lib/variants";
import { motion } from "motion/react";

const HeroPill = () => {
  return (
    <motion.div variants={HomeItemVariants} className="mb-10 group">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 text-black/60 bg-white/50 text-xs font-medium tracking-wide uppercase hover:border-black/20 hover:text-black transition-all cursor-default dark:border-white/10 dark:text-white/60 dark:bg-black/50 dark:hover:text-white dark:hover:border-white/20">
        <Sparkles size={14} className="text-black/40 dark:text-white/40" />
        <span className="translate-y-[0.5px]">Void Icons v0.1.0</span>
      </span>
    </motion.div>
  );
};

export default HeroPill;
