"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "./ProjectImage";

const features = [
  {
    id: "feature_1",
    headline: "Always on time.",
    body: "We know your schedule depends on ours. Our walkers are local neighbors who show up rain or shine, ensuring your dog never misses their midday break.",
    trustSignal: "GPS-tracked walks for your peace of mind.",
  },
  {
    id: "feature_2",
    headline: "Trained for the unexpected.",
    body: "Every Acme walker is background-checked, fully insured, and certified in pet first aid. We treat your home and your pet with the same respect we give our own.",
    trustSignal: "Fully insured and background-checked.",
  },
  {
    id: "feature_3",
    headline: "More than just a walk.",
    body: "We don’t just watch the clock. Whether it’s a 30-minute brisk walk or a quiet puppy visit, we tailor every outing to your dog’s energy level and personality.",
    trustSignal: "Personalized care for every breed.",
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Features() {
  return (
    <section className="bg-[var(--color-canvas)] py-[var(--space-4xl)]">
      <div className="container-main">
        <motion.div
          className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-3 gap-[var(--space-lg)] snap-x snap-mandatory scrollbar-hide"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.article
              key={feature.id}
              variants={itemVariants}
              className="min-w-[85vw] md:min-w-0 snap-center flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] mb-[var(--space-md)]">
                <ProjectImage
                  id={feature.id}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-[var(--color-text)] text-[var(--text-xl)] md:text-[var(--text-2xl)] mb-[var(--space-sm)]">
                {feature.headline}
              </h3>
              <p className="text-[var(--color-text-muted)] text-[var(--text-base)] mb-[var(--space-md)] flex-grow">
                {feature.body}
              </p>
              <div className="text-[var(--color-trust)] text-[var(--text-sm)] font-medium uppercase tracking-[0.06em] leading-[1.4]">
                {feature.trustSignal}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
