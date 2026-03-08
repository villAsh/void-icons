import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const bugOffVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: [0, -3, 3, -3, 3, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const BugOff = ({
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
      className={cn("lucide lucide-bug-off", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      variants={bugOffVariants}
      {...rest}
    >
      <motion.path d="M12 20v-8" />
      <motion.path d="M12.656 7H14a4 4 0 0 1 4 4v1.344" />
      <motion.path d="M14.12 3.88 16 2" />
      <motion.path d="M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287" />
      <motion.path d="m2 2 20 20" />
      <motion.path d="M21 5a4 4 0 0 1-3.55 3.97" />
      <motion.path d="M22 13h-3.344" />
      <motion.path d="M3 21a4 4 0 0 1 3.81-4" />
      <motion.path d="M3 5a4 4 0 0 0 3.55 3.97" />
      <motion.path d="M6 13H2" />
      <motion.path d="m8 2 1.88 1.88" />
      <motion.path d="M9.712 4.06A3 3 0 0 1 15 6v1.13" />
    </motion.svg>
  );
};

export default BugOff;
