import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const batteryVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: [0, -1.5, 1.5, -1.5, 1.5, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatDelay: 0.6,
    },
  },
};

const warningVariants: Variants = {
  initial: { opacity: 1 },
  hover: {
    opacity: [1, 0.3, 1],
    scale: [1, 1.15, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const BatteryWarning = ({
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
      className={cn("lucide lucide-battery-warning", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      variants={batteryVariants}
      {...rest}
    >
      {/* warning symbol */}
      <motion.path variants={warningVariants} d="M10 7v6" />
      <motion.path variants={warningVariants} d="M10 17h.01" />

      {/* battery frame */}
      <path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
      <path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />

      {/* terminal */}
      <path d="M22 14v-4" />
    </motion.svg>
  );
};

export default BatteryWarning;
