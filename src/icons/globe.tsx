import { cn } from "@/lib/utils";
import type { IconProps } from "@/types/icon";
import { motion, type Variants } from "motion/react";

const circleVariants: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  hover: {
    pathLength: [1, 0.5, 1],
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const meridianVariants: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.15 },
  },
  hover: {
    pathLength: [1, 0.2, 1],
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      delay: 0.15,
    },
  },
};

const equatorVariants: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 },
  },
  hover: {
    pathLength: [1, 0.3, 1],
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.3,
    },
  },
};

const Globe = ({
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
      initial="initial"
      animate="animate"
      whileHover="hover"
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      className={cn("lucide lucide-globe", className)}
    >
      <motion.circle variants={circleVariants} cx="12" cy="12" r="10" />
      <motion.path
        variants={meridianVariants}
        d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
      />
      <motion.path variants={equatorVariants} d="M2 12h20" />
    </motion.svg>
  );
};

export default Globe;
