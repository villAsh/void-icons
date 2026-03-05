import { cn } from "@/lib/utils";
import { motion, Variants, type SVGMotionProps } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const pathVariants: Variants = {
  initial: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
  },
  hover: {
    pathLength: [0.7, 1, 0.8, 0.4, 0.2, 0.1, 0],
    pathOffset: [1, 0],
    transition: {
      duration: 1.23,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const activity = ({
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
      className={cn("lucide lucide-activity-icon lucide-activity", className)}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <motion.path
        variants={pathVariants}
        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      />
    </motion.svg>
  );
};

export default activity;
