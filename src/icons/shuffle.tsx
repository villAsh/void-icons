import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const pathLengthVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Shuffle = ({
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
      className={cn("lucide lucide-shuffle", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path variants={pathLengthVariants} d="m18 14 4 4-4 4" />
      <motion.path variants={pathLengthVariants} d="m18 2 4 4-4 4" />
      <motion.path
        variants={pathLengthVariants}
        d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"
      />
      <motion.path
        variants={pathLengthVariants}
        d="M2 6h1.972a4 4 0 0 1 3.6 2.2"
      />
      <motion.path
        variants={pathLengthVariants}
        d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"
      />
    </motion.svg>
  );
};

export default Shuffle;
