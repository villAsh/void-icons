"use client";
import { HomeItemVariants } from "@/lib/variants";
import { motion } from "motion/react";

const Heading = () => {
  return (
    <motion.h1
      variants={HomeItemVariants}
      className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
    >
      Explore the <span className="text-primary italic">Collection</span>
    </motion.h1>
  );
};

export default Heading;
