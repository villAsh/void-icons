import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const chevronVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: 2,
    transition: {
      duration: 0.3,
      ease: "backOut",
    },
  },
};

const ChevronDown = ({
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
      className={cn("lucide lucide-chevron-down", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path variants={chevronVariants} d="m6 9 6 6 6-6" />
    </motion.svg>
  );
};

export default ChevronDown;
