"use client";
import { Github } from "lucide-react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  const path = usePathname();

  const links = [
    { to: "/", label: "Home" },
    { to: "/icons", label: "Icons" },
  ];

  return (
    <motion.nav className="sticky top-0 left-0 right-0 z-50  h-[70px] bg-transparent flex justify-center items-center">
      <div className="max-w-7xl px-6 h-16 flex items-center justify-between w-full">
        <Link href={"/"} className="flex items-center gap-2.5">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-base font-[550] transition-colors hover:text-primary ${
                path === link.to ? "text-primary" : "text-neutral-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
