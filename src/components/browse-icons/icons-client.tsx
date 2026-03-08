"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ANIMATED_ICONS } from "@/lib/collections";
import { SearchBar } from "@/components/icons/search-bar";
import { IconGrid } from "@/components/icons/icon-grid";
import { HomeContainerVariants, HomeItemVariants } from "@/lib/variants";

import HeroPill from "@/components/home/hero-pill";
import Heading from "@/components/browse-icons/heading";
import SubHeading from "@/components/browse-icons/sub-heading";
import IconsNotFound from "@/components/browse-icons/icons-not-found";

export default function IconsClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIcons = useMemo(() => {
    return ANIMATED_ICONS.filter((icon) => {
      const matchesSearch = icon.label
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
        <motion.div
          variants={HomeContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <HeroPill />
          <Heading />
          <SubHeading />

          <motion.div variants={HomeItemVariants} className="w-full mb-8">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </motion.div>
        </motion.div>
      </div>

      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <IconGrid icons={filteredIcons} />

        {filteredIcons.length === 0 && (
          <IconsNotFound setSearchQuery={setSearchQuery} />
        )}
      </section>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </main>
  );
}
