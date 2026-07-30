import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-canvas-secondary)] py-[var(--space-2xl)]">
      <div className="container-main text-center">
        <motion.p
          className="font-[family-name:var(--font-body)] text-[var(--color-text)] text-[var(--text-base)]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Acme Walkies. Your neighborhood dog walkers.
        </motion.p>
        <motion.p
          className="mt-[var(--space-sm)] font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[var(--text-sm)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          &copy; 2026 Acme Walkies. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
