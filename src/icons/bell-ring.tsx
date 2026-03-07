import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const bellVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [-14, 14, -10, 10, -6, 6, 0],
    transition: {
      duration: 0.9,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.7,
    },
  },
};

const waveVariants: Variants = {
  initial: { opacity: 0.4, scale: 1 },
  hover: (i: number) => ({
    opacity: [0.4, 1, 0.4],
    scale: [1, 1.15, 1],
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const BellRing = ({
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
      className={cn("lucide lucide-bell-ring", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      variants={bellVariants}
      style={{ originX: "50%", originY: "10%" }}
      {...rest}
    >
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />

      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />

      <motion.path
        custom={0}
        variants={waveVariants}
        d="M22 8c0-2.3-.8-4.3-2-6"
      />
      <motion.path
        custom={1}
        variants={waveVariants}
        d="M4 2C2.8 3.7 2 5.7 2 8"
      />
    </motion.svg>
  );
};

export default BellRing;
