import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const bugPlayVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -5, 5, -5, 5, 0],
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const playVariants: Variants = {
  initial: { scale: 1, fill: "none", opacity: 0.8 },
  hover: {
    scale: [1, 1.1, 1],
    fill: "currentColor",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const pulseVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: [0, 0.5, 0],
    scale: [0.8, 1.4, 2],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

const legVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: [-0.6, 0.6, -0.6],
    transition: {
      duration: 0.15,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const BugPlay = ({
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
      className={cn("lucide lucide-bug-play", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      variants={bugPlayVariants}
      {...rest}
    >
      <motion.circle
        variants={pulseVariants}
        cx="16"
        cy="15"
        r="4"
        fill="currentColor"
        className="text-primary/20"
      />
      <motion.path
        d="M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97"
      />
      <motion.path
        variants={playVariants}
        d="M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"
      />
      <motion.path d="M14.12 3.88 16 2" />
      <motion.path variants={legVariants} d="M21 5a4 4 0 0 1-3.55 3.97" />
      <motion.path variants={legVariants} d="M3 21a4 4 0 0 1 3.81-4" />
      <motion.path variants={legVariants} d="M3 5a4 4 0 0 0 3.55 3.97" />
      <motion.path variants={legVariants} d="M6 13H2" />
      <motion.path d="m8 2 1.88 1.88" />
      <motion.path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
    </motion.svg>
  );
};

export default BugPlay;
