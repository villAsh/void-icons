import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const captionsBodyVariants: Variants = {
  initial: { opacity: 1, scale: 1 },
  hover: {
    opacity: [1, 0.8, 1],
    scale: [1, 1.02, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const lineVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const lineStaggeredVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const Captions = ({
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
      className={cn("lucide lucide-captions", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.rect
        variants={captionsBodyVariants}
        width="18"
        height="14"
        x="3"
        y="5"
        rx="2"
        ry="2"
      />
      <motion.path variants={lineVariants} d="M7 15h4M15 15h2" />
      <motion.path variants={lineStaggeredVariants} d="M7 11h2M13 11h4" />
    </motion.svg>
  );
};

export default Captions;
