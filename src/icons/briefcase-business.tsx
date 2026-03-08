import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const handleVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: -1.5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const bodyVariants: Variants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -0.5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const BriefcaseBusiness = ({
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
      className={cn("lucide lucide-briefcase-business", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.path
        variants={bodyVariants}
        d="M12 12h.01"
      />
      <motion.path
        variants={handleVariants}
        d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
      />
      <motion.path
        variants={bodyVariants}
        d="M22 13a18.15 18.15 0 0 1-20 0"
      />
      <motion.rect
        variants={bodyVariants}
        width="20"
        height="14"
        x="2"
        y="6"
        rx="2"
      />
    </motion.svg>
  );
};

export default BriefcaseBusiness;
