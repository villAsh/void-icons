"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { GridWrapper } from "../system/grid-wrapper";
import AnimatedGridLines from "../system/animated-grid-lines";
import { Button } from "../ui/button";

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative w-full min-h-[calc(100dvh)]  flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-black">
      <GridWrapper />

      <AnimatedGridLines />

      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none dark:from-black dark:to-black opacity-80 z-10" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] w-[80%] max-w-[800px] h-[400px] bg-white dark:bg-black blur-[80px] pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-50 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 text-black/60 bg-white/50 text-xs font-medium tracking-wide uppercase hover:border-black/20 hover:text-black transition-all cursor-default dark:border-white/10 dark:text-white/60 dark:bg-black/50 dark:hover:text-white dark:hover:border-white/20">
              <Sparkles
                size={14}
                className="text-black/40 dark:text-white/40"
              />
              <span className="translate-y-[0.5px]">Void Icons v0.1.0</span>
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] mb-8 text-black dark:text-white leading-[1.05] z-50"
          >
            Lucide icons <br className="hidden md:block" />
            <span className="text-black/40 dark:text-white/40">
              Now in motion
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-black/60 dark:text-white/60 mb-14 max-w-2xl leading-relaxed font-normal mx-auto z-50"
          >
            Drop-in animated wrappers for Lucide icons, built with Framer Motion
            and designed for modern React apps.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center z-50"
          >
            <Button
              href="/icons"
              variant="void"
              size="void"
              withHoverSweep
            >
              Browse Collection
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300 ease-out opacity-70"
              />
            </Button>

            <Button
              href="https://github.com/void-icons"
              variant="voidSecondary"
              size="void"
              withHoverSweep
            >
              Documentation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
