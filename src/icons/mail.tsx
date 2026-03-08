import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const flapVariants: Variants = {
  initial: { pathLength: 1, opacity: 1, y: 0 },
  hover: {
    y: -1.5,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Mail = ({
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
      className={cn("lucide lucide-mail", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path
        variants={flapVariants}
        d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
      />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </motion.svg>
  );
};

export default Mail;
