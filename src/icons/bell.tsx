import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const bellVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [-12, 12, -10, 10, -6, 6, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.8,
    },
  },
};

const clapperVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: [0, 1.5, -1.5, 1, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Bell = ({
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
      className={cn("lucide lucide-bell", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      variants={bellVariants}
      initial="initial"
      whileHover="hover"
      style={{ originX: "50%", originY: "10%" }}
      {...rest}
    >
      {/* clapper */}
      <motion.path
        variants={clapperVariants}
        d="M10.268 21a2 2 0 0 0 3.464 0"
      />

      {/* bell body */}
      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
    </motion.svg>
  );
};

export default Bell;
