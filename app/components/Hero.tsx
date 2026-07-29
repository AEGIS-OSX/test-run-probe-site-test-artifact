"use client";

import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";

/**
 * Hero Section for Acme Walkies.
 * Features a left-aligned text panel and a full-bleed image on the right.
 * Uses Framer Motion for staggered entrance animations.
 */
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-canvas-primary)]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="flex flex-col items-center md:flex-row md:min-h-[700px]">
          {/* Text Panel */}
          <motion.div
            className="z-10 w-full py-16 md:w-1/2 md:py-24 md:pr-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="font-[family-name:var(--font-display)] text-[36px] leading-[1.1] tracking-[-0.02em] text-[var(--color-text-primary)] md:text-[56px] md:leading-[1.05]"
            >
              {`Your dog’s favorite part of the day.`}
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="mt-6 font-[family-name:var(--font-body)] text-[16px] leading-[1.6] text-[var(--color-text-muted)] md:text-[17px] md:leading-[1.65]"
            >
              {`Reliable, unhurried neighborhood walks for the dogs of Silver Lake. Serving our local community with personal care since 2014.`}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10">
              <a
                href="#contact"
                className="inline-block rounded-[6px] bg-[var(--color-accent-cta)] px-8 py-4 font-[family-name:var(--font-body)] text-[14px] font-medium uppercase tracking-[0.06em] text-white transition-colors duration-200 hover:bg-[var(--color-accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-cta)] focus:ring-offset-2"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          {/* Image Panel - Bleeds right on desktop */}
          <div className="relative h-[400px] w-full md:absolute md:right-0 md:top-0 md:h-full md:w-1/2">
            <motion.div 
              className="h-full w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ProjectImage 
                id="hero" 
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
