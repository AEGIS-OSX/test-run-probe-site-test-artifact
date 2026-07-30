"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "./ProjectImage";

/**
 * Hero component for the Acme Walkies landing page.
 * Features a left-aligned text panel and a full-bleed image on the right.
 * Includes staggered reveal animations using Framer Motion.
 */
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section 
      id="hero" 
      className="relative w-full min-h-[80vh] flex flex-col md:flex-row overflow-hidden bg-[var(--color-canvas)]"
    >
      {/* Text Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-[var(--space-lg)] py-[var(--space-3xl)] md:py-[var(--space-5xl)]">
        <motion.div 
          className="max-w-[540px] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-[36px] md:text-[56px] leading-[1.1] md:leading-[1.05] tracking-[-0.02em] font-[family-name:var(--font-display)] text-[var(--color-text)] mb-[var(--space-md)] text-balance"
          >
            Your dog’s favorite part of the day.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-[16px] md:text-[17px] leading-[1.6] md:leading-[1.65] font-[family-name:var(--font-body)] text-[var(--color-text-muted)] mb-[var(--space-xl)] max-w-[480px]"
          >
            Reliable, unhurried neighborhood walks for the dogs of Silver Lake. Serving our local community with personal care since 2014.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-[24px] py-[12px] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-white)] rounded-[var(--radius-md)] font-[family-name:var(--font-body)] text-[14px] font-medium leading-[1.4] tracking-[0.06em] uppercase transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Panel */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectImage 
            id="hero" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
