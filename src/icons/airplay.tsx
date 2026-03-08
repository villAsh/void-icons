import { cn } from "@/lib/utils";
import { motion, type Variants, type SVGMotionProps } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const triangleVariants: Variants = {
  initial: { opacity: 1, y: 0 },
  hover: {
    opacity: [1, 0.5, 0],
    y: [0, -3, -5],
    transition: {
      duration: 0.8,
      ease: "easeOut",
      repeat: Infinity,
    },
  },
};

const screenVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: { duration: 0.5 },
  },
};

const Airplay = ({
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
      className={cn("lucide lucide-Airplay-icon lucide-airplay", className)}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      animate="initial"
      whileHover="hover"
    >
      <motion.path
        variants={screenVariants}
        d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
      />
      <motion.path variants={triangleVariants} d="m12 15 5 6H7Z" />
    </motion.svg>
  );
};

export default Airplay;
