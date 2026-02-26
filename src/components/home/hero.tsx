"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";
import { ArrowRight, Sparkles, Command, Cpu, Layers, Hexagon, Zap, Shield, Star, Infinity as InfinityIcon } from "lucide-react";

export const Hero = () => {
  const SCATTERED_ICONS = [
    { icon: Command, top: "15%", left: "10%", delay: 0 },
    { icon: Cpu, top: "25%", right: "15%", delay: 0.2 },
    { icon: Layers, bottom: "20%", left: "15%", delay: 0.4 },
    { icon: Hexagon, bottom: "30%", right: "10%", delay: 0.6 },
    { icon: Star, top: "40%", left: "5%", delay: 0.8 },
    { icon: Zap, top: "10%", right: "25%", delay: 1 },
    { icon: Shield, bottom: "10%", right: "25%", delay: 1.2 },
    { icon: InfinityIcon, bottom: "40%", left: "25%", delay: 1.4 },
  ];
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Scattered background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {SCATTERED_ICONS.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              className="absolute text-muted-foreground/20 pointer-events-auto cursor-pointer transition-colors duration-300 hover:text-primary"
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: item.delay,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.6,
                rotate: 25,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              <Icon size={48} strokeWidth={1} />
            </motion.div>
          );
        })}
      </div>

      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-40 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] opacity-30 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm shadow-[0_0_15px_rgba(29,161,242,0.15)]">
              <Sparkles size={16} />
              <span>Introducing Void Icons v0.1.0</span>
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-foreground"
          >
            Bring your interfaces to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              life with motion
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
          >
            A carefully crafted collection of high-quality, animated SVG icons
            designed to make modern web applications feel more dynamic, responsive, and incredibly polished.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              href="/icons"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(29,161,242,0.3)] hover:shadow-[0_0_30px_rgba(29,161,242,0.5)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                Browse Icons
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-border text-foreground font-semibold rounded-full hover:bg-muted/50 transition-colors w-full sm:w-auto"
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
