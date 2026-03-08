import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const svgVariants: Variants = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: [-4, 4, -2, 2, 0],
    scale: 1.05,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const pathVariants: Variants = {
  initial: {
    pathLength: 1,
  },
  hover: {
    pathLength: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Bluetooth = ({
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
      className={cn("lucide lucide-bluetooth", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      variants={svgVariants}
      {...rest}
    >
      <motion.path d="m7 7 10 10-5 5V2l5 5L7 17" variants={pathVariants} />
    </motion.svg>
  );
};

export default Bluetooth;
