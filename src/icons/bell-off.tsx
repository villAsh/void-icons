import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const bellVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: [1, 0.95, 1],
    rotate: [0, -4, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const slashVariants: Variants = {
  initial: { pathLength: 1, opacity: 0.4 },
  hover: {
    pathLength: [0, 1],
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      repeat: Infinity,
      repeatDelay: 0.8,
    },
  },
};

const BellOff = ({
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
      className={cn("lucide lucide-bell-off", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      variants={bellVariants}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />

      <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" />
      <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" />

      <motion.path variants={slashVariants} d="m2 2 24 20" />
    </motion.svg>
  );
};

export default BellOff;
