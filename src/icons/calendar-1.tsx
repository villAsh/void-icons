import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const calendarVariants: Variants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -2,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "backOut",
    },
  },
};

const numberVariants: Variants = {
  initial: { opacity: 1, scale: 1 },
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      delay: 0.1,
    },
  },
};

const Calendar1 = ({
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
      className={cn("lucide lucide-calendar-1", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={calendarVariants} style={{ transformOrigin: "center" }}>
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18" />
        <motion.path
          variants={numberVariants}
          d="M11 14h1v4"
          style={{ transformOrigin: "11px 16px" }}
        />
      </motion.g>
    </motion.svg>
  );
};

export default Calendar1;
