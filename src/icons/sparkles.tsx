import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const mainSparkleVariants: Variants = {
  initial: { rotate: 0, scale: 1, opacity: 1 },
  hover: {
    rotate: 90,
    scale: 0.7,
    transition: {
      duration: 0.92,
      ease: "easeInOut",
    },
  },
};

const crossVVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [1, 0, 1],
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const crossHVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [1, 0, 1],
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const dotVariants: Variants = {
  initial: { scale: 1, opacity: 1 },
  hover: {
    scale: [1, 1.2, 0.8, 1.4, 1],
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      repeat: 0,
    },
  },
};

const Sparkles = ({
  size = 24,
  className,
  strokeWidth = 1.5,
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
      initial="initial"
      whileHover="hover"
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      className={cn("lucide lucide-sparkles", className)}
    >
      <motion.path
        variants={mainSparkleVariants}
        d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
      />
      <motion.path variants={crossVVariants} d="M20 2v4" />
      <motion.path variants={crossHVariants} d="M22 4h-4" />
      <motion.circle variants={dotVariants} cx="4" cy="20" r="2" />
    </motion.svg>
  );
};

export default Sparkles;
