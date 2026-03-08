import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const apertureVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    rotate: [-15, 15, -15],
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const bladeVariants: Variants = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: [0, 15, 0],
    scale: [1, 0.9, 1],
    transition: {
      duration: 1.8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Aperture = ({
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
      className={cn("lucide lucide-aperture-icon lucide-aperture", className)}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      animate="initial"
      whileHover="hover"
      variants={apertureVariants}
      style={{ transformOrigin: "50% 50%" }}
    >
      <motion.circle cx="12" cy="12" r="10" />
      <motion.path variants={bladeVariants} d="m14.31 8 5.74 9.94" />
      <motion.path variants={bladeVariants} d="M9.69 8h11.48" />
      <motion.path variants={bladeVariants} d="m7.38 12 5.74-9.94" />
      <motion.path variants={bladeVariants} d="M9.69 16 3.95 6.06" />
      <motion.path variants={bladeVariants} d="M14.31 16H2.83" />
      <motion.path variants={bladeVariants} d="m16.62 12-5.74 9.94" />
    </motion.svg>
  );
};

export default Aperture;
