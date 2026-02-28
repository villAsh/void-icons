import { cn } from "@/lib/utils";
import type { IconProps } from "@/types/icon";
import { motion } from "motion/react";

const Moon = ({ className, height = "24", width = "24" }: IconProps) => {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-moon-icon lucide-moon", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        exit={{ pathLength: 0, opacity: 0.3 }}
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      />
    </motion.svg>
  );
};

export default Moon;
