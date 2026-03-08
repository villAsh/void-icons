import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const ghostVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: [0, -1.5, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const eyeVariants: Variants = {
  initial: { scaleY: 1 },
  hover: {
    scaleY: [1, 0.1, 1],
    transition: {
      duration: 2,
      times: [0, 0.5, 0.6],
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Ghost = ({
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
      className={cn("lucide lucide-ghost", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={ghostVariants}>
        <motion.path
          variants={eyeVariants}
          style={{ transformOrigin: "9px 10px" }}
          d="M9 10h.01"
        />
        <motion.path
          variants={eyeVariants}
          style={{ transformOrigin: "15px 10px" }}
          d="M15 10h.01"
        />
        <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
      </motion.g>
    </motion.svg>
  );
};

export default Ghost;
