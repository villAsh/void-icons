import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const cctvHeadVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const cctvBaseVariants: Variants = {
  initial: { opacity: 1 },
  hover: {
    opacity: 1,
  },
};

const Cctv = ({
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
      className={cn("lucide lucide-cctv", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={cctvHeadVariants} style={{ transformOrigin: "12px 14px" }}>
        <motion.path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
        <motion.path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
        <motion.path d="M7 9h.01" />
      </motion.g>
      <motion.path variants={cctvBaseVariants} d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
      <motion.path variants={cctvBaseVariants} d="M2 21v-4" />
    </motion.svg>
  );
};

export default Cctv;
