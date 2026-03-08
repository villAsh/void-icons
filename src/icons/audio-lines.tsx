import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const baseStyle = { transformOrigin: "center bottom" };

const makeVariants = (frames: number[], duration: number): Variants => ({
  initial: { scaleY: 1 },
  hover: {
    scaleY: frames,
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const AudioLines = ({
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
      className={cn(
        "lucide lucide-audio-lines-icon lucide-audio-lines",
        className,
      )}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
    >
      <motion.path
        d="M2 10v3"
        variants={makeVariants([1, 1.6, 0.6, 1.3, 1], 0.9)}
        style={baseStyle}
      />
      <motion.path
        d="M6 6v11"
        variants={makeVariants([1, 0.7, 1.8, 1.1, 1], 1.2)}
        style={baseStyle}
      />
      <motion.path
        d="M10 3v18"
        variants={makeVariants([1, 1.9, 0.8, 1.6, 1], 1.1)}
        style={baseStyle}
      />
      <motion.path
        d="M14 8v7"
        variants={makeVariants([1, 0.6, 1.4, 0.9, 1], 0.8)}
        style={baseStyle}
      />
      <motion.path
        d="M18 5v13"
        variants={makeVariants([1, 1.5, 0.7, 1.8, 1], 1.3)}
        style={baseStyle}
      />
      <motion.path
        d="M22 10v3"
        variants={makeVariants([1, 1.4, 0.5, 1.2, 1], 0.95)}
        style={baseStyle}
      />
    </motion.svg>
  );
};

export default AudioLines;
