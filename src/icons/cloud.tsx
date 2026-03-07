import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const containerVariants: Variants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const pathVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: "easeInOut",
    },
  },
};

const lineVariants: Variants = {
  initial: { opacity: 0, y: -2 },
  hover: {
    opacity: [0, 1, 0],
    y: [0, 4],
    transition: {
      duration: 0.9,
      repeat: Infinity,
    },
  },
};

const Cloud = ({
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
      variants={containerVariants}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="initial"
      whileHover="hover"
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      className={cn("lucide lucide-cloud", className)}
    >
      <motion.line x1="9" y1="20" x2="9" y2="22" variants={lineVariants} />
      <motion.line x1="13" y1="20" x2="13" y2="22" variants={lineVariants} />
      <motion.line x1="17" y1="20" x2="17" y2="22" variants={lineVariants} />

      <motion.path
        variants={pathVariants}
        d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
      />
    </motion.svg>
  );
};

export default Cloud;
