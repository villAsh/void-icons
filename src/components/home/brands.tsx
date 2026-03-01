"use client";

import { motion, SVGMotionProps, Variants } from "motion/react";
import React from "react";

type IconProps = SVGMotionProps<SVGSVGElement> & { size?: number };

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 2, bounce: 0, delay: 0.2 },
      opacity: { duration: 0.2 }
    }
  }
};

const pulseVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0.5 },
  visible: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const BrandOfSacrifice = ({ size = 48, ...props }: IconProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Center vertical line */}
    <motion.path
      d="M50 10V90"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Top left angle */}
    <motion.path
      d="M50 20L20 40M20 40L50 60"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Top right angle */}
    <motion.path
      d="M50 20L80 40M80 40L50 60"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Bottom left angle */}
    <motion.path
      d="M50 70L30 85"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Bottom right angle */}
    <motion.path
      d="M50 70L70 85"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Inner diamond / bleeding effect */}
    <motion.path
      d="M50 35L42 45L50 55L58 45Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.1"
      variants={pathVariants}
    />
  </motion.svg>
);

export const EclipseEye = ({ size = 48, ...props }: IconProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Outer Eclipse Ring */}
    <motion.circle
      cx="50"
      cy="50"
      r="40"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="10 5"
      variants={pathVariants}
    />
    {/* Outer Eye Shape */}
    <motion.path
      d="M10 50C25 20 75 20 90 50C75 80 25 80 10 50Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Inner Pupil Vertical */}
    <motion.path
      d="M50 35V65"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      variants={pathVariants}
    />
    {/* Inner Pupil Horizontal */}
    <motion.path
      d="M40 50H60"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      variants={pathVariants}
    />
  </motion.svg>
);

export const VoidRune = ({ size = 48, ...props }: IconProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Central Triangle */}
    <motion.path
      d="M50 20L80 75H20Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Inverted Triangle Intersecting */}
    <motion.path
      d="M50 85L20 30H80Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Abyssal Dots */}
    <motion.circle cx="50" cy="50" r="4" fill="currentColor" variants={pulseVariants} />
    <motion.circle cx="50" cy="20" r="4" fill="currentColor" variants={pulseVariants} />
    <motion.circle cx="20" cy="75" r="4" fill="currentColor" variants={pulseVariants} />
    <motion.circle cx="80" cy="75" r="4" fill="currentColor" variants={pulseVariants} />
  </motion.svg>
);

export const ShatteredHex = ({ size = 48, ...props }: IconProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Fragment 1 (Top) */}
    <motion.path
      d="M30 25L50 10L70 25H30Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Fragment 2 (Right) */}
    <motion.path
      d="M75 30L90 50L75 70V30Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Fragment 3 (Bottom) */}
    <motion.path
      d="M30 75L50 90L70 75H30Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Fragment 4 (Left) */}
    <motion.path
      d="M25 30L10 50L25 70V30Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      variants={pathVariants}
    />
    {/* Core fragment floating */}
    <motion.path
      d="M40 40L60 40L60 60L40 60Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.2"
      variants={pathVariants}
    />
    {/* Shatter lines escaping */}
    <motion.path d="M50 50L75 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" variants={pathVariants} />
    <motion.path d="M50 50L25 80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" variants={pathVariants} />
  </motion.svg>
);
