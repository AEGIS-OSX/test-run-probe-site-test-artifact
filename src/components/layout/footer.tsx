"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[var(--color-canvas-secondary)] border-t border-[var(--color-border)]"
    >
      <div className="container-page py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-display)] text-lg text-[var(--color-text)] text-center md:text-left">
            Acme Walkies. Your neighborhood dog walkers.
          </p>
          <p className="text-[var(--color-text-muted)] text-[14px] leading-[1.5] tracking-[0.02em]">
            &copy; 2026 Acme Walkies. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
