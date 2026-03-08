import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const castBodyVariants: Variants = {
  initial: { opacity: 1, scale: 1 },
  hover: {
    opacity: [1, 0.8, 1],
    scale: [1, 1.02, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const arc1Variants: Variants = {
  initial: { opacity: 1 },
  hover: {
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 0.2,
    },
  },
};

const arc2Variants: Variants = {
  initial: { opacity: 1 },
  hover: {
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 0.4,
    },
  },
};

const dotVariants: Variants = {
  initial: { opacity: 1 },
  hover: {
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 0,
    },
  },
};

const Cast = ({
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
      className={cn("lucide lucide-cast", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path
        variants={castBodyVariants}
        d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
      />
      <motion.path variants={arc2Variants} d="M2 12a9 9 0 0 1 8 8" />
      <motion.path variants={arc1Variants} d="M2 16a5 5 0 0 1 4 4" />
      <motion.line variants={dotVariants} x1="2" x2="2.01" y1="20" y2="20" />
    </motion.svg>
  );
};

export default Cast;
