"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";
import { ThemeToggle } from "./theme-toggle";
import Github from "@/icons/github";

const Navbar = () => {
  const path = usePathname();

  const links = [
    { to: "/", label: "Home" },
    { to: "/icons", label: "Icons" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/70 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <Link href={"/"} className="flex items-center">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              link.to === "/" ? path === "/" : path.startsWith(link.to);
            return (
              <Link
                key={link.to}
                href={link.to}
                className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground/80 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-bg"
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}

          <div className="w-px h-4 bg-border/60 mx-3" />

          <a
            href="https://github.com/villash/void-icons"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-all hover:bg-muted/50 rounded-lg group"
          >
            <Github
              size={18}
              className="group-active:scale-95 transition-transform"
            />
          </a>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
