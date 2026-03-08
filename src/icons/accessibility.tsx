import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const accessibilityVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.04, 1],
    transition: {
      duration: 1.6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const armsVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [-10, 10, -10],
    transition: {
      duration: 1.6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const headVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.15, 1],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const wheelVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const Accessibility = ({
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
      className={cn(
        "lucide lucide-accessibility-icon lucide-accessibility",
        className,
      )}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      animate="initial"
      whileHover="hover"
      variants={accessibilityVariants}
      style={{ transformOrigin: "50% 50%" }}
    >
      <motion.circle variants={headVariants} cx="16" cy="4" r="1" />

      <motion.path variants={armsVariants} d="m18 19 1-7-6 1" />
      <motion.path variants={armsVariants} d="m5 8 3-3 5.5 3-2.36 3.5" />

      <motion.g
        variants={wheelVariants}
        style={{ transformOrigin: "12px 17px" }}
      >
        <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
        <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
      </motion.g>
    </motion.svg>
  );
};

export default Accessibility;
