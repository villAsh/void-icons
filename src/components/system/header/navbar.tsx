"use client";

import Logo from "./logo";
import { Github } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const location = useRouter();

  const links = [
    { to: "/", label: "Home" },
    { to: "/icons", label: "Icons" },
  ];

  return (
    <motion.nav className="sticky top-0 left-0 right-0 z-50 glass h-[80px] flex justify-center items-center border-b-[1px]!  d border-neutral-300!">
      <div className="max-w-7xl px-6 h-16 flex items-center justify-between w-full">
        <Link href={"/"} className="flex items-center gap-2.5">
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
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
