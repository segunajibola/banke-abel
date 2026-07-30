"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { navLinks, couple } from "@/lib/data";
import { scrollToId, cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "./ThemeProvider";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar({
  isMusicPlaying,
  onToggleMusic,
}: {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrolled();
  const { theme, toggleTheme } = useTheme();
  const activeHref = useActiveSection(navLinks.map((l) => l.href));

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass-panel py-3 shadow-[0_10px_40px_-20px_rgba(43,36,32,0.4)]" : "py-6",
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => scrollToId("#home")}
            className="font-serif text-2xl tracking-wide text-[color:var(--ink)]"
            aria-label="Back to home"
          >
            {couple.monogram}
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToId(link.href)}
                className={cn(
                  "relative font-sans text-sm tracking-wide transition-colors hover:text-[color:var(--gold)]",
                  activeHref === link.href
                    ? "text-[color:var(--gold)]"
                    : "text-[color:var(--ink)]",
                )}
              >
                {link.label}
                {activeHref === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-[color:var(--gold)]"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleMusic}
              aria-label={isMusicPlaying ? "Pause background music" : "Play background music"}
              aria-pressed={isMusicPlaying}
              className="rounded-full p-2.5 text-[color:var(--ink)] transition-colors hover:text-[color:var(--gold)]"
            >
              {isMusicPlaying ? <Volume2 size={19} /> : <VolumeX size={19} />}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="rounded-full p-2.5 text-[color:var(--ink)] transition-colors hover:text-[color:var(--gold)]"
            >
              {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="rounded-full p-2.5 text-[color:var(--ink)] transition-colors hover:text-[color:var(--gold)] lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
