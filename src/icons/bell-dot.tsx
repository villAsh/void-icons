import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const bellVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [-10, 10, -8, 8, -4, 4, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const dotVariants: Variants = {
  initial: { scale: 1, opacity: 0.9 },
  hover: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 0.7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const BellDot = ({
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
      className={cn("lucide lucide-bell-dot", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      variants={bellVariants}
      style={{ originX: "50%", originY: "10%" }}
      {...rest}
    >
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />

      <path d="M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348" />

      <motion.circle variants={dotVariants} cx="18" cy="5" r="3" />
    </motion.svg>
  );
};

export default BellDot;
