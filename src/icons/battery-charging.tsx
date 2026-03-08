import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const batteryVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.04, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const boltVariants: Variants = {
  initial: { x: 0, scale: 1 },
  hover: {
    x: [0, -1, 1, -1, 1, 0],
    scale: 0.8,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const BatteryCharging = ({
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
      className={cn(
        "lucide lucide-battery-charging-icon lucide-battery-charging",
        className,
      )}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path variants={boltVariants} d="m11 7-3 5h4l-3 5" />

      <motion.path
        variants={batteryVariants}
        d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"
      />

      <motion.path
        variants={batteryVariants}
        d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"
      />

      <path d="M22 14v-4" />
    </motion.svg>
  );
};

export default BatteryCharging;
