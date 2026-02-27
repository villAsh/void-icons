"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

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
      <div className="absolute top-0 inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none dark:from-black dark:to-black opacity-80 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 text-black/60 bg-white/50 text-xs font-medium tracking-wide uppercase hover:border-black/20 hover:text-black transition-all cursor-default dark:border-white/10 dark:text-white/60 dark:bg-black/50 dark:hover:text-white dark:hover:border-white/20">
              <Sparkles size={14} className="text-black/40 dark:text-white/40" />
              <span className="translate-y-[0.5px]">Void Icons v0.1.0</span>
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] mb-8 text-black dark:text-white leading-[1.05]"
          >
            Lucide icons <br className="hidden md:block" />
            <span className="text-black/40 dark:text-white/40">
             Now in motion
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-black/60 dark:text-white/60 mb-14 max-w-2xl leading-relaxed font-normal mx-auto"
          >
           Drop-in animated wrappers for Lucide icons, built with Framer Motion and designed for modern React apps.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              href="/icons"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-[12px] overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] w-full sm:w-auto text-[15px]"
            >
              <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Browse Collection
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 ease-out opacity-70" />
              </span>
            </Link>

            <a
              href="https://github.com/void-icons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-black/10 text-black font-medium rounded-[12px] hover:bg-black/5 transition-all w-full sm:w-auto text-[15px] dark:border-white/10 dark:text-white dark:hover:bg-white/5"
            >
              Documentation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
