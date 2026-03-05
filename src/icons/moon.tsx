import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const pathVariants: Variants = {
  initial: { opacity: 0, fill: "transparent", scale: 0, rotate: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    fill: "transparent",
    transition: { duration: 0.9, ease: "easeInOut" },
  },
  hover: {
    opacity: 1,
    rotate: [1, 10, 5, 1],
    scale: [1, 1.1, 0.9, 1.1, 1],
    fill: "currentColor",
    transition: {
      duration: 0.82,
      ease: "easeInOut",
      times: [0, 0.2, 0.4, 0.55, 0.7, 0.85, 1],
    },
  },
};

const Moon = ({
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
      initial="initial"
      animate={"animate"}
      whileHover={"hover"}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      className={cn("lucide lucide-moon", className)}
    >
      <motion.path
        variants={pathVariants}
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      />
    </motion.svg>
  );
};

export default Moon;
