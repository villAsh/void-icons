"use client";

import { motion } from "motion/react";
import { Github } from "lucide-react";
import { Button } from "../ui/button";

export const CallToAction = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Decorative background vectors - massive grid for CTA */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring" }}
          className="bg-card/50 backdrop-blur-xl border border-border/50 p-10 md:p-16 rounded-[2.5rem] shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bring motion to your interface.
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Explore the full collection and discover motion-ready Lucide
            components crafted for modern React apps.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Button
              href="/icons"
              variant="void"
              size="void"
              className="rounded-full px-10"
              withHoverSweep
            >
              Browse icons
            </Button>
            <Button
              href="https://github.com/villash/void-icons"
              variant="voidSecondary"
              size="void"
              className="rounded-full px-10"
              withHoverSweep
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                size={18}
                className="opacity-70 group-hover:scale-110 transition-transform duration-300 ease-out"
              />
              Star on GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
