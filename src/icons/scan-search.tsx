import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const scanVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const searchVariants: Variants = {
  initial: { x: 0, y: 0 },
  hover: {
    x: [0, -1, 1, -1, 0],
    y: [0, 1, -1, 1, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const ScanSearch = ({
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
      className={cn("lucide lucide-scan-search", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={scanVariants} style={{ transformOrigin: "center" }}>
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      </motion.g>
      <motion.g variants={searchVariants}>
        <circle cx="12" cy="12" r="3" />
        <path d="m16 16-1.9-1.9" />
      </motion.g>
    </motion.svg>
  );
};

export default ScanSearch;
