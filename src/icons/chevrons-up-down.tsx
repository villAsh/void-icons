import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const chevronUpVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: -2,
    transition: {
      duration: 0.3,
      ease: "backOut",
    },
  },
};

const chevronDownVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: 2,
    transition: {
      duration: 0.3,
      ease: "backOut",
    },
  },
};

const ChevronsUpDown = ({
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
      className={cn("lucide lucide-chevrons-up-down", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path variants={chevronDownVariants} d="m7 15 5 5 5-5" />
      <motion.path variants={chevronUpVariants} d="m7 9 5-5 5 5" />
    </motion.svg>
  );
};

export default ChevronsUpDown;
