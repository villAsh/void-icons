import { cn } from "@/lib/utils";
import type { IconProps } from "@/types/icon";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  initial: {},
  animate: {},
  hover: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const pathVariants: Variants = {
  initial: { opacity: 1, scale: 1 },
  hover: {
    x: -1,
    y: -1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const rectVariant: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const Copy = ({
  size = 24,
  className,
  strokeWidth = 2,
  width,
  height,
  ...rest
}: IconProps) => {
  return (
    <motion.svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-copy-icon lucide-copy", className)}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <motion.rect
        width="14"
        height="14"
        x="8"
        y="8"
        rx="2"
        ry="2"
        variants={rectVariant}
      />
      <motion.path
        variants={pathVariants}
        d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      />
    </motion.svg>
  );
};

export default Copy;
