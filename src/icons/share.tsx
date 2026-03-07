import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const arrowVariants: Variants = {
  initial: { opacity: 1, y: 0 },
  hover: {
    opacity: [1, 0, 0, 1],
    y: [0, -4, 4, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Share = ({
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
      className={cn("lucide lucide-share", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={arrowVariants}>
        <path d="M12 2v13" />
        <path d="m16 6-4-4-4 4" />
      </motion.g>
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    </motion.svg>
  );
};

export default Share;
