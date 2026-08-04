"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-canvas)] border-b border-[var(--color-border)]">
      <nav className="container-page flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex-shrink-0" aria-label="Acme Walkies home">
          <ProjectImage id="logo" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--color-text-muted)] font-body text-[14px] leading-[1.5] tracking-[0.02em] hover:text-[var(--color-text)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-[6px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-[var(--color-text)] rounded-full origin-center"
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-[var(--color-text)] rounded-full"
            transition={{ duration: 0.15 }}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-[var(--color-text)] rounded-full origin-center"
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-[var(--color-canvas)] border-t border-[var(--color-border)]"
          >
            <div className="container-page flex flex-col gap-4 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--color-text-muted)] font-body text-base hover:text-[var(--color-text)] transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
