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

const checkVariants: Variants = {
  initial: { pathLength: 1, scale: 1 },
  hover: {
    pathLength: [0, 1],
    scale: [0.8, 1.2, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.1,
    },
  },
};

const CalendarCheck2 = ({
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
      className={cn("lucide lucide-calendar-check-2", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={calendarVariants} style={{ transformOrigin: "center" }}>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
        <path d="M3 10h18" />
        <motion.path
          variants={checkVariants}
          d="m16 20 2 2 4-4"
          style={{ transformOrigin: "19px 19px" }}
        />
      </motion.g>
    </motion.svg>
  );
};

export default CalendarCheck2;
