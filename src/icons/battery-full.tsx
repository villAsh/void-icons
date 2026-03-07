import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const bodyVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const barVariants: Variants = {
  initial: { y: 0 },
  hover: (i: number) => ({
    y: [-1.5, 0],
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  }),
};

const BatteryFull = ({
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
        "lucide lucide-battery-full-icon lucide-battery-full",
        className,
      )}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.rect
        variants={bodyVariants}
        x="2"
        y="6"
        width="16"
        height="12"
        rx="2"
      />

      <motion.path custom={0} variants={barVariants} d="M6 10v4" />
      <motion.path custom={1} variants={barVariants} d="M10 10v4" />
      <motion.path custom={2} variants={barVariants} d="M14 10v4" />

      <path d="M22 14v-4" />
    </motion.svg>
  );
};

export default BatteryFull;
