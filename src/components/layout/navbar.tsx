"use client";

import { ProjectImage } from "@/app/components/ProjectImage";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-canvas)]/80 backdrop-blur-md border-b border-[var(--color-border)]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-main flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <ProjectImage id="logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-[family-name:var(--font-display)] text-[var(--color-text)] text-[18px] leading-[1.2] tracking-[-0.01em]">
            Acme Walkies
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-text-muted)] text-[14px] leading-[1.5] tracking-[0.02em] hover:text-[var(--color-text)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#pricing"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-[var(--color-text)] text-[var(--color-canvas)] text-[14px] font-medium leading-[1.5] tracking-[0.02em] rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          Get Started
        </Link>
      </div>
    </motion.header>
  );
}
