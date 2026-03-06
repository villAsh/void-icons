import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const clockVariants: Variants = {
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

const plusVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 0.9, 1],
    transition: { duration: 0.4 },
  },
};
const bellLeft = {
  hover: {
    rotate: [-10, 5, -10],
    transition: { duration: 0.4 },
  },
};

const bellRight = {
  hover: {
    rotate: [10, -5, 10],
    transition: { duration: 0.4 },
  },
};

const AlarmClockPlus = ({
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
        "lucide lucide-alarm-clock-plus-icon lucide-alarm-clock-plus",
        className,
      )}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      animate="initial"
      whileHover="hover"
    >
      <motion.circle variants={clockVariants} cx="12" cy="13" r="8" />
      <motion.path variants={bellLeft} d="M5 3 2 6" />
      <motion.path variants={bellRight} d="m22 6-3-3" />
      <motion.path d="M6.38 18.7 4 21" />
      <motion.path d="M17.64 18.67 20 21" />
      <motion.path variants={plusVariants} d="M12 10v6" />
      <motion.path variants={plusVariants} d="M9 13h6" />
    </motion.svg>
  );
};

export default AlarmClockPlus;
