import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const stemVariants: Variants = {
  initial: { pathLength: 1 },
  hover: {
    pathLength: [1, 0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const brainPulseVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Brain = ({
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
      className={cn("lucide lucide-brain", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path variants={stemVariants} d="M12 18V5" />
      <motion.path
        variants={brainPulseVariants}
        d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"
      />
      <motion.path
        variants={brainPulseVariants}
        d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"
      />
      <motion.path
        variants={brainPulseVariants}
        d="M17.997 5.125a4 4 0 0 1 2.526 5.77"
      />
      <motion.path
        variants={brainPulseVariants}
        d="M18 18a4 4 0 0 0 2-7.464"
      />
      <motion.path
        variants={brainPulseVariants}
        d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"
      />
      <motion.path
        variants={brainPulseVariants}
        d="M6 18a4 4 0 0 1-2-7.464"
      />
      <motion.path
        variants={brainPulseVariants}
        d="M6.003 5.125a4 4 0 0 0-2.526 5.77"
      />
    </motion.svg>
  );
};

export default Brain;
