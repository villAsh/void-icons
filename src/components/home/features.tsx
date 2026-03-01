"use client";

import { motion } from "motion/react";
import { features } from "@/lib/collections";

interface FeatureCardProps {
  feature: (typeof features)[0];
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      className="relative group p-8 rounded-3xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors cursor-default"
    >
      {/* Background gradient blob that reveals on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}
      />

      <div className="mb-6 inline-flex p-4 rounded-2xl bg-background border border-border shadow-sm group-hover:scale-110 transition-transform duration-300 ease-spring">
        <Icon size={32} className="text-foreground" />
      </div>

      <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-foreground">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
        {feature.description}
      </p>
    </motion.div>
  );
};

export const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Icons that behave like components
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Not just SVGs — real components with animation, control, and zero
            friction.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
