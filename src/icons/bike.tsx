import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const bikeVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: [0, -1.5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const wheelVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    scale: [1, 1.05, 0.95, 1],
    rotate: 360,
    transition: {
      duration: 1,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const Bike = ({
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
      className={cn("lucide lucide-bike", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      variants={bikeVariants}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.circle
        cx="18.5"
        cy="17.5"
        r="3.5"
        variants={wheelVariants}
        style={{ originX: "50%", originY: "50%" }}
      />

      <motion.circle
        cx="5.5"
        cy="17.5"
        r="3.5"
        variants={wheelVariants}
        style={{ originX: "50%", originY: "50%" }}
      />

      <circle cx="15" cy="5" r="1" />

      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </motion.svg>
  );
};

export default Bike;
