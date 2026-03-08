import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const badgeVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: [0, -2, 2, -1, 1, 0],
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};

const xVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 0.9],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const BadgeX = ({
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
      className={cn("lucide lucide-badge-x-icon lucide-badge-x", className)}
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

      <motion.g variants={xVariants} style={{ transformOrigin: "12px 12px" }}>
        <line x1="15" x2="9" y1="9" y2="15" />
        <line x1="9" x2="15" y1="9" y2="15" />
      </motion.g>
    </motion.svg>
  );
};

export default BadgeX;
