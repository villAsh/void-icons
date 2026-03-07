import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const coinVariants: Variants = {
  initial: { rotateY: 0, scale: 1 },
  hover: {
    rotateY: 360,
    scale: [1, 1.08, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const strokeVariants: Variants = {
  initial: { pathLength: 0 },
  hover: {
    pathLength: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const Bitcoin = ({
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
      className={cn("lucide lucide-bitcoin", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      variants={coinVariants}
      style={{ transformStyle: "preserve-3d" }}
      {...rest}
    >
      <motion.path
        variants={strokeVariants}
        d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
      />
    </motion.svg>
  );
};

export default Bitcoin;
