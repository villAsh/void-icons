"use client";
import { motion } from "motion/react";
import { useState } from "react";

export const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center gap-3"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <svg width="38" height="38" viewBox="0 0 55 55" fill="none">
        {/* Gravity well lines */}
        {[28, 24, 20, 16].map((r, i) => (
          <motion.circle
            key={i}
            cx="27.5"
            cy="27.5"
            r={r}
            stroke="url(#singularityGradient)"
            strokeWidth="0.6"
            fill="none"
            opacity={0.35 - i * 0.06}
            animate={
              isHovered
                ? {
                    r: [r, r - 1.2, r],
                    opacity: [0.8, 0.6, 0.4, 0.2, 0.1, 0],
                    scale: [1.05, 0.8, 0.6, 0.4, 0.2, 0],
                  }
                : {
                    opacity: 0.55 - i * 0.06,
                    r,
                    scale: 1,
                  }
            }
            transition={{
              duration: 1.5,
              repeat: isHovered ? 0 : Infinity,
              delay: i * 0.15,
            }}
          />
        ))}

        {/* Event horizon */}
        <motion.circle
          cx="27.5"
          cy="27.5"
          r="12"
          fill="url(#singularityCore)"
          animate={
            isHovered
              ? {
                  opacity: [0.8, 0.6, 0.4, 0.2, 0.1, 0],
                  scale: [1.05, 0.8, 0.6, 0.4, 0.2, 0],
                }
              : {
                  opacity: 1,
                  scale: 1,
                }
          }
          transition={{ duration: 2, repeat: isHovered ? 0 : 0 }}
        />

        {/* Singularity point */}
        {/* <motion.circle
          cx="27.5"
          cy="27.5"
          r="4"
          fill="#4c1d95"
          animate={
            isHovered
              ? {
                  r: [4, 5, 4],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
        /> */}

        {/* Matter streams */}
        {[45, 135, 225, 315].map((angle, i) => (
          <motion.line
            key={i}
            x1={27.5 + 26 * Math.cos((angle * Math.PI) / 180)}
            y1={27.5 + 26 * Math.sin((angle * Math.PI) / 180)}
            x2={27.5 + 12 * Math.cos((angle * Math.PI) / 180)}
            y2={27.5 + 12 * Math.sin((angle * Math.PI) / 180)}
            stroke="url(#streamGradient)"
            strokeWidth="1"
            opacity="0"
            animate={
              isHovered
                ? {
                    opacity: [0, 0.5, 0],
                  }
                : { opacity: 0 }
            }
            transition={{
              duration: 1,
              repeat: isHovered ? Infinity : 0,
              delay: i * 0.25,
            }}
          />
        ))}

        <defs>
          <linearGradient id="singularityGradient">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <radialGradient id="singularityCore">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="oklch(37.9% 0.146 265.522)" />
          </radialGradient>
          <linearGradient id="streamGradient">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div>
        <span className="text-2xl font-primary-sans font-bold bg-clip-text">
          <span className="text-primary">v𝓸id</span>{" "}
          <span className="text-neutral-400">icons</span>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
