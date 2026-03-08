import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const pathVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: [-1, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const strikeVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [1, 0, 1],
    opacity: [1, 0, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const HeadphoneOff = ({
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
      className={cn("lucide lucide-headphone-off", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={pathVariants}>
        <path d="M21 14h-1.343" />
        <path d="M9.128 3.47A9 9 0 0 1 21 12v3.343" />
        <path d="M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" />
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" />
      </motion.g>
      <motion.path variants={strikeVariants} d="m2 2 20 20" />
    </motion.svg>
  );
};

export default HeadphoneOff;
