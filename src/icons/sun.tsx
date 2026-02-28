import { cn } from "@/lib/utils";
import type { IconProps } from "@/types/icon";
import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  exit: {
    pathLength: 0,
    opacity: 0,
  },
};
const Sun = ({ className, width = "24", height = "24" }: IconProps) => {
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
      className={cn("lucide lucide-sun-icon lucide-sun", className)}
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.circle cx="12" cy="12" r="4" />
      <motion.path variants={item} d="M12 2v2" />
      <motion.path variants={item} d="M12 20v2" />
      <motion.path variants={item} d="m4.93 4.93 1.41 1.41" />
      <motion.path variants={item} d="m17.66 17.66 1.41 1.41" />
      <motion.path variants={item} d="M2 12h2" />
      <motion.path variants={item} d="M20 12h2" />
      <motion.path variants={item} d="m6.34 17.66-1.41 1.41" />
      <motion.path variants={item} d="m19.07 4.93-1.41 1.41" />
    </motion.svg>
  );
};

export default Sun;
