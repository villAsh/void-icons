"use client";
import { HomeItemVariants } from "@/lib/variants";
import { motion } from "motion/react";

const SubHeading = () => {
  return (
    <motion.p
      variants={HomeItemVariants}
      className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
    >
      A curated library of premium, high-performance animated SVG icons.
      Beautifully crafted for modern web applications.
    </motion.p>
  );
};

export default SubHeading;
