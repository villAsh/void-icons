import { cn } from "@/lib/utils";
import { motion, type Variants, type SVGMotionProps } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const pathVariants: Variants = {
  initial: { x: 0 },
  animate: { x: 0 },
  hover: {
    x: [0, 1, 2, 3, 2, 1, 0],
  },
};

const lineVariants: Variants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  hover: {
    opacity: [1, 0.8, 0.4, 0.2, 0.4, 0.8, 1],
    transition: { duration: 0.92, repeat: Infinity },
  },
};

const terminal = ({
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
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
      className={cn("lucide lucide-terminal-icon lucide-terminal", className)}
      initial="initial"
      animate="initial"
      whileHover="hover"
    >
      <motion.path variants={lineVariants} d="M12 19h8" />
      <motion.path variants={pathVariants} d="m4 17 6-6-6-6" />
    </motion.svg>
  );
};

export default terminal;
