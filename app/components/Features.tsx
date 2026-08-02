"use client";

import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";

const features = [
  {
    id: "feature_1",
    headline: "Always on time.",
    body: `We know your schedule depends on ours. Our walkers are local neighbors who show up rain or shine, ensuring your dog never misses their midday break.`,
    trustSignal: "GPS-tracked walks for your peace of mind.",
  },
  {
    id: "feature_2",
    headline: "Trained for the unexpected.",
    body: `Every Acme walker is background-checked, fully insured, and certified in pet first aid. We treat your home and your pet with the same respect we give our own.`,
    trustSignal: "Fully insured and background-checked.",
  },
  {
    id: "feature_3",
    headline: "More than just a walk.",
    body: `We don’t just watch the clock. Whether it’s a 30-minute brisk walk or a quiet puppy visit, we tailor every outing to your dog’s energy level and personality.`,
    trustSignal: "Personalized care for every breed.",
  },
];

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

const cardVariants = {
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

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-canvas-primary)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible md:snap-none"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.id}
              variants={cardVariants}
              className="min-w-[85vw] md:min-w-0 snap-center flex flex-col bg-[var(--color-canvas-secondary)] rounded-[8px] overflow-hidden border border-[var(--color-border)]"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <ProjectImage
                  id={feature.id as "feature_1" | "feature_2" | "feature_3"}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-[family-name:var(--font-display)] text-[22px] md:text-[28px] leading-[1.2] tracking-[-0.01em] text-[var(--color-text-primary)] mb-4">
                  {feature.headline}
                </h3>
                
                <p className="font-[family-name:var(--font-body)] text-[16px] md:text-[17px] leading-[1.6] text-[var(--color-text-muted)] mb-8 flex-grow">
                  {feature.body}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 bg-[var(--color-trust)] text-white text-[14px] font-medium rounded-[4px] tracking-[0.02em]">
                    {feature.trustSignal}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
