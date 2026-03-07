import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const badgeVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [-3, 3, -3, 2, -1, 0],
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

const alertVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.25, 1],
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const BadgeAlert = ({
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
        "lucide lucide-badge-alert-icon lucide-badge-alert",
        className,
      )}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path
        variants={badgeVariants}
        style={{ transformOrigin: "12px 12px" }}
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      />

      <motion.line variants={alertVariants} x1="12" x2="12" y1="8" y2="12" />

      <motion.line
        variants={alertVariants}
        x1="12"
        x2="12.01"
        y1="16"
        y2="16"
      />
    </motion.svg>
  );
};

export default BadgeAlert;
