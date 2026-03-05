import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const circleVariants: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  hover: {
    pathLength: [1, 0.6, 1],
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const makeRayVariants = (delay: number): Variants => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut", delay },
  },
  hover: {
    pathLength: [1, 0, 1],
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: 2,
      delay: delay * 0.5,
    },
  },
});

const rays = [
  { d: "M12 2v2", delay: 0.45 },
  { d: "M12 20v2", delay: 0.5 },
  { d: "m4.93 4.93 1.41 1.41", delay: 0.55 },
  { d: "m17.66 17.66 1.41 1.41", delay: 0.6 },
  { d: "M2 12h2", delay: 0.65 },
  { d: "M20 12h2", delay: 0.7 },
  { d: "m6.34 17.66-1.41 1.41", delay: 0.75 },
  { d: "m19.07 4.93-1.41 1.41", delay: 0.8 },
];

const Sun = ({
  size = 24,
  className,
  strokeWidth = 2,
  width,
  height,
  ...rest
}: IconProps) => {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="initial"
      animate={"animate"}
      whileHover={"hover"}
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      className={cn("lucide lucide-sun", className)}
    >
      <motion.circle variants={circleVariants} cx="12" cy="12" r="4" />
      {rays.map(({ d, delay }) => (
        <motion.path key={d} variants={makeRayVariants(delay)} d={d} />
      ))}
    </motion.svg>
  );
};

export default Sun;
