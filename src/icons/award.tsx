import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const medalVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ribbonVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, -8, 8, -8, 8, 0],
    transition: {
      duration: 0.8,
      ease: "easeOut",
      repeat: Infinity,
    },
  },
};

const Award = ({
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
      className={cn("lucide lucide-award-icon lucide-award", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path
        variants={ribbonVariants}
        style={{ transformOrigin: "12px 12px" }}
        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
      />

      <motion.circle variants={medalVariants} cx="12" cy="8" r="6" />
    </motion.svg>
  );
};

export default Award;
