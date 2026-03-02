"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ANIMATED_ICONS } from "@/lib/collections";
import { SearchBar } from "@/components/icons/search-bar";
import { FilterChips } from "@/components/icons/filter-chips";
import { IconGrid } from "@/components/icons/icon-grid";
import { GridWrapper } from "@/components/system/grid-wrapper";
import AnimatedGridLines from "@/components/system/animated-grid-lines";
import { HomeContainerVariants, HomeItemVariants } from "@/lib/variants";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(ANIMATED_ICONS.map((icon) => icon.category).filter(Boolean))) as string[],
];

import HeroPill from "@/components/home/hero-pill";

export default function IconsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredIcons = useMemo(() => {
    return ANIMATED_ICONS.filter((icon) => {
      const matchesSearch = icon.label.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || icon.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-white dark:bg-black">
      <GridWrapper />
      <AnimatedGridLines />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
        <motion.div
          variants={HomeContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <HeroPill />
          
          <motion.h1
            variants={HomeItemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            Explore the <span className="text-primary italic">Collection</span>
          </motion.h1>
          
          <motion.p
            variants={HomeItemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            A curated library of premium, high-performance animated SVG icons. 
            Beautifully crafted for modern web applications.
          </motion.p>

          <motion.div variants={HomeItemVariants} className="w-full mb-8">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </motion.div>

          <motion.div variants={HomeItemVariants}>
            <FilterChips
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Main Grid Section */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <IconGrid icons={filteredIcons} />
        
        {filteredIcons.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground font-medium">
              No icons found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-primary hover:underline font-medium"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </section>

      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </main>
  );
}
