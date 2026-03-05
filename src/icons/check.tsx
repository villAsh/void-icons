import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const pathVariants: Variants = {
  initial: {
    pathLength: 1,
    scale: 1,
    x: 0,
    y: 0,
  },
  hover: {
    scale: [1, 1.15, 1],
    y: [2, 1, 2, 4, 2, 1],
    pathLength: [1, 0.01, 1],
    transition: {
      duration: 0.48,
      ease: "easeInOut",
    },
  },
};

const Check = ({
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
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      animate="initial"
      whileHover="hover"
      className={cn("lucide lucide-check-icon lucide-check", className)}
    >
      <motion.path variants={pathVariants} d="M20 6 9 17l-5-5" />
    </motion.svg>
  );
};

export default Check;
