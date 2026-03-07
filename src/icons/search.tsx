import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const searchVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Search = ({
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
      className={cn("lucide lucide-search", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={searchVariants} style={{ transformOrigin: "15px 15px" }}>
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </motion.g>
    </motion.svg>
  );
};

export default Search;
