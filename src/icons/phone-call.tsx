import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const phoneVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, -15, 15, -15, 15, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const signalVariants: Variants = {
  initial: { opacity: 1 },
  hover: {
    opacity: [1, 0, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const PhoneCall = ({
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
      className={cn("lucide lucide-phone-call", className)}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      <motion.g variants={signalVariants}>
        <path d="M13 2a9 9 0 0 1 9 9" />
        <path d="M13 6a5 5 0 0 1 5 5" />
      </motion.g>
      <motion.path
        variants={phoneVariants}
        style={{ transformOrigin: "12px 16px" }}
        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
      />
    </motion.svg>
  );
};

export default PhoneCall;
