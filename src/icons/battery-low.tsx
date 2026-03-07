import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const batteryVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: [0, -1.2, 1.2, -1.2, 1.2, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatDelay: 0.6,
    },
  },
};

const barVariants: Variants = {
  initial: { opacity: 1 },
  hover: {
    opacity: [1, 0.2, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
    },
  },
};

const BatteryLow = ({
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
      className={cn("lucide lucide-battery-low", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      variants={batteryVariants}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <rect x="2" y="6" width="16" height="12" rx="2" />

      <motion.path variants={barVariants} d="M6 14v-4" />

      <path d="M22 14v-4" />
    </motion.svg>
  );
};

export default BatteryLow;
