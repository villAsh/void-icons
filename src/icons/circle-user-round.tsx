import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const userVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const CircleUserRound = ({
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
      className={cn("lucide lucide-circle-user-round", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <circle cx="12" cy="12" r="10" />
      <motion.g
        variants={userVariants}
        style={{ transformOrigin: "12px 16px" }}
      >
        <circle cx="12" cy="10" r="4" />
        <path d="M18 20a6 6 0 0 0-12 0" />
      </motion.g>
    </motion.svg>
  );
};

export default CircleUserRound;
