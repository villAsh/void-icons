import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const bookmarkVariants: Variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: [0, -1, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const pathVariants: Variants = {
  initial: {
    scaleY: 1,
  },
  hover: {
    scaleY: 0.9,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Bookmark = ({
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
      className={cn("lucide lucide-bookmark", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      variants={bookmarkVariants}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path
        variants={pathVariants}
        d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"
      />
    </motion.svg>
  );
};

export default Bookmark;
