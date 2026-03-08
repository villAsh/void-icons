import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const arrowVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: -2,
    transition: {
      duration: 0.3,
      ease: "backOut",
    },
  },
};

const CircleArrowLeft = ({
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
      className={cn("lucide lucide-circle-arrow-left", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <circle cx="12" cy="12" r="10" />
      <motion.g variants={arrowVariants}>
        <path d="m12 8-4 4 4 4" />
        <path d="M16 12H8" />
      </motion.g>
    </motion.svg>
  );
};

export default CircleArrowLeft;
