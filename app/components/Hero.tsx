"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "./ProjectImage";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col md:flex-row overflow-hidden bg-[var(--color-canvas)]">
      {/* Text Content Panel */}
      <div className="w-full md:w-1/2 flex items-center px-[var(--space-lg)] py-[var(--space-3xl)] md:py-0 md:px-[var(--space-4xl)] lg:px-[var(--space-5xl)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[540px]"
        >
          {/* Eyebrow - 0.1s stagger */}
          <motion.span
            variants={itemVariants}
            className="inline-block font-[family-name:var(--font-body)] text-[var(--text-sm)] font-medium tracking-[0.06em] uppercase text-[var(--color-accent)] mb-[var(--space-md)]"
          >
            Silver Lake, CA
          </motion.span>

          {/* Headline - 0.2s stagger */}
          <motion.h1
            variants={itemVariants}
            className="font-[family-name:var(--font-display)] text-[36px] md:text-[56px] leading-[1.1] md:leading-[1.05] tracking-[-0.02em] text-[var(--color-text)] mb-[var(--space-lg)] text-balance"
          >
            Your dog’s favorite part of the day.
          </motion.h1>

          {/* Subheadline - 0.3s stagger */}
          <motion.p
            variants={itemVariants}
            className="font-[family-name:var(--font-body)] text-[16px] md:text-[17px] leading-[1.6] md:leading-[1.65] text-[var(--color-text-muted)] mb-[var(--space-2xl)] max-w-[480px]"
          >
            Reliable, unhurried neighborhood walks for the dogs of Silver Lake. Serving our local community with personal care since 2014.
          </motion.p>

          {/* CTA - 0.4s stagger */}
          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-[24px] py-[12px] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[0.06em] uppercase rounded-[var(--radius-button)] transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Panel */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <ProjectImage
            id="hero"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
