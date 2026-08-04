"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "./ProjectImage";

export default function Testimonial() {
  return (
    <motion.section
      className="relative bg-[var(--color-canvas-secondary)] py-24 overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 opacity-10 pointer-events-none hidden lg:block">
        <ProjectImage id="social_proof" />
      </div>
      <div className="container-main relative z-10">
        <div className="max-w-[800px] mx-auto text-center">
          <blockquote>
            <p className="font-[family-name:var(--font-display)] italic text-[var(--color-text)] text-[22px] md:text-[28px] leading-[1.25] md:leading-[1.2] tracking-[-0.01em]">
              {`"Acme Walkies is the only service I trust with my senior lab. They don't just walk him; they actually care about him. It feels like having a trusted neighbor looking out for us."`}
            </p>
            <footer className="mt-8">
              <cite className="not-italic text-[var(--color-text-muted)] text-[14px] leading-[1.5] tracking-[0.02em]">
                Sarah M., Silver Lake resident
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </motion.section>
  );
}
