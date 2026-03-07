import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const leftBraceVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: -2,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const rightBraceVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: 2,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Braces = ({
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
      className={cn("lucide lucide-braces", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path
        variants={leftBraceVariants}
        d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
      />
      <motion.path
        variants={rightBraceVariants}
        d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
      />
    </motion.svg>
  );
};

export default Braces;
