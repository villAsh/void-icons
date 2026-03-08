import { cn } from "@/lib/utils";
import { motion, type Variants, type SVGMotionProps } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}
const anchorVariants: Variants = {
  initial: {
    rotate: 0,
  },
  hover: {
    rotate: [-18, 18, -18],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};
const Anchor = ({
  size = 24,
  className,
  strokeWidth = 2,
  width,
  height,
  ...rest
}: IconProps) => {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-anchor-icon lucide-anchor", className)}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      animate="initial"
      whileHover="hover"
      variants={anchorVariants}
      style={{ transformOrigin: "50% 0%" }}
    >
      <motion.path d="M12 6v16" />
      <motion.path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
      <motion.path d="M9 11h6" />
      <motion.circle cx="12" cy="4" r="2" />
    </motion.svg>
  );
};

export default Anchor;
