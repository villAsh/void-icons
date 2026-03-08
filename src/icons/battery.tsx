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
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const fillVariants: Variants = {
  initial: { scaleX: 0 },
  hover: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Battery = ({
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
      className={cn("lucide lucide-battery-icon lucide-battery", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <path d="M22 14 L22 10" />

      <motion.rect
        variants={batteryVariants}
        x="2"
        y="6"
        width="16"
        height="12"
        rx="2"
      />

      <motion.rect
        variants={fillVariants}
        x="4"
        y="8"
        width="12"
        height="8"
        rx="1"
        fill="currentColor"
        stroke="none"
        style={{ transformOrigin: "left center" }}
      />
    </motion.svg>
  );
};

export default Battery;
