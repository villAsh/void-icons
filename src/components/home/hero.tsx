"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { GridWrapper } from "../system/grid-wrapper";
import AnimatedGridLines from "../system/animated-grid-lines";
import { Button } from "../ui/button";
import { HomeContainerVariants, HomeItemVariants } from "@/lib/variants";
import HeroPill from "./hero-pill";
import { HeroHeading } from "./heading";
import { HeroDescription } from "./description";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100dvh)]  flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-black">
      <GridWrapper />
      <AnimatedGridLines />

      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none dark:from-black dark:to-black opacity-80 z-10" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] w-[80%] max-w-[800px] h-[400px] bg-white dark:bg-black blur-[80px] pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-50 text-center">
        <motion.div
          variants={HomeContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <HeroPill />
          <HeroHeading />
          <HeroDescription />
          <motion.div
            variants={HomeItemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center z-50"
          >
            <Button href="/icons" variant="void" size="void" withHoverSweep>
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
