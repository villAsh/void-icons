import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const wheelVariants: Variants = {
  initial: { rotate: 0, y: 0 },
  hover: {
    rotate: 360,
    y: [0, -0.2, 0],
    transition: {
      duration: 0.8,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const ambulanceVariants: Variants = {
  hover: {
    y: [0, -1.1, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseVariants: Variants = {
  initial: { opacity: 1 },
  hover: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 0.7,
      repeat: Infinity,
    },
  },
};

const Ambulance = ({
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
      className={cn("lucide lucide-ambulance-icon lucide-ambulance", className)}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      animate="initial"
      whileHover="hover"
      variants={ambulanceVariants}
    >
      <motion.path variants={pulseVariants} d="M10 10H6" />
      <motion.path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <motion.path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
      <motion.path variants={pulseVariants} d="M8 8v4" />
      <motion.path d="M9 18h6" />
      <motion.circle
        variants={wheelVariants}
        cx="17"
        cy="18"
        r="2"
        style={{ transformOrigin: "center" }}
      />
      <motion.circle
        variants={wheelVariants}
        cx="7"
        cy="18"
        r="2"
        style={{ transformOrigin: "center" }}
      />
    </motion.svg>
  );
};

export default Ambulance;
