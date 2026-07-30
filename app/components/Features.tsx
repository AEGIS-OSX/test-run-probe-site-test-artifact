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
      staggerChildren: 0.2,
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

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-[var(--color-canvas-primary)]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 no-scrollbar"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="min-w-[85vw] md:min-w-0 snap-center flex flex-col bg-[var(--color-canvas-secondary)] rounded-[8px] border border-[var(--color-border)] overflow-hidden"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <ProjectImage
                  id={feature.id}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-[28px] md:text-[28px] leading-[1.2] tracking-[-0.01em] font-[family-name:var(--font-display)] text-[var(--color-text-primary)] mb-4">
                  {feature.headline}
                </h3>
                <p className="text-[16px] md:text-[17px] leading-[1.6] md:leading-[1.65] font-[family-name:var(--font-body)] text-[var(--color-text-muted)] mb-8 flex-grow">
                  {feature.body}
                </p>
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-trust-green)] text-white text-[14px] font-medium leading-[1.4] tracking-[0.06em] uppercase">
                    {feature.trustSignal}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
