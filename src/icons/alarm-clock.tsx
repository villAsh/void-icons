import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const svgVariants: Variants = {
  hover: {
    rotate: [0, -5, 5, -5, 5, 0, -4, 4, -3, 3, -2, 2, -1, 1, 0],
    transition: {
      duration: 0.92,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const AlarmClock = ({
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
        "lucide lucide-alarm-clock-icon lucide-alarm-clock",
        className,
      )}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      animate="initial"
      whileHover="hover"
      variants={svgVariants}
    >
      <motion.circle cx="12" cy="13" r="8" />
      <motion.path d="M12 9v4l2 2" />
      <motion.path d="M5 3 2 6" />
      <motion.path d="m22 6-3-3" />
      <motion.path d="M6.38 18.7 4 21" />
      <motion.path d="M17.64 18.67 20 21" />
    </motion.svg>
  );
};

export default AlarmClock;
