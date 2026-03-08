import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const candle1Variants: Variants = {
  initial: { y: 0 },
  hover: {
    y: [0, -2, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const candle2Variants: Variants = {
  initial: { y: 0 },
  hover: {
    y: [0, 2, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 0.2,
    },
  },
};

const ChartCandlestick = ({
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
      className={cn("lucide lucide-chart-candlestick", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={candle1Variants}>
        <path d="M9 5v4" />
        <rect width="4" height="6" x="7" y="9" rx="1" />
        <path d="M9 15v2" />
      </motion.g>
      <motion.g variants={candle2Variants}>
        <path d="M17 3v2" />
        <rect width="4" height="8" x="15" y="5" rx="1" />
        <path d="M17 13v3" />
      </motion.g>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    </motion.svg>
  );
};

export default ChartCandlestick;
