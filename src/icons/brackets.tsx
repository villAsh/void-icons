import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const leftBracketVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: -2,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const rightBracketVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: 2,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Brackets = ({
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
      className={cn("lucide lucide-brackets", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path
        variants={rightBracketVariants}
        d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3"
      />
      <motion.path
        variants={leftBracketVariants}
        d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"
      />
    </motion.svg>
  );
};

export default Brackets;
