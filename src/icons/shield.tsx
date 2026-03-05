import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const pathVariants: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  hover: {
    pathLength: 1,
    scale: [1, 1.1, 0.9, 1.1, 1],
    opacity: 1,
    transition: {
      duration: 0.82,
      ease: "easeInOut",
      times: [0, 0.2, 0.4, 0.55, 0.7, 0.85, 1],
    },
  },
};

const plusVariants: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  hover: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Shield = ({
  size = 24,
  className,
  strokeWidth = 1.5,
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
      initial="initial"
      animate={"animate"}
      whileHover={"hover"}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      className={cn("lucide lucide-shield", className)}
    >
      <motion.path variants={plusVariants} d="M12 9v6M9 12h6" />
      <motion.path
        variants={pathVariants}
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      />
    </motion.svg>
  );
};

export default Shield;
