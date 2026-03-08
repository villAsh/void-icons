import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const waveVariants: Variants = {
  initial: { scale: 0.8, opacity: 0.3 },
  hover: {
    scale: [0.8, 1.2, 0.8],
    opacity: [0.3, 1, 0.3],
    transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
  },
};

const BluetoothSearching = ({
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
      className={cn("lucide lucide-bluetooth-searching", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      {/* Bluetooth symbol */}
      <motion.path d="m7 7 10 10-5 5V2l5 5L7 17" />

      {/* Searching waves */}
      <motion.path
        d="M20.83 14.83a4 4 0 0 0 0-5.66"
        variants={waveVariants}
        style={{ transformOrigin: "50% 50%" }}
      />
      <motion.path
        d="M18 12h.01"
        variants={waveVariants}
        style={{ transformOrigin: "50% 50%" }}
      />
    </motion.svg>
  );
};

export default BluetoothSearching;
