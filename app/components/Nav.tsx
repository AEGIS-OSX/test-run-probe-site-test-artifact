"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectImage } from "./ProjectImage";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`sticky top-0 left-0 right-0 z-50 bg-[var(--color-canvas)] backdrop-blur-sm border-b border-[var(--color-border)] transition-shadow duration-300 ease-out ${
        scrolled ? "shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "shadow-none"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-main flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center">
          <ProjectImage id="logo" className="h-8 w-auto" />
        </a>
        <a
          href="#contact"
          className="btn-primary"
        >
          Get in touch
        </a>
      </div>
    </motion.nav>
  );
}
