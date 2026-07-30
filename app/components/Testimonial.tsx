"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="bg-[var(--color-canvas-secondary)] py-[var(--space-4xl)] md:py-[var(--space-5xl)]">
      <div className="container-main">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-[family-name:var(--font-display)] text-[var(--color-text)] text-[28px] md:text-[40px] leading-[1.15] md:leading-[1.1] tracking-[-0.01em] md:tracking-[-0.015em] mb-[var(--space-lg)]">
              &ldquo;Acme Walkies is the only service I trust with my senior lab. They don&rsquo;t just walk him; they actually care about him. It feels like having a trusted neighbor looking out for us.&rdquo;
            </p>
            <footer className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[14px] leading-[1.5] tracking-[0.02em]">
              &mdash; Sarah M., Silver Lake resident
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
