import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const questionVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [-10, 10, -6, 6, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const dotVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: [0, -2, 0],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const BadgeQuestionMark = ({
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
        "lucide lucide-badge-question-mark-icon lucide-badge-question-mark",
        className,
      )}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />

      <motion.path
        variants={questionVariants}
        style={{ transformOrigin: "12px 11px" }}
        d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
      />

      <motion.line variants={dotVariants} x1="12" x2="12.01" y1="17" y2="17" />
    </motion.svg>
  );
};

export default BadgeQuestionMark;
