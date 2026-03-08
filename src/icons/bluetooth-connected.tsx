import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const svgVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.08,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const pathVariants: Variants = {
  initial: {
    pathLength: 1,
  },
  hover: {
    pathLength: [8, 1],
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

const leftLineVariants: Variants = {
  initial: {
    x: 0,
    opacity: 0.8,
  },
  hover: {
    x: 2,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const rightLineVariants: Variants = {
  initial: {
    x: 0,
    opacity: 0.8,
  },
  hover: {
    x: -2,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const BluetoothConnected = ({
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
      className={cn("lucide lucide-bluetooth-connected", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      variants={svgVariants}
      {...rest}
    >
      <motion.path d="m7 7 10 10-5 5V2l5 5L7 17" variants={pathVariants} />

      <motion.line
        x1="18"
        x2="21"
        y1="12"
        y2="12"
        variants={rightLineVariants}
      />

      <motion.line x1="3" x2="6" y1="12" y2="12" variants={leftLineVariants} />
    </motion.svg>
  );
};

export default BluetoothConnected;
