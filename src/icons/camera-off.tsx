import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const cameraOffVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.4,
    },
  },
};

const strikeVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const CameraOff = ({
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
      className={cn("lucide lucide-camera-off", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      variants={cameraOffVariants}
      {...rest}
    >
      <motion.path d="M14.564 14.558a3 3 0 1 1-4.122-4.121" />
      <motion.path variants={strikeVariants} d="m2 2 20 20" />
      <motion.path d="M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175" />
      <motion.path d="M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344" />
    </motion.svg>
  );
};

export default CameraOff;
