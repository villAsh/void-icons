import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const pathVariants: Variants = {
  initial: { pathLength: 0, opacity: 0, fill: "transparent" },
  animate: {
    pathLength: 1,
    opacity: 1,
    scale: 1,
    x: 0,
    fill: "transparent",
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  hover: {
    pathLength: 1,
    opacity: 1,
    scale: [1, 1.1, 0.9, 1.1, 1],
    rotate: [0, 2, 3, 4, 1, -1, -2, -4, -8, -4, 0],
    fill: "currentColor",
    transition: {
      duration: 0.82,
      ease: "easeInOut",
      times: [0, 0.2, 0.4, 0.55, 0.7, 0.85, 1],
    },
  },
};

const Star = ({
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
      animate={"animate"}
      whileHover={"hover"}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      className={cn("lucide lucide-star", className)}
    >
      <motion.path
        variants={pathVariants}
        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
      />
    </motion.svg>
  );
};

export default Star;
