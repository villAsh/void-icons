import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const batteryVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const barVariants: Variants = {
  initial: { opacity: 1 },
  hover: (i: number) => ({
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.2,
      delay: i * 0.25,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const BatteryMedium = ({
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
      className={cn("lucide lucide-battery-medium", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.rect
        variants={batteryVariants}
        x="2"
        y="6"
        width="16"
        height="12"
        rx="2"
      />

      <motion.path custom={0} variants={barVariants} d="M6 14v-4" />
      <motion.path custom={1} variants={barVariants} d="M10 14v-4" />

      <path d="M22 14v-4" />
    </motion.svg>
  );
};

export default BatteryMedium;
