import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const slashVariants: Variants = {
  initial: {
    pathLength: 1,
    opacity: 1,
  },
  hover: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const vibrationVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const BluetoothOff = ({
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
      className={cn("lucide lucide-bluetooth-off", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      {/* Bluetooth symbol */}
      <motion.path d="m17 17-5 5V12l-5 5" variants={vibrationVariants} />
      <motion.path d="M14.5 9.5 17 7l-5-5v4.5" variants={vibrationVariants} />

      {/* Slash */}
      <motion.path d="m2 2 20 20" variants={slashVariants} />
    </motion.svg>
  );
};

export default BluetoothOff;
