import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const cameraVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const lensVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 0.7, 1.1, 1],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const Camera = ({
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
      className={cn("lucide lucide-camera", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={cameraVariants} style={{ transformOrigin: "center" }}>
        <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
        <motion.circle
          variants={lensVariants}
          cx="12"
          cy="13"
          r="3"
          style={{ transformOrigin: "12px 13px" }}
        />
      </motion.g>
    </motion.svg>
  );
};

export default Camera;
