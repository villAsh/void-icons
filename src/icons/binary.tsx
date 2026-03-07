import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const bitVariants: Variants = {
  initial: { scale: 1, opacity: 1 },
  hover: (i: number) => ({
    scale: [1, 1.2, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 0.7,
      delay: i * 0.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const lineVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [0.4, 1, 0.4],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Binary = ({
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
      className={cn("lucide lucide-binary", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      {/* binary blocks */}
      <motion.rect
        custom={0}
        variants={bitVariants}
        x="14"
        y="14"
        width="4"
        height="6"
        rx="2"
      />
      <motion.rect
        custom={1}
        variants={bitVariants}
        x="6"
        y="4"
        width="4"
        height="6"
        rx="2"
      />

      {/* binary lines */}
      <motion.path variants={lineVariants} d="M6 20h4" />
      <motion.path variants={lineVariants} d="M14 10h4" />
      <motion.path variants={lineVariants} d="M6 14h2v6" />
      <motion.path variants={lineVariants} d="M14 4h2v6" />
    </motion.svg>
  );
};

export default Binary;
