"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "./ProjectImage";

const features = [
  {
    id: "feature_1" as const,
    headline: "Always on time.",
    body: "We know your schedule depends on ours. Our walkers are local neighbors who show up rain or shine, ensuring your dog never misses their midday break.",
    trustSignal: "GPS-tracked walks for your peace of mind.",
  },
  {
    id: "feature_2" as const,
    headline: "Trained for the unexpected.",
    body: "Every Acme walker is background-checked, fully insured, and certified in pet first aid. We treat your home and your pet with the same respect we give our own.",
    trustSignal: "Fully insured and background-checked.",
  },
  {
    id: "feature_3" as const,
    headline: "More than just a walk.",
    body: "We don’t just watch the clock. Whether it’s a 30-minute brisk walk or a quiet puppy visit, we tailor every outing to your dog’s energy level and personality.",
    trustSignal: "Personalized care for every breed.",
  },
];

export default function Features() {
  return (
    <section className="py-[var(--space-4xl)] bg-[var(--color-canvas-secondary)]">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-[var(--space-2xl)] md:mb-[var(--space-3xl)]"
        >
          <h2 className="text-[var(--color-text)] font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-[var(--space-md)]">
            How we care for your dog
          </h2>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-[var(--space-lg)] pb-[var(--space-lg)] md:pb-0 md:grid md:grid-cols-3 md:overflow-x-visible md:snap-none">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-[85vw] md:min-w-0 snap-center flex flex-col p-[24px] bg-[var(--color-canvas)] rounded-[var(--radius-card)] border border-[var(--color-border)]"
            >
              <div className="aspect-[4/3] mb-[var(--space-lg)] overflow-hidden rounded-[4px]">
                <ProjectImage
                  id={feature.id}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow flex flex-col">
                <div className="mb-[var(--space-sm)]">
                  <span className="inline-block px-[8px] py-[2px] text-[12px] font-medium tracking-[0.06em] uppercase border border-[var(--color-trust)] text-[var(--color-trust)] rounded-[4px]">
                    {feature.trustSignal}
                  </span>
                </div>

                <h3 className="text-[var(--color-text)] font-[family-name:var(--font-display)] text-xl md:text-2xl mb-[var(--space-md)]">
                  {feature.headline}
                </h3>
                
                <p className="text-[var(--color-text-muted)] font-[family-name:var(--font-body)] text-base leading-relaxed">
                  {feature.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
