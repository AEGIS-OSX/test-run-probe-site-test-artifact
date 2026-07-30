"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <motion.section
      className="bg-[var(--color-canvas-secondary)] py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote>
            <p className="font-display text-[var(--color-text)] text-[22px] md:text-[28px] leading-[1.25] md:leading-[1.2] tracking-[-0.01em]">
              &ldquo;Acme Walkies is the only service I trust with my senior lab. They don&rsquo;t just walk him; they actually care about him. It feels like having a trusted neighbor looking out for us.&rdquo;
            </p>
            <footer className="mt-8">
              <cite className="not-italic text-[var(--color-text-muted)] text-[14px] leading-[1.5] tracking-[0.02em]">
                &mdash; Sarah M., Silver Lake resident
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </motion.section>
  );
}
