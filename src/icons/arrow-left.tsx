import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const arrowVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: [0, -6],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const shaftVariants: Variants = {
  initial: { pathLength: 1 },
  hover: {
    pathLength: [1, 0.8, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const ArrowLeft = ({
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
        "lucide lucide-arrow-left-icon lucide-arrow-left",
        className,
      )}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      animate="initial"
      whileHover="hover"
      variants={arrowVariants}
      style={{ transformOrigin: "50% 50%" }}
    >
      <motion.path d="m12 19-7-7 7-7" />
      <motion.path variants={shaftVariants} d="M19 12H5" />
    </motion.svg>
  );
};

export default ArrowLeft;
