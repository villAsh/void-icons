"use client";
import { Button } from "../ui/button";
import { ShowcaseHeading } from "./heading";
import { MoveUpRight } from "lucide-react";
import type { IconProps } from "@/icons/star";
import type { ComponentType } from "react";
import { ANIMATED_ICONS } from "@/lib/collections";
import { ShowcaseCard } from "./showcase-card";

export interface ShowcaseItem {
  icon: ComponentType<IconProps>;
  name: string;
  label: string;
  category?: string;
}

export const Showcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <ShowcaseHeading />
          <Button
            href="/icons"
            variant="link"
            className="hidden md:inline-flex items-center gap-2 group p-0"
          >
            View all icons{" "}
            <MoveUpRight
              size={16}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {ANIMATED_ICONS.slice(0, 10).map((item, index) => (
            <ShowcaseCard key={item.name} item={item} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button href="/icons" variant="link" className="group p-0">
            View all icons{" "}
            <MoveUpRight
              size={16}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
