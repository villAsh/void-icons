import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const bugVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const legVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: [-0.5, 0.5, -0.5],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Bug = ({
  size = 24,
  className,
  strokeWidth = 2,
  width,
  height,
  ...rest
}: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-bug", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      variants={bugVariants}
      {...rest}
    >
      <motion.path d="M12 20v-9" />
      <motion.path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" />
      <motion.path d="M14.12 3.88 16 2" />
      <motion.path variants={legVariants} d="M21 21a4 4 0 0 0-3.81-4" />
      <motion.path variants={legVariants} d="M21 5a4 4 0 0 1-3.55 3.97" />
      <motion.path variants={legVariants} d="M22 13h-4" />
      <motion.path variants={legVariants} d="M3 21a4 4 0 0 1 3.81-4" />
      <motion.path variants={legVariants} d="M3 5a4 4 0 0 0 3.55 3.97" />
      <motion.path variants={legVariants} d="M6 13H2" />
      <motion.path d="m8 2 1.88 1.88" />
      <motion.path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
    </motion.svg>
  );
};

export default Bug;
